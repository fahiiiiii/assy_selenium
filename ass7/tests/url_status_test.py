# tests/url_status_test.py:
import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'helpers'))

import requests
from helpers import init_driver, write_to_excel, log_result
from selenium.webdriver.common.by import By

def test_url_status_from_page():
    page_url = "https://www.alojamiento.io/"
    driver = init_driver()
    driver.get(page_url)
    
    test_results = []
    
    try:
        # Extract all anchor elements
        links = driver.find_elements(By.TAG_NAME, "a")
        urls = [link.get_attribute("href") for link in links if link.get_attribute("href")]

        # Check the status of each URL
        for url in urls:
            try:
                response = requests.head(url, allow_redirects=True)
                status_code = response.status_code
                if status_code == 404:
                    test_results.append(log_result(url, "URL Status Check", "Failed", f"Status code: {status_code} (Not Found)"))
                else:
                    test_results.append(log_result(url, "URL Status Check", "Passed", f"Status code: {status_code}"))
            except Exception as e:
                test_results.append(log_result(url, "URL Status Check", "Failed", f"Error: {str(e)}"))

    except Exception as e:
        test_results.append(log_result(page_url, "URL Extraction", "Failed", f"Error: {str(e)}"))
    finally:
        driver.quit()
    
    # Write results to Excel
    write_to_excel(test_results, "reports/url_status_test_report.xlsx")

if __name__ == "__main__":
    test_url_status_from_page()
