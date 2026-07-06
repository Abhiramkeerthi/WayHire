import re
from urllib.parse import urlparse


EMAIL_PATTERN = r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
PHONE_PATTERN = r"(\+?\d[\d\s\-]{8,}\d)"
URL_PATTERN = r"(https?://[^\s]+|www\.[^\s]+)"


def extract_email(text):

    match = re.search(EMAIL_PATTERN, text)

    return match.group() if match else None


def extract_phone(text):

    match = re.search(PHONE_PATTERN, text)

    return match.group() if match else None


def extract_links(text):

    return re.findall(URL_PATTERN, text)


def identify_platform(url):

    hostname = urlparse(url).netloc.lower()

    if "github.com" in hostname:
        return "github"

    if "linkedin.com" in hostname:
        return "linkedin"

    if "leetcode.com" in hostname:
        return "leetcode"

    if "kaggle.com" in hostname:
        return "kaggle"

    if "behance.net" in hostname:
        return "behance"

    if "medium.com" in hostname:
        return "medium"

    if "dev.to" in hostname:
        return "devto"

    return "portfolio"


def extract_basic_information(text):

    links = extract_links(text)

    profiles = {}

    for link in links:

        platform = identify_platform(link)

        profiles[platform] = link

    return {

        "email": extract_email(text),

        "phone": extract_phone(text),

        "links": links,

        "profiles": profiles

    }