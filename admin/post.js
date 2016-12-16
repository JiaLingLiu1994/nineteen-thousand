var title = "";
$(".list").on("click",".delete",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("#btn_submit").click(function(){
	title = document.getElementById('title').value;
	if (title !== "") {
		console.log(title);
		$(".list").find(' > li:nth-child(1)').before("<li class='articleItem'></span><span class='modify'><i class='fa fa-pencil-square-o'></i></span> " 
						   + $( "#category option:selected" ).text() + "： " + title +"</li>");
		$("#title").val("");
		modal.style.display = "none";
	}
});



// Get the modal
var modal = document.getElementById('newPostModal');

// Get the button that opens the modal
var btn_new = document.getElementById("btn-new");

var btn_back = document.getElementById("btn-back");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn_new.onclick = function() {
    modal.style.display = "block";
}

btn_back.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
