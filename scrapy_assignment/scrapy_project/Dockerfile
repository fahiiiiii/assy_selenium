

# Dockerfile
FROM python:3.10-slim

# Set the working directory
WORKDIR /usr/src/app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements
COPY requirements.txt ./

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt


# -0-----------------
# Install Playwright browsers
# RUN pip install playwright && \
#     playwright install chromium
    # ------------
# Copy the Scrapy project

COPY . ./

# Set the entrypoint to run Scrapy
# ENTRYPOINT ["scrapy"]