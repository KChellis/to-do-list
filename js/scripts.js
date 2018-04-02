function Task(task, date, note){
  this.task=task;
  this.date=date;
  this.note=note;
}

Task.prototype.noteArray = function() {
  return this.note.split(", ");
}

$(function(){
  $("#form").submit(function(event) {
    event.preventDefault();

    var task= $("#new-task").val();
    var date= $("#due-date").val();
    var note= $("#task-note").val();
    var newTask = new Task(task, date, note);
    var notes = newTask.noteArray();
    $(".tasks-list").append("<div class ='task'><h5>" + newTask.task + "</h5><div class='hidden'> <p>Complete this task by " + newTask.date + "</p> <h5>Notes:</h5><p>" + notes + "</p><button type='button' name='button' class='done btn btn-info'>Done</button></div></div>");

    $("#new-task").val("");
    $(".task").last().click(function() {
      $(this).find(".hidden").slideToggle();
    });
    $(".done").last().click(function() {
      $(this).parents(".task").remove();
    });
  });
});
