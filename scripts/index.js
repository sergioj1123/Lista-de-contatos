const newName = document.querySelector(".name");
const newNumber = document.querySelector(".contact");
const form = document.querySelector(".new-contact-form");

function newContact(name, number) {
  const table = document.querySelector(".contact-table");
  const tableTemplate = document.querySelector("#contact-template").content;
  const tableTr = tableTemplate
    .querySelector(".contact-complete")
    .cloneNode(true);
  tableTr.querySelector(".contact-name").textContent = name;
  tableTr.querySelector(".contact-number").textContent = number;
  table.append(tableTr);
}

function saveButton(event) {
  event.preventDefault();
  newContact(newName.value, newNumber.value);
}

form.addEventListener("submit", saveButton);
