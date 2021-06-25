let todos = [];
const notesDiv = document.getElementById("notes");
console.log("yeye");
if (JSON.parse(localStorage.getItem("todo"))) {
  todos = JSON.parse(localStorage.getItem("todo"));
  console.log("yeye2");
  todos.map((todo) => {
    console.log(todo);
    notesDiv.appendChild(notesObj(todo.text1, todo["status"]));
  });
}

document.getElementById("add-btn").addEventListener("click", () => {
  const text = document.getElementById("textfield").value;
  document.getElementById("textfield").value = "";
  notesDiv.appendChild(notesObj(text));
  todos.push({ text1: text, status: true });
  localStorage.setItem("todo", JSON.stringify(todos));
  console.log(todos);
});

function notesObj(noteContent, done = true) {
  const div = document.createElement("div");
  div.className = "note-body";
  const div2 = document.createElement("div2");
  if (done) div2.className = "note-text";
  else div2.className = "note-text disabled";
  const deleteBtn = document.createElement("button");
  deleteBtn.addEventListener("click", () => {
    notesDiv.removeChild(div);
  });
  const statusBtn = document.createElement("button");
  statusBtn.addEventListener("click", () => {
    div2.classList.toggle("disabled");
    if (statusBtn.childNodes[0].classList.contains("fa-check")) {
      console.log("work");
      statusBtn.childNodes[0].classList.remove("fa", "fa-check", "fa-xs");
      statusBtn.childNodes[0].classList.add("fa", "fa-close", "fa-xs");
    } else {
      console.log("work");
      statusBtn.childNodes[0].classList.remove("fa", "fa-close", "fa-xs");
      statusBtn.childNodes[0].classList.add("fa", "fa-check", "fa-xs");
    }
  });
  statusBtn.className = "status delete-btn";
  deleteBtn.className = "delete delete-btn ";
  const i = document.createElement("i");
  i.className = "fa fa-trash fa-xs";
  const i2 = document.createElement("i");
  i2.className = "fa fa-check fa-xs";
  statusBtn.appendChild(i2);
  deleteBtn.appendChild(i);
  div2.innerText = noteContent;
  div.appendChild(div2);
  div.appendChild(statusBtn);
  div.appendChild(deleteBtn);

  return div;
}
