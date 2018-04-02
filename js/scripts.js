function Task(task){
  this.task=task;
  this.done=false;
}

$(function(){
  $("#form").submit(function(event) {
    event.preventDefault();
    var task= $("#new-task").val();
    var newTask = new Task(task);
    $("#tasks-list").append("<li><span class='task'>" + newTask.task + "</span></li>");
  });
});
