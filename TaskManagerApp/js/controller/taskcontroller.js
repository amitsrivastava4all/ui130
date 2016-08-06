/*
Controller is a Middle Layer
Which take the data from view and
give it to Model
and Vice-versa

It is a Glue B/w Model and View
*/
alert("Inside Script");
window.addEventListener("load",init);
function init(){
    alert("Window Load Call");
document.getElementById("addBt").addEventListener("click",addNewTask);
    }
function addNewTask(){
    var taskName = document.getElementById("taskName").value;
    var taskDesc= document.getElementById("taskDesc").value;
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    taskOperations.addTask(taskName,taskDesc);
    li.innerHTML=taskOperations.taskId+" "+taskName+" "+taskDesc;
    ul.appendChild(li);
    
}