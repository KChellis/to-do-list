function Task(task, date){
  this.task=task;
  this.date=date;
}

$(function(){
  $("#form").submit(function(event) {
    event.preventDefault();

    var task= $("#new-task").val();
    var date= $("#due-date").val();
    var newTask = new Task(task, date);
    $("#tasks-list").append("<li class='task'>" + newTask.task + "</li>");

    $("#new-task").val("");

    $(".task").last().click(function() {
      $(this).remove();
    });


  });
});
