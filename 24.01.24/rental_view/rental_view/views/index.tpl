<!DOCTYPE html>
<html>
<head>
    <title>Rental Properties</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .search-container {
            padding: 20px 0;
        }

        .search-box {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
        }

        .breadcrumb {
            padding: 10px 0;
            color: #666;
        }

        .breadcrumb a {
            color: #0066cc;
            text-decoration: none;
        }

        .properties-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 24px;
            padding: 20px 0;
        }

        .property-card {
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .property-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
        }

        .property-info {
            padding: 16px;
        }

        .property-title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .property-price {
            color: #0066cc;
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .property-details {
            display: flex;
            gap: 15px;
            margin-bottom: 10px;
            color: #666;
        }

        .amenities {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .amenity {
            background: #f5f5f5;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 14px;
        }

        @media (max-width: 768px) {
            .properties-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="search-container">
            <input type="text" class="search-box" placeholder="Search by location..." id="searchInput">
        </div>

        <div class="breadcrumb">
            <a href="/">Home</a> > <span id="locationBreadcrumb">All Properties</span>
        </div>

        <div id="propertiesGrid" class="properties-grid">
            <!-- Properties will be loaded here -->
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            loadProperties();

            const searchInput = document.getElementById('searchInput');
            let searchTimeout;

            searchInput.addEventListener('input', function(e) {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    const locationBreadcrumb = document.getElementById('locationBreadcrumb');
                    locationBreadcrumb.textContent = e.target.value || 'All Properties';
                    loadProperties(e.target.value);
                }, 300);
            });
        });

        function loadProperties(searchTerm = '') {
            const propertiesGrid = document.getElementById('propertiesGrid');
            propertiesGrid.innerHTML = '<div style="text-align: center; grid-column: 1/-1;">Loading properties...</div>';

            // Make AJAX call to get properties
            fetch('/get-properties', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(properties => {
                propertiesGrid.innerHTML = '';
                
                properties.forEach(property => {
                    const propertyCard = `
                        <div class="property-card">
                            <img src="${property.images[0]}" alt="${property.title}" class="property-image">
                            <div class="property-info">
                                <div class="property-title">${property.title}</div>
                                <div class="property-price">$${property.price} per night</div>
                                <div class="property-details">
                                    <span>${property.bedrooms} beds</span>
                                    <span>${property.bathrooms} baths</span>
                                    <span>${property.sqft} sq ft</span>
                                </div>
                                <div class="amenities">
                                    ${property.amenities.map(amenity => 
                                        `<span class="amenity">${amenity}</span>`
                                    ).join('')}
                                </div>
                            </div>
                        </div>
                    `;
                    propertiesGrid.innerHTML += propertyCard;
                });
            })
            .catch(error => {
                propertiesGrid.innerHTML = '<div style="text-align: center; grid-column: 1/-1;">Error loading properties. Please try again later.</div>';
                console.error('Error:', error);
            });
        }
    </script>
</body>
</html>