var taskOperations={
    taskId:0,
    taskList:[],
    addTask:function(name,desc){
        var taskObject = new Task(this.taskId++,name,desc);
        this.taskList.push(taskObject);
    
    },
    deleteTask:function(){
}
}