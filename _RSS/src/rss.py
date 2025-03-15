import xml.etree.ElementTree as ET
from datetime import datetime, timezone


def add_item(file_path, title, link, description):
    """
    Add item to the RSS feed.
    Args:
        file_path: Path to the `.xml` file
        title: Title for the item
        link: Link for the item
        description: Description for the item
    """
    
    timestamp = datetime.now(timezone.utc).strftime('%a, %d %b %Y %H:%M:%S GMT')
    tree = ET.parse(file_path)
    root = tree.getroot()
    channel = root.find('channel')

    pubDate = channel.find('pubDate')
    pubDate.text = timestamp
    
    item = ET.Element('item')
    ET.SubElement(item, 'title').text = title
    ET.SubElement(item, 'link').text = link
    ET.SubElement(item, 'description').text = description
    ET.SubElement(item, 'pubDate').text = timestamp
    channel.append(item)

    ET.indent(tree, space='    ', level=0)
    tree.write(file_path, encoding='utf-8', xml_declaration=True)