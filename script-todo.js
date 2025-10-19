var taskInput = document.getElementById("taskInput");
var addTask = document.getElementById("addTask");
var taskList = document.getElementById("todo-list");
var tasks =[];

addTask.addEventListener("click", function(){
    var task = document.createElement("li");
    task.innerHTML= taskInput.value;

    if(task.innerHTML=="") return;
    
    var deleteTask = document.createElement("button");
    deleteTask.innerHTML = "Delete";
    deleteTask.classList.add("btn", "btn-outline-danger")
    deleteTask.setAttribute("style", "margin: 5px")

    deleteTask.addEventListener("click", function(){
        
        task.remove();
        
    });

    task.appendChild(deleteTask);

    taskList.appendChild(task);
    tasks.push(taskInput.value);
    
    console.log("Tasks array: ", tasks);

    taskInput.value="";

    task.addEventListener("click", function(){
        task.classList.toggle("completed");
    })

});





