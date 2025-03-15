import boto3


def push(file_path):
    """Push RSS feed to s3 bucket.
    Args:
        file_path: Path to the .xml file."""

    s3_client = boto3.client('s3')
    extra_args = {'ContentType':'application/rss+xml'}

    try:
        s3_client.upload_file(file_path, 'delabiemedia.be', 'feed.xml', ExtraArgs=extra_args)
    except Exception as err:
        print(f'Error uploading file: {err}')