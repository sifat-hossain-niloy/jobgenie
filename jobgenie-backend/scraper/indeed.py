import requests
from bs4 import BeautifulSoup

def scrape_job_cards_sorted_by_date(base_url, query, location='Remote'):
    # Adding sort=date to the URL to sort job listings by date
    url = f"{base_url}?q={query}&l={location}&sort=date"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    }
    try:
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            print("Successfully connected to the page!")
            print("Status Code:", response.status_code)
            soup = BeautifulSoup(response.text, 'html.parser')
            
            job_cards_div = soup.find('div', id='mosaic-provider-jobcards')
            if job_cards_div:
                job_cards = job_cards_div.find_all('div', class_='tapItem')
                for card in job_cards:
                    # Extracting the job title
                    title = card.find('h2', class_='jobTitle')
                    if title:
                        title_text = title.get_text(strip=True)
                    else:
                        title_text = "No title found"
                    
                    # Extracting the company name
                    company = card.find('span', {'data-testid': 'company-name'})
                    if company:
                        company_text = company.get_text(strip=True)
                    else:
                        company_text = "No company found"
                    
                    # Extracting the location
                    location = card.find('div', {'data-testid': 'text-location'})
                    if location:
                        location_text = location.get_text(strip=True)
                    else:
                        location_text = "No location found"

                    print(f"Job Title: {title_text}")
                    print(f"Company: {company_text}")
                    print(f"Location: {location_text}")
                    print("----------")
            else:
                print("No job cards found on the page.")
        else:
            print("Failed to connect to the page.")
            print("Status Code:", response.status_code)
    except requests.exceptions.RequestException as e:
        print("An error occurred:", e)

# Base URL for the Indeed job search
base_url = "https://www.indeed.com/jobs"

# Prompt user for the job they are searching for
user_query = input("Enter the job title you are searching for: ")

# Function call to scrape job cards sorted by date
scrape_job_cards_sorted_by_date(base_url, user_query)