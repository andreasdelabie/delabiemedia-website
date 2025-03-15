import os
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError


SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"]
SPREADSHEET_ID = "1NOiYTZkiHgRGZiTqrCNetYf-KYEsE-xrj5ZiHT7wr-0"
SPREADSHEET_RANGE = "B2:B"


def auth():
    "Authenticate the user & create `token.json` using `credentials.json`"
    global creds
    creds = None
    # The file data/token.json stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists("data/token.json"):
        creds = Credentials.from_authorized_user_file("data/token.json", SCOPES)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                "data/credentials.json", SCOPES
            )
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open("data/token.json", "w") as token:
            token.write(creds.to_json())


def get_mailing_list():
    "Get mailing list from Google spreadsheet"
    try:
        auth()
        service = build("sheets", "v4", credentials=creds)
        sheet = service.spreadsheets()
        result = (
            sheet.values()
            .get(spreadsheetId=SPREADSHEET_ID, range=SPREADSHEET_RANGE)
            .execute()
        )
        values = result.get("values")
        return values

    except HttpError as err:
        print(err)