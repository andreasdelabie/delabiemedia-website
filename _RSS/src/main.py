import os, sys
import rss, s3, mail


def main(file_path):
    title = input('Title: ')
    link = input('Link: ')
    description = input('Description: ')
    push = input('Auto-push changes? (Y/n): ')

    rss.add_item(file_path, title, link, description)

    if push == 'n':
        pass
    else:
        s3.push(file_path)
        mail.send(title, description, link)
        os.system(f'''git add . && git commit -m "Published '{title}' ({link})" && git push''')


if __name__ == '__main__':
    if len(sys.argv) > 1:
        file_path = sys.argv[1]
        main(file_path)
    else:
        print('Please specify the path to the .xml file!')