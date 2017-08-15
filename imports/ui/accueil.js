top();

function hasSameColor(color, can) {
  return can.color === color;
}

function top() {
	var can = document.getElementById('top');
	h = can.height;
	w = can.width;
	ctx = can.getContext('2d');
	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(w/2,h);
	ctx.lineTo(w,0);
	ctx.fillStyle='red';
	ctx.fill();
	
	can.addEventListener('click', (e) => {
	  const mousePos = {
	    x: e.clientX - can.offsetTop,
	    y: e.clientY - can.offsetLeft
	  };
	  // get pixel under cursor
	  const pixel = ctx.getImageData(mousePos.x, mousePos.y, 1, 1).data;

	  // create rgb color for that pixel
	  const color = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;

	  // find a circle with the same colour
	    if (hasSameColor(color, can)) {
	      alert('click on circle: ' + can.id);
	 }
}




