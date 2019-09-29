document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input[type=submit]");
  input.addEventListener("click", displayTask);
});

const displayTask = (event) => { 
  event.preventDefault();

  const taskText = document.getElementById("new-task-description");
  const ul = document.getElementById("tasks"); 

  let li = document.createElement("li");
  li.innerHTML = taskText.value; 
  ul.appendChild(li);  
}
