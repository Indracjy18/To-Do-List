export function humanDate(date) {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Asia/Jakarta",
  }).format(date);
}

export function createUl(parent) {
  let ul = document.querySelector("ul");

  if (!ul) {
    ul = document.createElement("ul");
    if (parent) {
      parent.appendChild(ul);
    }
  }

  return ul;
}

export function createDone() {
  let buttonDone = document.createElement("button");
  buttonDone.textContent = "Done";
  buttonDone.addEventListener("click", (e) => {
    console.log(e.target.dataset.index);
    e.target.parentElement.style.textDecoration = "line-through";
  });

  return buttonDone;
}

export function createRemove(parent) {
  let buttonDelete = document.createElement("button");
  buttonDelete.textContent = "Remove";
  buttonDelete.addEventListener("click", (e) => {
    parent.parentElement.remove();
  });

  if (parent) {
    parent.appendChild(buttonDelete);
  }

  return buttonDelete;
}

export function createCheckbox(parent) {
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("change", (e) => {
    const statusCoret = parent.parentElement.style.textDecoration;

    if (statusCoret === "line-through") {
      parent.parentElement.style.textDecoration = "none";
    } else {
      parent.parentElement.style.textDecoration = "line-through";
    }
  });

  if (parent) {
    parent.appendChild(checkbox);
  }

  return checkbox;
}

export function removeAll(ul) {
  ul.remove();
}

export function createDiv(parent, classes, content) {
  let div = document.createElement("div");

  if (classes) {
    div.setAttribute("class", classes);
  }

  if (parent) {
    parent.appendChild(div);
  }

  if (content) {
    div.textContent = content;
  }

  return div;
}

export function createList(parent) {
  let li = document.createElement("li");
  li.setAttribute("class", "flex justify-content-between gap-2");
  if (parent) {
    parent.appendChild(li);
  }

  return li;
}

export function differentDate(date) {
  const now = new Date();

  const diff = new Date(now.getTime() - date.getTime());
  const messages = [];

  if (diff.getSeconds()) {
    messages.push(`${diff.getUTCSeconds()} seconds`);
  }

  if (diff.getMinutes()) {
    messages.push(`${diff.getUTCMinutes()} minutes`);
  }

  if (diff.getHours()) {
    messages.push(`${diff.getHours()} hours`);
  }

  return messages.join(" ");
}
