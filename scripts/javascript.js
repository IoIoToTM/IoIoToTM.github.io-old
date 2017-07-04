
var tryMe = function()
{
	var iframe = document.createElement('iframe');
	var insertAfter = document.getElementById("PhysicsSquare");
	if(document.getElementById("ps")===null)
	{
		iframe.setAttribute("id", "ps");
		iframe.src = 'PhysicsSquare.html';
		iframe.width = '100%';
		iframe.height = 800;
		iframe.scrolling = 'no';
		insertAfter.appendChild(iframe);
	}
}

var OneClick = document.getElementById('button');
OneClick.addEventListener('click', tryMe, false);
/*document.getElementById('button').onclick = function()
{
	
}

function tryMe() {
	// body...

}

/*
document.getElementById('print-button').onclick = function() {

   var iframe = document.createElement('iframe');
   iframe.src = 'http://example.com';
   document.body.appendChild(iframe);

};
*/