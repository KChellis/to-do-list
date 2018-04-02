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
    $("#tasks-list").append("<li class='task'>" + newTask.task + "<button type='button' class='btn btn-secondary' data-toggle='modal' data-target= '#infoModal'>Info</button></li>");

    $("#new-task").val("");
    // $('#infoModal').on('shown.bs.modal', function () {
    // });
    // $(".modalButton").click(function(){
    //   $("#infoModal").modal("show");
    // });

    // $(".task").last().click(function() {
    //   $(this).remove();
    // });


  });
});
