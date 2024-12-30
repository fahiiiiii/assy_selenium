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