/*
Controller is a Middle Layer
Which take the data from view and
give it to Model
and Vice-versa

It is a Glue B/w Model and View
*/
//alert("Inside Script");
window.addEventListener("load",init);
function init(){
    //alert("Window Load Call");
document.getElementById("addBt").addEventListener("click",addNewTask);
document.getElementById("deleteBt").addEventListener("click",deleteTask); 
document.getElementById("searchBt").addEventListener("click",displaySearchBox);
document.getElementById("sortBt").addEventListener("click",sort);    
    }
function sort(){
    taskOperations.sortByName();
    printTask(taskOperations.taskList);
}
function displaySearchBox(){
    document.getElementById("searchBox").style.display='block';
    document.getElementById("searchTask").addEventListener("keyup",searchTask);
}
function searchTask(){
    var name = document.getElementById("searchTask").value;
    var taskArray = taskOperations.searchByName(name);
    printTask(taskArray);
}
function deleteTask(){
taskOperations.deleteTask();
printTask(taskOperations.taskList);    
}
function printTask(taskList){
var ul = document.getElementById("taskList");
    document.getElementById("taskList").innerHTML="";
taskList.forEach(function(taskObject){
    var li = document.createElement("li");
    li.className="pending";
    
    li.innerHTML=taskObject.id+" "+taskObject.name+" "+taskObject.desc;
    ul.appendChild(li);
    li.addEventListener("click",toggleTask);
    
});
updateCount();    
}

function addNewTask(){
    var taskName = document.getElementById("taskName").value;
    var taskDesc= document.getElementById("taskDesc").value;
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.className="pending";
    taskOperations.addTask(taskName,taskDesc);
    li.innerHTML=taskOperations.taskId+" "+taskName+" "+taskDesc;
    ul.appendChild(li);
    li.addEventListener("click",toggleTask);
    updateCount();
    
}
function toggleTask(){
    var currentli = this.innerHTML;
    var liValueArray = currentli.split(" ");
    var id = liValueArray[0];
    taskOperations.toggleTask(id);
    if(this.className=="completed"){
        this.className="pending";
    }
    else{
        this.className="completed";
    }
    updateCount();
    
}
function updateCount(){
    document.getElementById("pending").innerHTML=taskOperations.pendingCount();
    document.getElementById("completed").innerHTML=taskOperations.completedCount();
}