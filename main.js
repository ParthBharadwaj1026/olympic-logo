canvas =document.getElementById("cnv");
context=canvas.getContext("2d");

context.beginPath();
context.strokeStyle="cyan";
context.lineWidth=6;
context.arc(245, 200, 50, 0, 360);
context.stroke();

context.beginPath();
context.strokeStyle="black";
context.lineWidth=6;
context.arc(375, 200, 50, 0, 360);
context.stroke();

context.beginPath();
context.strokeStyle="yellow";
context.lineWidth=6;
context.arc(310, 260, 50, 0, 360);
context.stroke();

context.beginPath();
context.strokeStyle="rgb(247, 65, 41)";
context.lineWidth=6;
context.arc(505, 200, 50, 0, 360);
context.stroke();

context.beginPath();
context.strokeStyle="rgb(0, 255, 115)";
context.lineWidth=6;
context.arc(440, 260, 50, 0, 360);
context.stroke();