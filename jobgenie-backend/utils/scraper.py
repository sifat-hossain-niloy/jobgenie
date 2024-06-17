# import requests
# from bs4 import BeautifulSoup

# def scrape_job_cards_sorted_by_date(base_url, query, location='Remote'):
#     url = f"{base_url}?q={query}&l={location}&sort=date"
#     headers = {
#         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
#     }
#     job_list = []
#     try:
#         response = requests.get(url, headers=headers)
#         if response.status_code == 200:
#             soup = BeautifulSoup(response.text, 'html.parser')
#             job_cards_div = soup.find('div', id='mosaic-provider-jobcards')
#             if job_cards_div:
#                 job_cards = job_cards_div.find_all('div', class_='tapItem')
#                 for card in job_cards:
#                     title = card.find('h2', class_='jobTitle').get_text(strip=True) if card.find('h2', class_='jobTitle') else "No title found"
#                     company = card.find('span', {'data-testid': 'company-name'}).get_text(strip=True) if card.find('span', {'data-testid': 'company-name'}) else "No company found"
#                     location = card.find('div', {'data-testid': 'text-location'}).get_text(strip=True) if card.find('div', {'data-testid': 'text-location'}) else "No location found"
#                     job_link_tag = card.find('a', class_='jcs-JobTitle')
#                     job_url = "https://www.indeed.com" + job_link_tag['href'] if job_link_tag else None
#                     job_description = scrape_job_description(job_url)[:200] + "..." if job_url else "No description available"

#                     job_list.append({
#                         'title': title,
#                         'company': company,
#                         'location': location,
#                         'description': job_description
#                     })
#         else:
#             print(f"Failed to connect to the page. Status Code: {response.status_code}")
#     except requests.exceptions.RequestException as e:
#         print(f"An error occurred: {e}")

#     return job_list

# def scrape_job_description(job_url):
#     headers = {
#         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
#     }
#     try:
#         response = requests.get(job_url, headers=headers)
#         if response.status_code == 200:
#             soup = BeautifulSoup(response.text, 'html.parser')
#             description_div = soup.find('div', id='jobDescriptionText')
#             return description_div.get_text(strip=True) if description_div else "No description found"
#         else:
#             print(f"Failed to fetch job description from {job_url}")
#             return None
#     except requests.exceptions.RequestException as e:
#         print(f"An error occurred while fetching job description: {e}")
#         return None
import requests
from bs4 import BeautifulSoup

def scrape_job_description(job_url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    }
    try:
        response = requests.get(job_url, headers=headers)
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')
            description_div = soup.find('div', id='jobDescriptionText')
            return description_div.get_text(strip=True) if description_div else "No description found"
        else:
            print(f"Failed to fetch job description from {job_url}")
            return None
    except requests.exceptions.RequestException as e:
        print(f"An error occurred while fetching job description: {e}")
        return None

def scrape_job_cards_sorted_by_date(base_url, query, location='Remote'):
    url = f"{base_url}?q={query}&l={location}&sort=date"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    }
    job_list = []
    try:
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')
            job_cards_div = soup.find('div', id='mosaic-provider-jobcards')
            if job_cards_div:
                job_cards = job_cards_div.find_all('div', class_='tapItem')
                for card in job_cards:
                    title = card.find('h2', class_='jobTitle').get_text(strip=True) if card.find('h2', class_='jobTitle') else "No title found"
                    company = card.find('span', {'data-testid': 'company-name'}).get_text(strip=True) if card.find('span', {'data-testid': 'company-name'}) else "No company found"
                    location = card.find('div', {'data-testid': 'text-location'}).get_text(strip=True) if card.find('div', {'data-testid': 'text-location'}) else "No location found"
                    job_link_tag = card.find('a', class_='jcs-JobTitle')
                    job_url = "https://www.indeed.com" + job_link_tag['href'] if job_link_tag else None
                    job_description = scrape_job_description(job_url)[:200] + "..." if job_url else "No description available"

                    job_list.append({
                        'title': title,
                        'company': company,
                        'location': location,
                        'description': job_description
                    })
        else:
            print(f"Failed to connect to the page. Status Code: {response.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"An error occurred: {e}")

    return job_list
