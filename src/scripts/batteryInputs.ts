import { formats, unCodes } from "../data/compliance";

// Function to handle input change for dynamic elements
function handleInputChange(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  const formatId = (event.target as HTMLInputElement).id.replace(
    "BATTERY_TYPE",
    "SIZE_FORMAT"
  );
  const hazmatId = (event.target as HTMLInputElement).id.replace(
    "BATTERY_TYPE",
    "HAZMAT_ID"
  );
  const format = document.getElementById(formatId) as HTMLSelectElement;
  const hazmat = document.getElementById(hazmatId) as HTMLSelectElement;
  format.innerHTML = `<option />`;
  formats[value].forEach((item: string) => {
    format.innerHTML += `<option value='${item}'>${item}</option>`;
  });

  hazmat.innerHTML = `<option />`;
  unCodes[value].forEach((item: string) => {
    hazmat.innerHTML += `<option value='${item}'>${item}</option>`;
  });

}

// Add event listeners to all elements with IDs starting with "BATTERY_TYPE-"
document.addEventListener("DOMContentLoaded", function () {
  const batteryTypeInputs = document.querySelectorAll<HTMLInputElement>(
    '[id^="BATTERY_TYPE-"]'
  );
  batteryTypeInputs.forEach((input) => {
    input.addEventListener("input", handleInputChange);
  });
});


