top();


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
	
}




