import {
  createUl,
  createDone,
  createRemove,
  createList,
  removeAll,
  createCheckbox,
  humanDate,
  createDiv,
  differentDate,
} from "./libs.js";

const input = document.querySelector("input");
const btnSubmit = document.querySelector(".btnSubmit");
const btnremoveAll = document.querySelector(".btnremoveAll");
const priority = document.querySelector("#priority");
const container = document.querySelector(".container");

function main() {
  const lastElement = input.parentElement.lastElementChild; // fase 1: input
  // fase 2: validationElement

  if (!input.checkValidity()) {
    let validationElement = createDiv(
      null,
      "text-normal bg-danger",
      input.validationMessage
    );

    if (lastElement === input) {
      input.parentElement.insertBefore(validationElement, input.nextSibling);
    } else {
      lastElement.replaceWith(validationElement);
    }
    // console.log(input.parentElement.lastElementChild);

    return;
  }

  const row = createDiv(container, "row");
  const dateNow = new Date();
  const ul = createUl(row);
  const li = createList(ul);

  const divCheckbox = createDiv(li);
  const checkbox = createCheckbox(divCheckbox);

  const divContent = createDiv(li);
  const divContentTodo = createDiv(divContent, "text-large", input.value);
  const divContentDate = createDiv(
    divContent,
    null,
    `${humanDate(dateNow)}, ${differentDate(dateNow)}`
  );
  const divContentPriority = createDiv(divContent, null, priority.value);

  const divButton = createDiv(li);
  const buttonRemove = createRemove(divButton);

  input.value = "";

  if (lastElement !== input) {
    lastElement.remove();
  }
}

input.addEventListener("change", (e) => {});

// Add enter
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    main();
  }
});

btnSubmit.addEventListener("click", (e) => {
  main();
});

btnremoveAll.addEventListener("click", (e) => {
  const ul = createUl();
  removeAll(ul);
});
