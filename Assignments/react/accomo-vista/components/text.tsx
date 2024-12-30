<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>
<body>
    <style>
    .heart-icon i {
              transition: color 0.5s ease;
          }
          .save-btn .heart-icon i {
              color: black;
          }
          .save-btn.active .heart-icon i {
              color: red;
          }
  .top-container {
      /* border-bottom: 1px solid #e6e6e6; 
  }
  
  .navigation {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1%;
      /* margin-bottom: 10px; */
  }
  
  .back-link {
      color: #0066ff;
      text-decoration: none;
      font-size: 16px;
  }
  
  .back-link:before {
      content: '\2190'; /* Unicode left arrow */
      margin-right: 8px;
  }
  
  .action-buttons {
      display: flex;
      gap: 12px;
  }
  .heart-icon i {
      color: red; 
  }
  
  /* Default button appearance */
  #saveButton2 {
      /* background: none;
      border: none; */
      cursor: pointer;
      /* font-size: 18px; */
      display: flex;
      align-items: center;
  }
  /* share button */
  .share-btn2 {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
  }
  
  /* Overlay styling */
  .overlay {
      display: none; /* Initially hidden */
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      align-items: center;
      justify-content: center;
  }
  .message-icon {
      position: relative;
      display: inline-block;
      color: #00BFA5; /* Green color for the icon */
    }
    
    .message-icon .fas.fa-comment-alt {
      font-size: 24px;
    }
    
    .message-icon .message-count {
      position: absolute;
      top: -8px;
      right: -8px;
      background-color: #E53935; /* Red color for the count */
      color: #fff;
      font-size: 12px;
      font-weight: bold;
      padding: 2px 6px;
      border-radius: 50%;
    }
  /* Modal styling */
  .share-modal {
      background: #fff;
      padding: 20px;
      width: 300px;
      border-radius: 8px;
      position: relative;
      text-align: center;
      overlay: 15px;
      /* position: fixed; */
  }
  
  /* Dismiss button */
  .close-share-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
      font-size: 18px;
      background: none;
  }
  
  /* Share options styling */
  .share-options {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 20px;
  }
  
  .share-option {
      cursor: pointer;
      font-size: 24px;
  }
  .s1,.s2{
      display: flex;
      justify-content: center;
      gap: 5px;
  }
  .message-icon{
      padding-top: 2px;
  }
  /* Copy link styling */
  .copy-link {
      display: inline-block;
      margin-top: 20px;
      padding: 10px 20px;
      background: #ddd;
      cursor: pointer;
      border-radius: 4px;
  }
  /* end share button */
  /* Style changes when the button is active */
  #saveButton2.active .heart-icon i {
      color: red;
  }
  
  .share-btn2, #saveButton2 {
      padding: 8px 16px;
      border-radius: 20px;
      border: 1px solid #e6e6e6;
      background: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
  }
  
  .share-btn2:before {
      content: '\1F4E4'; /* Unicode share icon */
  }
  
  
  #saveButton2 {
      color: #222;
  }
  
  #saveButton2:hover {
      background: #f7f7f7;
  }
  /* save button interaction */
  
  /* end of save button */
  .share-btn2:hover {
      background: none;
  }
    </style>
<div class="top-container">
   
   <div class="navigation">
                  <a href="#" class="back-link">See all properties</a>
                  <div class="action-buttons">
                     
                      <button class="share-btn2" onclick="showShareView()">Share</button>
                      <!-- save button -->
                      <button id="saveButton2">
                          <span class="heart-icon" id="heartIcon"><i class='bx bx-heart'></i></span> Save
                      </button>
                      <div id="content-save"></div>
                  </div>
     </div>
