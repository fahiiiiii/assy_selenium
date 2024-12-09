# import sys
# import os
# import time
# import pandas as pd
# from selenium import webdriver
# from selenium.webdriver.chrome.service import Service
# from selenium.webdriver.common.by import By
# from selenium.webdriver.chrome.options import Options
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC

# # Initialize WebDriver using the Service class
# chrome_driver_path = '/home/w3e37/Downloads/chromedriver-linux64/chromedriver'  # Update this to your correct path
# service = Service(chrome_driver_path)
# driver = webdriver.Chrome(service=service)

# driver.maximize_window()  # Optionally maximize the browser window

# # Test Site URL
# test_url = "https://www.alojamiento.io/"
# driver.get(test_url)

# # Wait for the page to load
# wait = WebDriverWait(driver, 10)
# wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, "div.currency-lang-dropdowns")))

# # Function to select currency and capture prices
# def select_currency_and_get_prices(currency_code):
#     try:
#         # Wait for the currency dropdown to be clickable
#         currency_dropdown = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, 'div.currency-lang-dropdowns')))
#         currency_dropdown.click()

#         # Wait for the dropdown list to be visible and for options to be clickable
#         wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, 'ul.select-ul')))
#         currency_option = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, f'li[data-currency-country="{currency_code}"]')))
#         currency_option.click()

#         # Wait for the page to update with the new currency (price may take a second to reload)
#         time.sleep(3)  # Adding a short wait here to ensure the page updates

#         # Capture the price from the first property tile
#         price_element = driver.find_element(By.CSS_SELECTOR, 'span.listing-price .price-info')
#         price_text = price_element.text
#         return price_text

#     except Exception as e:
#         return f"Error: {str(e)}"

# # Perform the tests for different currencies
# currency_test_cases = ['US', 'CA', 'BE', 'IE', 'AU', 'SG', 'AE', 'BD']
# results = []

# for currency_code in currency_test_cases:
#     price = select_currency_and_get_prices(currency_code)
#     passed = True if price else False
#     result = {
#         "page_url": test_url,
#         "testcase": f"Currency Test: {currency_code}",
#         "passed": passed,
#         "comments": price or "Price Not Found"
#     }
#     results.append(result)

# # Create a Pandas DataFrame to store results
# df = pd.DataFrame(results)

# # Save the results to an Excel file
# df.to_excel('currency_filter_test_report.xlsx', index=False)

# # Close the WebDriver
# driver.quit()
import sys
import os
import time
import pandas as pd
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Initialize WebDriver using the Service class
chrome_driver_path = '/home/w3e37/Downloads/chromedriver-linux64/chromedriver'  # Update this to your correct path
service = Service(chrome_driver_path)
driver = webdriver.Chrome(service=service)

driver.maximize_window()  # Optionally maximize the browser window

# Test Site URL
test_url = "https://www.alojamiento.io/"
driver.get(test_url)

# Wait for the page to load
wait = WebDriverWait(driver, 20)  # Increase wait time to 20 seconds
wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, "div.currency-lang-dropdowns")))

# Function to select currency and capture prices
def select_currency_and_get_prices(currency_code):
    try:
        print(f"Waiting for currency dropdown for currency {currency_code}")

        # Wait for the currency dropdown to be clickable and then click it
        currency_dropdown = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, 'div.currency-lang-dropdowns')))
        currency_dropdown.click()

        # Wait for the dropdown list to be visible and for options to be clickable
        wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, 'ul.select-ul')))
        
        # Verify the currency option exists
        currency_option = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, f'li[data-currency-country="{currency_code}"]')))
        currency_option.click()

        # Wait for the page to update with the new currency (price may take a second to reload)
        time.sleep(3)  # Adding a short wait here to ensure the page updates

        # Capture the price from the first property tile
        price_element = driver.find_element(By.CSS_SELECTOR, 'span.listing-price .price-info')
        price_text = price_element.text
        return price_text

    except Exception as e:
        print(f"Error during selecting currency {currency_code}: {str(e)}")
        return f"Error: {str(e)}"

# Perform the tests for different currencies
currency_test_cases = ['US', 'CA', 'BE', 'IE', 'AU', 'SG', 'AE', 'BD']
results = []

for currency_code in currency_test_cases:
    price = select_currency_and_get_prices(currency_code)
    passed = True if price else False
    result = {
        "page_url": test_url,
        "testcase": f"Currency Test: {currency_code}",
        "passed": passed,
        "comments": price or "Price Not Found"
    }
    results.append(result)

# Create a Pandas DataFrame to store results
df = pd.DataFrame(results)

# Save the results to an Excel file
df.to_excel('currency_filter_test_report.xlsx', index=False)

# Close the WebDriver
driver.quit()
