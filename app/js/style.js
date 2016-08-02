// javascript
/* Event fired on the drag target */
function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
    //document.getElementById("demo").innerHTML = "Started to drag the p element";
}
/* Events fired on the drop target */
function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    var divtest = document.createElement("div");
    $(event.target).after(document.getElementById(data));
    //document.getElementById("demo").innerHTML = "The p element was dropped";
    //console.log(data);
}

$.ajax({
  url: 'js/example.json',
  dataType: 'json',
  type: 'get',
  cache: false,
  success: function(data) {
    for (var key in $(data.location)[0]){
      $("[data-location]").append("<li class='location'><a>"+$(data.location)[0][key].name+"</a></li>");
    };
    for (var key in $(data.hotels)[0]){
     $("[data-hotel]").append("<li class='hotel' ondragstart='dragStart(event)' draggable='true' id="+$(data.hotels)[0][key].name+"><a>"+$(data.hotels)[0][key].name+"</a></li>");
    };
  }
})
