# # scrapy_project/pipelines.py
# scrapy_project/pipelines.py
import os
import sqlalchemy
from sqlalchemy.orm import sessionmaker
from scrapy_project.models import Base, Property
import logging

class DatabasePipeline:
    def open_spider(self, spider):
        database_url = f"postgresql://{os.getenv('DB_USER')}:{os.getenv('DB_PASSWORD')}@{os.getenv('DB_HOST')}:{os.getenv('DB_PORT')}/{os.getenv('DB_NAME')}"
        self.engine = sqlalchemy.create_engine(database_url)
        Base.metadata.create_all(self.engine)
        self.Session = sessionmaker(bind=self.engine)
        self.session = self.Session()  # Create a session for the spider run

    def close_spider(self, spider):
        self.session.commit()  # Commit any remaining items
        self.session.close()   # Close the session
        self.engine.dispose()   # Dispose of the engine

    def process_item(self, item, spider):
        # Ensure proper handling of image_urls (storing them as a string, or handling empty cases)
        if item.get('image_urls') is None or len(item['image_urls']) == 0:
            item['image_urls'] = None  # Handle case where no image URL is available

        property = Property(**item)

        try:
            self.session.add(property)
        except Exception as e:
            logging.error(f"Error adding property to session: {e}")
            # Optionally, you can raise the exception or handle it as needed

        return item






















# import os
# import sqlalchemy
# from sqlalchemy.orm import sessionmaker
# from scrapy_project.models import Base, Property

# class DatabasePipeline:
#     def open_spider(self, spider):
#         database_url = f"postgresql://{os.getenv('DB_USER')}:{os.getenv('DB_PASSWORD')}@{os.getenv('DB_HOST')}:{os.getenv('DB_PORT')}/{os.getenv('DB_NAME')}"
#         self.engine = sqlalchemy.create_engine(database_url)
#         Base.metadata.create_all(self.engine)
#         self.Session = sessionmaker(bind=self.engine)

#     def close_spider(self, spider):
#         self.engine.dispose()

#     def process_item(self, item, spider):
#         session = self.Session()

#         # Ensure proper handling of image_urls (storing them as a string, or handling empty cases)
#         if item['image_urls'] is None or len(item['image_urls']) == 0:
#             item['image_urls'] = None  # Handle case where no image URL is available

#         property = Property(**item)
#         session.add(property)
#         session.commit()
#         session.close()

#         return item




# # # Define your item pipelines here
# # #
# # # Don't forget to add your pipeline to the ITEM_PIPELINES setting
# # # See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html

# # # # scrapy_project/pipelines.py
# # # useful for handling different item types with a single interface
# # from itemadapter import ItemAdapter


# # class ScrapingcourseScraperPipeline:
# #     def process_item(self, item, spider):
# #         return item








