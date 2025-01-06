import scrapy

class PropertyItem(scrapy.Item):
    title = scrapy.Field()
    rating = scrapy.Field()
    location = scrapy.Field()
    latitude = scrapy.Field()
    longitude = scrapy.Field()
    room_type = scrapy.Field()
    price = scrapy.Field()
    images = scrapy.Field()      # Field to store actual image data or paths
    image_urls = scrapy.Field()  # Field to store URLs of images


# # Define here the models for your scraped items
# #
# # See documentation in:
# # https://docs.scrapy.org/en/latest/topics/items.html

# # scrapy_project/items.py
# import scrapy


# class ScrapingcourseScraperItem(scrapy.Item):
#     # define the fields for your item here like:
#     # name = scrapy.Field()
#     pass