import scrapy
import json
import re
import random

class tripSpider(scrapy.Spider):
    name = "trip"
    start_urls = ["https://uk.trip.com/hotels/?locale=en-GB&curr=GBP"]

    def parse(self, response):
        self.log("Response received!")
        script = self.extract_script(response)

        if script:
            json_data = self.extract_json_data(script)
            if json_data:
                cities = self.get_random_cities(json_data)
                if cities:
                    city_id = self.get_city_id(cities)
                    if city_id:
                        self.log(f"City ID: {city_id}")
                        hotels_url = f"https://uk.trip.com/hotels/list?city={city_id}"
                        yield scrapy.Request(url=hotels_url, callback=self.parse_hotels, meta={'city_id': city_id})

    def extract_script(self, response):
        return response.xpath("//script[contains(text(), 'window.IBU_HOTEL')]/text()").get()

    
    def extract_json_data(self, script):
        match = re.search(r'window\.IBU_HOTEL\s*=\s*(\{.*?\});', script, re.DOTALL)
        if match:
            json_str = match.group(1)
            try:
                return json.loads(json_str)
            except json.JSONDecodeError as e:
                self.log(f"JSON decoding failed: {e}")
        return None

    
    def get_random_cities(self, json_data):
        return random.choice([
            json_data.get('initData', {}).get('htlsData', {}).get('inboundCities', []),
            json_data.get('initData', {}).get('htlsData', {}).get('outboundCities', [])
        ])

    
    def get_city_id(self, cities):
        city = random.choice(cities)
        return city.get('id')

    
    def parse_hotels(self, response):
        city_id = response.meta.get('city_id')
        script = self.extract_script(response)

        if script:
            json_data = self.extract_json_data(script)
            if json_data:
                self.log("Hotel JSON data loaded successfully!")
                hotel_list = json_data.get('initData', {}).get('firstPageList', {}).get('hotelList', [])
                for hotel in hotel_list:
                    yield self.extract_hotel_info(hotel, city_id)

    
    def extract_hotel_info(self, hotel, city_id):
        coordinate = hotel.get("positionInfo", {}).get("coordinate", {})
        return {
            "city_id": city_id,
            "hotel_id": hotel.get("hotelBasicInfo", {}).get("hotelId"),
            "hotel_name": hotel.get("hotelBasicInfo", {}).get("hotelName"),
            "price": hotel.get("hotelBasicInfo", {}).get("price"),
            "hotel_img": hotel.get("hotelBasicInfo", {}).get("hotelImg"),
            "rating": hotel.get("commentInfo", {}).get("commentScore"),
            "room_type": hotel.get("roomInfo", {}).get("physicalRoomName"),
            "location": hotel.get("positionInfo", {}).get("positionName"),
            "latitude": coordinate.get("lat"),
            "longitude": coordinate.get("lng"),
        }













# import scrapy
# import json
# import os
# import requests
# import random
# from urllib.parse import urljoin
# import re

# class TripSpider(scrapy.Spider):
#     name = "trip"
#     allowed_domains = ["uk.trip.com"]
#     start_urls = ["https://uk.trip.com/hotels/"]
    
#     custom_settings = {
#         'ROBOTSTXT_OBEY': False,
#         'DOWNLOAD_DELAY': 2,
#         'COOKIES_ENABLED': True,
#         'USER_AGENT': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
#     }

#     def extract_json_data(self, script_text):
#         """Helper method to extract and parse JSON data from script text"""
#         try:
#             match = re.search(r'window\.IBU_HOTEL\s*=\s*(\{.*?\});', script_text, re.DOTALL)
#             if match:
#                 return json.loads(match.group(1))
#         except json.JSONDecodeError as e:
#             self.logger.error(f"JSON decode error: {e}")
#         except Exception as e:
#             self.logger.error(f"Error extracting data: {e}")
#         return None

#     def parse(self, response):
#         # Find the script containing the IBU_HOTEL data
#         script = response.xpath('//script[contains(text(), "window.IBU_HOTEL")]/text()').get()
        
