import re


def extract_links(text):

    pattern = r"(https?://[^\s]+|www\.[^\s]+)"

    links = re.findall(pattern, text)

    return links