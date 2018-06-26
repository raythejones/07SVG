var workspace = document.getElementById("pic");

var prevX = -1;
var prevY = -1;

workspace.addEventListener("click", function() {
  var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", event.offsetX);
  circle.setAttribute("cy", event.offsetY);
  circle.setAttribute("r", "10");
  workspace.appendChild(circle);

  if (prevX != -1 && prevY != -1) {
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", prevX);
    line.setAttribute("y1", prevY);
    line.setAttribute("x2", event.offsetX);
    line.setAttribute("y2", event.offsetY);
    line.setAttribute("stroke", "black");
    workspace.appendChild(line);
  }

  prevX = event.offsetX;
  prevY = event.offsetY;
});

var clear = document.getElementById("clear");

clear.addEventListener("click", function() {
  workspace.innerHTML = "";
  prevX = -1;
  prevY = -1;
});
 