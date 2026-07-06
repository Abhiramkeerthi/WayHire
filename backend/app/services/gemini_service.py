import os
import json

from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

API_KEY = os.getenv("GEMINI_API_KEY")

if not API_KEY:
    raise Exception("GEMINI_API_KEY not found in .env")

genai.configure(api_key=API_KEY)

model = genai.GenerativeModel("gemini-2.5-flash")


def load_prompt(prompt_name: str):

    prompt_path = f"app/prompts/{prompt_name}"

    with open(prompt_path, "r", encoding="utf-8") as file:

        return file.read()


def clean_json(response_text: str):

    response_text = response_text.strip()

    if response_text.startswith("```json"):

        response_text = response_text.replace("```json", "")

    if response_text.endswith("```"):

        response_text = response_text.replace("```", "")

    return response_text.strip()


def ask_gemini(prompt_name: str, data: str):

    prompt = load_prompt(prompt_name)

    final_prompt = prompt + "\n\n" + data

    response = model.generate_content(final_prompt)

    cleaned = clean_json(response.text)

    return json.loads(cleaned)