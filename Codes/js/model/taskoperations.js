var taskOperations={
    taskId:0,
    taskList:[],
    addTask:function(name,desc){
        var taskObject = new Task(++this.taskId,name,desc);
        this.taskList.push(taskObject);
    
    },
    deleteTask:function(){
        this.taskList =  this.taskList.filter(function(taskObject){
            return !taskObject.completed;
        });
    },
    completedCount:function(){
       var array =  this.taskList.filter(function(taskObject){
            return taskObject.completed;
        });
        return array.length;
    },
    searchByName:function(name){
        var array = this.taskList.filter(function(taskObject){
            return taskObject.name.startsWith(name);
        });
        return array;
    },
    pendingCount:function(){
       var array =  this.taskList.filter(function(taskObject){
            return !taskObject.completed;
        });
        return array.length;
    },
    sortByName:function(){
        this.taskList.sort(function(firstObject,secondObject){
           return firstObject.name.localeCompare(secondObject.name); 
        });
    },
    toggleTask:function(id){
        this.taskList.forEach(function(taskObject){
            if(taskObject.id==id){
            taskObject.completed = !taskObject.completed;
            }
        });
    }
}