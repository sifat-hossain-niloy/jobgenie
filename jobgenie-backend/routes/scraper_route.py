from fastapi import APIRouter, HTTPException
from utils.scraper import scrape_job_cards_sorted_by_date

scraper_router = APIRouter()

@scraper_router.get("/scrape-jobs")
async def scrape_jobs_route(query: str, location: str = 'Remote'):
    try:
        base_url = "https://www.indeed.com/jobs"
        jobs = scrape_job_cards_sorted_by_date(base_url, query, location)
        return {"jobs": jobs}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
