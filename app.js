//selectors
const todoInput = document.querySelector("todo-input");
const todoButton = document.querySelector("todo-button");
const todoList = document.querySelector("todo-list");
//event-listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);


//functions
function addTodo(event){

//prevent form from submitting
event.preventDefault();

//TODO DIV
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");

//Create LI

const newTodo = document.createElement("li");
//newTodo.innerText= todoInput.value;
console.log(todoInput.value);
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);



//CHECK MARK BUTTON
 const completedButton = document.createElement("button");
 completedButton.innerHTML='<i class= "fas fa-check" ></i>';
 completedButton.classList.add("complete-btn");
 todoDiv.appendChild(completedButton);

 //TRASH BUTTON
 const trashButton = document.createElement("button");
 trashButton.innerHTML ='<i class= "fas fa-check" ></i>';
 trashButton.classList.add("trash-btn");
 todoDiv.appendChild(trashButton);

 //APPEND CHILD
 todoList.appendChild(todoDiv);

 //CLEAR THE INPUT FIELD
todoInput.value="";

 }

 function deleteCheck(event){
    const item = event.target;

     //DELETE TODO
     if(item.classList[0] === "trash-btn"){
         const todo = item.parentElemt;
         todo.remove();
     }

     //CHECK MARK
     if(item.classList[0] === "complete-bten"){
         const todo = item.parentElement;
         todo.classList.toggle("completed");
     } }
    