</div>
  
 
  
  
  
  
  <script>
  location part functionality
          document.addEventListener('DOMContentLoaded', function () {
              // DOM Elements
              const locationButton = document.getElementById('locationButton');
              const settingsModal = document.getElementById('settingsModal');
              const confirmationModal = document.getElementById('confirmationModal');
              const closeButton = document.querySelector('.close');
              const saveButton = document.getElementById('saveButton');
              const regionSelect = document.getElementById('regionSelect');
              const currencyDisplay = document.getElementById('currencyDisplay');
              const selectedRegion = document.getElementById('selectedRegion');
              const selectedCurrency = document.getElementById('selectedCurrency');
  
              // Currency mapping
              const currencyMap = {
                  'United States': 'USD',
                  'Portugal': 'EUR',
                  'United Kingdom': 'GBP',
                  'France': 'EUR',
                  'Germany': 'EUR',
                  'Canada': 'CAD',
                  'Australia': 'AUD',
                  'Brazil': 'BRL',
                  'China': 'CNY',
                  'India': 'INR',
                  'Japan': 'JPY',
                  'South Korea': 'KRW',
                  'Italy': 'EUR',
                  'Mexico': 'MXN',
                  'Spain': 'EUR',
                  'Russia': 'RUB',
                  'Netherlands': 'EUR',
                  'Sweden': 'SEK',
                  'Norway': 'NOK',
                  'Switzerland': 'CHF',
                  'Argentina': 'ARS',
                  'South Africa': 'ZAR',
                  'Egypt': 'EGP',
                  'Turkey': 'TRY',
                  'Saudi Arabia': 'SAR',
                  'United Arab Emirates': 'AED',
                  'Israel': 'ILS',
                  'Thailand': 'THB',
                  'Philippines': 'PHP',
                  'Vietnam': 'VND',
                  'Malaysia': 'MYR',
                  'Indonesia': 'IDR',
                  'New Zealand': 'NZD',
                  'Ireland': 'EUR',
                  'Austria': 'EUR',
                  'Belgium': 'EUR',
                  'Denmark': 'DKK',
                  'Finland': 'EUR',
                  'Poland': 'PLN',
                  'Czech Republic': 'CZK',
                  'Hungary': 'HUF',
                  'Greece': 'EUR',
                  'Ukraine': 'UAH',
                  'Colombia': 'COP',
                  'Chile': 'CLP',
                  'Peru': 'PEN',
                  'Venezuela': 'VES',
                  'Pakistan': 'PKR',
                  'Bangladesh': 'BDT',
                  'Romania': 'RON'
              };
  
  
              // Event Listeners
              locationButton.addEventListener('click', () => {
                  settingsModal.style.display = 'block';
                  // Set current values in modal
                  regionSelect.value = selectedRegion.textContent.trim();
                  currencyDisplay.textContent = currencyMap[regionSelect.value];
              });
  
              closeButton.addEventListener('click', () => {
                  settingsModal.style.display = 'none';
              });
  
              // Close modal when clicking outside
              window.addEventListener('click', (event) => {
                  if (event.target === settingsModal) {
                      settingsModal.style.display = 'none';
                  }
                  if (event.target === confirmationModal) {
                      confirmationModal.style.display = 'none';
                  }
              });
  
              // Update currency display when region changes
              regionSelect.addEventListener('change', (e) => {
                  const currency = currencyMap[e.target.value];
                  currencyDisplay.textContent = currency;
              });
  
              // Handle save button click
              saveButton.addEventListener('click', () => {
                  const newRegion = regionSelect.value;
                  const newCurrency = currencyMap[newRegion];
  
                  // Update the location button text
                  selectedRegion.textContent = newRegion;
                  selectedCurrency.textContent = `(${newCurrency})`;
  
                  // Hide settings modal
                  settingsModal.style.display = 'none';
  
                  // Show confirmation modal
                  confirmationModal.style.display = 'block';
  
                  // Hide confirmation modal after 2 seconds
                  setTimeout(() => {
                      confirmationModal.style.display = 'none';
                  }, 2000);
              });
  
              // Initialize currency display
              currencyDisplay.textContent = currencyMap[regionSelect.value];
          });
          // end of location part
  
          // traveller part
          let adultCount = 1;
          let childCount = 0;
  
          function toggleTravelerInput() {
              // Toggle the 'show' class instead of 'hidden'
              document.getElementById('travelersDropdown').classList.toggle('show');
          }
  
          function incrementAdults() {
              adultCount++;
              updateAdultCount();
          }
  
          function decrementAdults() {
              if (adultCount > 1) {
                  adultCount--;
                  updateAdultCount();
              }
          }
  
          function incrementChildren() {
              childCount++;
              updateChildCount();
          }
  
          function decrementChildren() {
              if (childCount > 0) {
                  childCount--;
                  updateChildCount();
              }
          }
  
          function updateAdultCount() {
              document.getElementById('adults-count').textContent = adultCount;
              document.getElementById('adult-decrement').disabled = adultCount <= 1;
          }
  
          function updateChildCount() {
              document.getElementById('children-count').textContent = childCount;
              document.getElementById('child-decrement').disabled = childCount <= 0;
          }
  
          function updateTravelerDisplay() {
              const totalTravelers = adultCount + childCount;
              document.querySelector('.num-display').textContent = `${totalTravelers} traveler${totalTravelers > 1 ? 's' : ''}`;
              document.getElementById('travelersDropdown').classList.remove('show');
          }
  
          function togglePetOptionOpacity() {
              const petOption = document.getElementById('petOption');
              petOption.style.opacity = document.getElementById('travelWithPet').checked ? '1' : '0.6';
          }
          // end of traveller part
  
          /* gallery interaction */
          // Array with 31 manually added image URLs
          const images = [
              "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/674580/pexels-photo-674580.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/4112236/pexels-photo-4112236.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/16293659/pexels-photo-16293659/free-photo-of-cat-lying-down-on-windowsill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/1127119/pexels-photo-1127119.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/20849980/pexels-photo-20849980/free-photo-of-interior-of-an-old-office.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/21328136/pexels-photo-21328136/free-photo-of-table-and-chairs-in-house.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/238385/pexels-photo-238385.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/1022936/pexels-photo-1022936.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/2100238/pexels-photo-2100238.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/792032/pexels-photo-792032.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/453201/pexels-photo-453201.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/1406282/pexels-photo-1406282.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/2079695/pexels-photo-2079695.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/688835/pexels-photo-688835.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/920025/pexels-photo-920025.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/89184/pexels-photo-89184.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/250659/pexels-photo-250659.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/160755/kittens-cats-foster-playing-160755.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/20360855/pexels-photo-20360855/free-photo-of-sunflowers-in-glass-vase-by-windows-in-house.jpeg?auto=compress&cs=tinysrgb&w=600"
          ];
  
          let currentIndex = 0;
  
          function openModal() {
              const modal = document.getElementById('galleryModal');
              modal.classList.add('show');
              updateModalImage();
          }
  
          function closeModal() {
              const modal = document.getElementById('galleryModal');
              modal.classList.remove('show');
          }
  
          function nextImage() {
              if (currentIndex < images.length - 1) {
                  currentIndex++;
                  updateModalImage();
              }
          }
  
          function prevImage() {
              if (currentIndex > 0) {
                  currentIndex--;
                  updateModalImage();
              }
          }
  
          function updateModalImage() {
              const modalImage = document.getElementById('modalImage');
              const imageCounter = document.getElementById('imageCounter');
              const prevButton = document.getElementById('prevButton');
              const nextButton = document.getElementById('nextButton');
  
              modalImage.src = images[currentIndex];
              imageCounter.textContent = `${currentIndex + 1}/${images.length}`;
  
              // Disable prev button if at the start
              prevButton.disabled = currentIndex === 0;
  
              // Disable next button if at the end
              nextButton.disabled = currentIndex === images.length - 1;
          }
          /* end of gallery interaction */
  
  
          // save button
          document.addEventListener("DOMContentLoaded", () => {
              const saveButton2 = document.getElementById("saveButton2");
              const heartIcon = document.getElementById("heartIcon");
  
              // Check saved state in localStorage
              const isSaved = localStorage.getItem("isSaved") === "true";
  
              // Apply saved state on page load
              if (isSaved) {
                  saveButton2.classList.add("active");
                  heartIcon.innerHTML = "<i class='bx bxs-heart'></i>"; // Filled heart icon
              }
  
              // Toggle save state on button click
              saveButton2.addEventListener("click", () => {
                  saveButton2.classList.toggle("active");
  
                  if (saveButton2.classList.contains("active")) {
                      heartIcon.innerHTML = "<i class='bx bxs-heart'></i>"; // Change to filled heart icon
                      localStorage.setItem("isSaved", "true");
                  } else {
                      heartIcon.innerHTML = "<i class='bx bx-heart'></i>"; // Change to outlined heart icon
                      localStorage.setItem("isSaved", "false");
                  }
              });
          });
  
          // Function to load content from another HTML file
          function loadContent() {
              fetch('save.html')
                  .then(response => response.text())
                  .then(data => {
                      document.getElementById('content-save').innerHTML = data;
                  })
                  .catch(error => console.error('Error loading content:', error));
          }
  
          // end of save button
  
  
          // share button
          function showShareView() {
              // Show the overlay
              document.getElementById("shareOverlay").style.display = "flex";
  
              // Load share.html content into the modal
              fetch('share.html')
                  .then(response => response.text())
                  .then(data => {
                      document.getElementById('shareContent').innerHTML = data;
                  })
                  .catch(error => console.error('Error loading share view:', error));
          }
  
          function dismissShareView() {
              // Hide the overlay
              document.getElementById("shareOverlay").style.display = "none";
          }
  
          function copyLink() {
              const link = "https://example.com/property-link"; // Replace with the actual link
              navigator.clipboard.writeText(link)
                  .then(() => {
                      alert("Link copied to clipboard!");
                  })
                  .catch(err => {
                      console.error("Failed to copy: ", err);
                  });
          }
  </script>
</body>
</html>