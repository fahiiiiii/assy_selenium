const travelersInput = document.querySelector('.travelers-input');
const travelersDropdown = document.querySelector('.travelers-dropdown');
const adultCountElement = document.getElementById('adults-count');
const childCountElement = document.getElementById('children-count');
const incrementButtons = document.querySelectorAll('.increment');
const decrementButtons = document.querySelectorAll('.decrement');
const doneButton = document.querySelector('.done-btn');

let adultCount = 1;
let childCount = 0;

travelersInput.addEventListener('click', toggleTravelerInput);

incrementButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (index === 0) {
      adultCount++;
    } else {
      childCount++;
    }
    updateTravelerCounts();
    updateButtons();
  });
});

decrementButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (index === 0 && adultCount > 1) {
      adultCount--;
    } else if (index === 1 && childCount > 0) {
      childCount--;
    }
    updateTravelerCounts();
    updateButtons();
  });
});

doneButton.addEventListener('click', () => {
  toggleTravelerInput();
  updateTravelerDisplay();
});

function updateTravelerCounts() {
  adultCountElement.textContent = adultCount;
  childCountElement.textContent = childCount;
}

function updateButtons() {
  decrementButtons.forEach((button, index) => {
    if (index === 0 && adultCount === 1) {
      button.style.display = 'none';
    } else if (index === 1 && childCount === 0) {
      button.style.display = 'none';
    } else {
      button.style.display = 'inline-block';
    }
  });
}

function updateTravelerDisplay() {
  const travelersDisplay = document.querySelector('.trv.num');
  travelersDisplay.textContent = `${adultCount + childCount} travelers`;
}

function toggleTravelerInput() {
  document.querySelector('.travelers-dropdown').classList.toggle('hidden');
}