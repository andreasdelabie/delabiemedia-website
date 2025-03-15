import smtplib
from email.mime.text import MIMEText
import googlesheets


def send(subject, body, link):
    """
    Send update mail to mailinglist subscribers.
    Args:
        subject: Mail subject
        body: Mail body
        link: Link to attach at the bottom of the mail
    """

    msg = MIMEText(f'''\
    <html>
        <body>
            <p>{body}</p>
            <a href="{link}" target="_blank">{link}</a>
            <p>—</p>
            <i>U ontvangt deze mail omdat u zich heeft aangemeld voor onze e-mail updates.<br>Antwoord 'AFMELDEN' op deze mail om u af te melden.</i>
        </body>
    </html>
    ''', 'html')
    msg['Subject'] = f'[UPDATE]: {subject}'
    msg['From'] = 'Delabie Media Updates <updates@delabiemedia.be>'
    msg['To'] = 'subscribers'

    recipients = googlesheets.get_mailing_list()
    
    with open('data/password.txt', 'r') as file:
        password = file.read()

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp_server:
        smtp_server.login('delabiemedia@gmail.com', password)
        smtp_server.sendmail('updates@delabiemedia.be', recipients, msg.as_string())