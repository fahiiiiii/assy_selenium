
# # scrapy_project/models.py

from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, String, Float, Integer, Text

Base = declarative_base()

class Property(Base):
    __tablename__ = 'properties'

    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String)
    rating = Column(Float)
    location = Column(String)
    latitude = Column(Float)
    longitude = Column(Float)
    room_type = Column(String)
    price = Column(Float)
    image_urls = Column(Text)  # Store image URLs as Text (store as comma-separated or JSON)
    images = Column(Text)  # Use this if you want to store the actual image data or paths