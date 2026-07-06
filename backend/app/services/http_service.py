import requests


def get_json(url, headers=None):

    try:

        response = requests.get(
            url,
            headers=headers,
            timeout=10
        )

        if response.status_code == 200:

            return response.json()

        return None

    except Exception:

        return None