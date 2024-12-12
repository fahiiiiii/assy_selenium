
# scrapy_project/spiders/trip_spider.py
from urllib import response
import scrapy
import random
from scrapy_project.items import PropertyItem


# class TripSpider(scrapy.Spider):
#     name = 'trip'
#     start_urls = ['https://uk.trip.com/hotels/?locale=en-GB&curr=GBP']
#     # start_urls = ['https://www.rentbyowner.com/place-to-stay']
#     def parse(self, response):
#         # Extracting the hotel name
#         hotel_name = response.xpath('/html/body/div[3]/section/article/div/div[2]/div[1]/div[4]/div[1]/div/div[1]/div/div/div[1]/ul/li[1]/div/div/div[1]/div[2]/h4/div/div/text()').get()

#         # Extracting the rating
#         # The rating is extracted from the embedded script tag, we keep the value of 'ratingValue'
#         rating = response.xpath('/html/head/script[24]/text()').get()
#         if rating:
#             rating = rating.split('ratingValue":"')[1].split('"')[0]  # Extract rating value from the script content

#         # Extracting location
#         location = response.xpath('/html/body/div[2]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/span/text()').get()

#         # Extracting image URL
#         image_url = response.xpath('/html/body/div[2]/div[3]/div[1]/div[2]/div/div[1]/div[1]/div/img/@src').get()

#         # Handle case where image URL might be None
#         if image_url:
#             image_url = 'https:' + image_url if image_url.startswith('//') else image_url
#         else:
#             image_url = None  # Assign None if image is missing

#         # Extracting price
#         price = response.xpath('/html/body/div[2]/div[3]/div[1]/div[1]/div[2]/div/div[1]/div/div/span/text()').get()

#         # Extracting room type
#         room_type = response.xpath('/html/body/div[3]/section/article/div/section/ul/li[2]/div/div/div/div/div[2]/div[2]/div[1]/div[1]/span[1]/text()').get()

#         # Storing the data in an item
#         item = PropertyItem()
#         item['title'] = hotel_name
#         item['rating'] = rating
#         item['location'] = location
#         item['image_urls'] = [image_url] if image_url else []  # Only add to list if valid
#         item['price'] = price
#         item['room_type'] = room_type

#         # Yield the item
#         yield item
    # def parse(self, response):
    #     # Extract all <h3> headings on the page
    #     headings = response.css('h3::text').getall()

    #     # Check if we have any headings, then randomly select one
    #     if headings:
    #         random_heading = random.choice(headings)
    #         self.log(f"Randomly selected heading: {random_heading}")

    #         # Now extract the relevant data associated with that heading
    #         # For example, we will extract the property details that might be near the randomly selected heading
    #         properties = response.css('.hotel-item')  # Adjust the selector to match the structure

    #         for prop in properties:
    #             item = PropertyItem()
    #             item['title'] = prop.css('.hotel-title::text').get()
    #             item['rating'] = prop.css('.hotel-rating::text').get()
    #             item['location'] = prop.css('.hotel-location::text').get()
    #             item['latitude'] = prop.css('::attr(data-latitude)').get()
    #             item['longitude'] = prop.css('::attr(data-longitude)').get()
    #             item['room_type'] = prop.css('.room-type::text').get()
    #             item['price'] = prop.css('.price::text').get()
    #             item['image_urls'] = prop.css('img::attr(src)').getall()
    #             yield item
    
     
class TripSpider(scrapy.Spider):
    name = 'trip'
    start_urls = ['https://uk.trip.com/hotels/?locale=en-GB&curr=GBP']

    def parse(self, response):
        # Extracting the hotel name
        # hotel_name = response.xpath('//*[@class="headInit_headInit-title__m3aAX"]/h1/text()').get()
        # hotel_name = response.xpath('//h1/text()').get()
        # self.log(response.text)

        # # self.log(f"Hotel Name: {hotel_name}")


        # # Extracting the rating
        # rating = response.xpath('/html/head/script[24]/text()').get()
        # if rating:
        #     rating = rating.split('ratingValue":"')[1].split('"')[0]

        # # Extracting location
        # location = response.xpath('/html/body/div[2]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/span/text()').get()

        # # Extracting image URL
        # image_url = response.xpath('/html/body/div[2]/div[3]/div[1]/div[2]/div/div[1]/div[1]/div/img/@src').get()
        # if image_url:
        #     image_url = 'https:' + image_url if image_url.startswith('//') else image_url
        # else:
        #     image_url = None

        # # Extracting price
        # price = response.xpath('/html/body/div[2]/div[3]/div[1]/div[1]/div[2]/div/div[1]/div/div/span/text()').get()

        # # Extracting room type
        # room_type = response.xpath('/html/body/div[3]/section/article/div/section/ul/li[2]/div/div/div/div/div[2]/div[2]/div[1]/div[1]/span[1]/text()').get()


        # # Storing the data in an item
        hotel_name = response.xpath('//*[@class="headInit_headInit-title__m3aAX"]/text()').get()
        # Extracting location
        location = response.xpath('//div[@class="location-class"]/text()').get()  # Replace with correct XPath

        # Extracting price
        price = response.xpath('//span[@class="price-class"]/text()').get()  # Replace with correct XPath

        # Extracting rating
        rating = response.xpath('//div[@class="rating-class"]/text()').get()  # Replace with correct XPath

        # Image URL
        image_url = response.xpath('//img[@class="hotel-image"]/@src').get()  # Replace with correct XPath

        # Ensure image_url is valid
        if image_url:
            image_url = 'https:' + image_url if image_url.startswith('//') else image_url

        # Storing the data in an item
        item = PropertyItem()
        item['title'] = hotel_name
        item['location'] = location
        item['price'] = price
        item['rating'] = rating
        item['image_urls'] = [image_url] if image_url else []

        yield item

     