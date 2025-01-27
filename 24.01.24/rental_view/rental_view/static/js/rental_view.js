// Function to perform a search and update the property tiles
function searchProperties() {
	const searchInput = document.getElementById('searchInput');
	const searchTerm = searchInput.value.toLowerCase();
	const propertyTiles = document.getElementById('propertyTiles');

	// Fetch the property data again, this time filtering by the search term
	fetch('/api/properties?search=' + encodeURIComponent(searchTerm))
		.then(response => response.json())
		.then(data => {
			// Clear the existing property tiles
			propertyTiles.innerHTML = '';

			// Generate new property tiles based on the filtered data
			data.forEach(property => {
				const tile = createPropertyTile(property);
				propertyTiles.appendChild(tile);
			});
		})
		.catch(error => console.error(error));
}

// Function to create a property tile element
function createPropertyTile(property) {
	const tile = document.createElement('div');
	tile.classList.add('property-tile');

	tile.innerHTML = `
		<img src="${property.imageUrl}" alt="${property.name}">
		<h3>${property.name}</h3>
		<p>${property.description}</p>
		<p>Price: $${property.price}</p>
		<a href="/availability?id=${property.id}">View Availability</a>
	`;

	return tile;
}