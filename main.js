canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouseEvent = " ";
var color = " ";
var radius = " ";
var lineWidth = " ";


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color = document.getElementById("radius").value;;
    radius = document.getElementById("color").value;;
    lineWidth = document.getElementById("width_of_line").value;

    mouseEvent = "my_mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){

    mouseEvent = my_mousedown;
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){

    mouseEvent = my_mouseleave;

}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){

    current_position_of_mouse_x = e.clirntX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clirntY - canvas.offsetTop;

    if (mouseEvent == "mousedown"){
        console.log("Current position of X and Y coordinates = ")
        console.log("X = " + current_position_of_mouse_x + "Y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
