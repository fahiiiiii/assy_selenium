# Scrapy settings for scrapy_project project

BOT_NAME = "scrapy_project"

SPIDER_MODULES = ["scrapy_project.spiders"]
NEWSPIDER_MODULE = "scrapy_project.spiders"

# Configure item pipelines
ITEM_PIPELINES = {
    'scrapy_project.pipelines.DatabasePipeline': 300,  # Database pipeline for storing items
    'scrapy.pipelines.images.ImagesPipeline': 1,      # Image pipeline for downloading images
}

# Database connection settings
DB_HOST = 'db'
DB_PORT = 5432
DB_NAME = 'scrapy_db'
DB_USER = 'postgres'
DB_PASSWORD = 'postgres'

# Images settings
IMAGES_STORE = 'images'  # Directory to store downloaded images

# Splash Configuration (if using Splash for rendering)
SPLASH_URL = 'http://splash:8050'

# Obey robots.txt rules
ROBOTSTXT_OBEY = False

# Use AsyncioSelectorReactor for compatibility with Scrapy and asyncio
# TWISTED_REACTOR = 'twisted.internet.asyncioreactor.AsyncioSelectorReactor'
# TWISTED_REACTOR = 'twisted.internet.selectreactor.SelectReactor'
# TWISTED_REACTOR = 'twisted.internet.reactor'
# Set encoding for feed exports
FEED_EXPORT_ENCODING = "utf-8"

# Set logging level
LOG_LEVEL = 'DEBUG'

# Download handlers for Playwright (if using Playwright for rendering)
DOWNLOAD_HANDLERS = {
    "http": "scrapy_playwright.handler.ScrapyPlaywrightDownloadHandler",
    "https": "scrapy_playwright.handler.ScrapyPlaywrightDownloadHandler",
}
# TWISTED_REACTOR = 'twisted.internet.selectreactor.SelectReactor'
# settings.py
TWISTED_REACTOR = 'twisted.internet.asyncioreactor.AsyncioSelectorReactor'

# TWISTED_REACTOR = "twisted.internet.asyncioreactor.AsyncioReactor"



# # Configure maximum concurrent requests performed by Scrapy (default: 16)
# CONCURRENT_REQUESTS = 1

# # Configure a delay for requests for the same website (default: 0)
# DOWNLOAD_DELAY = 2

# # Disable cookies (enabled by default)
# COOKIES_ENABLED = False
# Enable Splash
# SPLASH_URL = 'http://localhost:8050'
# DOWNLOADER_MIDDLEWARES = {
#     'scrapy_splash.SplashMiddleware': 725,
#     'scrapy.downloadermiddlewares.httpcompression.HttpCompressionMiddleware': 810,
# }
# SPIDER_MIDDLEWARES = {
#     'scrapy_splash.SplashDeduplicateMiddleware': 100,
# }
# DUPEFILTER_CLASS = 'scrapy_splash.SplashAwareDupeFilter'


