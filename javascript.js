var form = document.querySelector('#form');
var input = document.querySelector('#input');
var ul = document.querySelector('#todos');

let todos = JSON.parse(localStorage.getItem('todos'))

if(todos)
{
    todos.forEach(element => addTodo(element));
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    addTodo();
})
function addTodo(todo){
    let todoText = input.value;
    if(todo)
    {
        todoText=todo.text;
    }
   // todoText = todo.text;
    //console.log(todoText);
 if(todoText){
     let li=document.createElement('li');

     if(todo && todo.completed)
     {
         li.classList.add('completed');
     }
     li.innerText = todoText;

     li.addEventListener('click',()=>{
         li.classList.toggle('completed')
     updateLS();
        });
     li.addEventListener('contextmenu',(e)=>{
         e.preventDefault();
         li.remove();
         updateLS();
     })
     ul.appendChild(li);

     input.value=''
     updateLS();
 }
}

function updateLS(){
    let todosEL=document.querySelectorAll('li');

    let todos=[];

    todosEL.forEach(todosEL =>{
        todos.push({
            text: todosEL.innerText,
            completed: todosEL.classList.contains('completed')
        })

    })
    localStorage.setItem('todos',JSON.stringify(todos))
}