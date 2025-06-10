// AOS.init({ offset: 0 }); // If you are using AOS, keep this line.

function hamburg() {
  const dropdown = document.querySelector(".dropdown");
  dropdown.classList.add("open"); // Add 'open' class to show dropdown
}

function cancel() {
  const dropdown = document.querySelector(".dropdown");
  dropdown.classList.remove("open"); // Remove 'open' class to hide dropdown
}