#         if not script:
#             self.logger.error("Could not find IBU_HOTEL script data")
#             return

#         data = self.extract_json_data(script)
#         if not data:
#             return

#         try:
#             # Extract cities from both inbound and outbound
#             cities = []
#             htls_data = data.get('initData', {}).get('htlsData', {})
            
#             if htls_data.get('inboundCities'):
#                 cities.extend(htls_data['inboundCities'])
#             if htls_data.get('outboundCities'):
#                 cities.extend(htls_data['outboundCities'])

#             # Filter valid cities and select one randomly
#             valid_cities = [city for city in cities if city.get('id')]
            
#             if not valid_cities:
#                 self.logger.warning("No valid cities found")
#                 return

#             selected_city = random.choice(valid_cities)
#             city_name = selected_city.get('name', 'Unknown')
#             city_id = selected_city.get('id')

#             # Construct the URL for the selected city
#             city_url = f"https://uk.trip.com/hotels/list?city={city_id}"
            
#             yield scrapy.Request(
#                 url=city_url,
#                 callback=self.parse_hotels,
#                 meta={'city_name': city_name},
#                 headers={'Referer': response.url}
#             )

#         except Exception as e:
#             self.logger.error(f"Error in parse: {e}")

#     def parse_hotels(self, response):
#         city_name = response.meta['city_name']
        
#         # Setup image directory
#         images_dir = os.path.join('images', city_name.lower().replace(' ', '_'))
#         os.makedirs(images_dir, exist_ok=True)

#         # Extract the script containing hotel data
#         script = response.xpath('//script[contains(text(), "window.IBU_HOTEL")]/text()').get()
        
#         if not script:
#             self.logger.error("Could not find hotel data script")
#             return

#         data = self.extract_json_data(script)
#         if not data:
#             return

#         try:
#             # Extract hotel list from the data
#             hotel_list = data.get('initData', {}).get('firstPageList', {}).get('hotelList', [])

#             for hotel in hotel_list:
#                 try:
#                     basic_info = hotel.get('hotelBasicInfo', {})
#                     position_info = hotel.get('positionInfo', {})
#                     comment_info = hotel.get('commentInfo', {})
#                     room_info = hotel.get('roomInfo', {})

#                     hotel_id = basic_info.get('hotelId', '')
#                     hotel_name = basic_info.get('hotelName', '').replace(' ', '_')
#                     image_url = basic_info.get('hotelImg', '')

#                     # Process and save image if available
#                     local_image_path = None
#                     if image_url:
#                         try:
#                             image_filename = f"{hotel_id}_{hotel_name}.jpg"
#                             image_path = os.path.join(images_dir, image_filename)
                            
#                             # Download and save image
#                             img_response = requests.get(image_url)
#                             if img_response.status_code == 200:
#                                 with open(image_path, 'wb') as f:
#                                     f.write(img_response.content)
#                                 local_image_path = os.path.join(
#                                     'images',
#                                     city_name.lower().replace(' ', '_'),
#                                     image_filename
#                                 ).replace('\\', '/')
#                         except Exception as img_error:
#                             self.logger.error(f"Error saving image for {hotel_name}: {img_error}")

#                     # Create hotel data dictionary
#                     hotel_data = {
#                         'city_name': city_name,
#                         'property_title': basic_info.get('hotelName', ''),
#                         'hotel_id': hotel_id,
#                         'price': basic_info.get('price', ''),
#                         'rating': comment_info.get('commentScore', ''),
#                         'address': position_info.get('positionName', ''),
#                         'latitude': position_info.get('coordinate', {}).get('lat', ''),
#                         'longitude': position_info.get('coordinate', {}).get('lng', ''),
#                         'room_type': room_info.get('physicalRoomName', ''),
#                         'image_url': image_url,
#                         'local_image_path': local_image_path
#                     }

#                     yield hotel_data

#                 except Exception as hotel_error:
#                     self.logger.error(f"Error processing hotel: {hotel_error}")

#         except Exception as e:
#             self.logger.error(f"Error in parse_hotels: {e}")