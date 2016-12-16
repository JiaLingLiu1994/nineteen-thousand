var panel2 = document.getElementById('panel2');
var panel3 = document.getElementById('panel3');
var student_name = "";
var student_phone = "";
$('#new').click(function() {
   panel2.style.display = "block";
});

$("#newStudent").click(function(e){
	e.preventDefault()
	student_name = document.getElementById('student_name').value;
	student_phone = document.getElementById('student_phone').value;
	if (student_name !== "") {
		console.log(student_name);
		$(".table > tbody >tr:first-child").before(
			"<tr><td>"+student_name+"</td>"+
			"<td>" + student_phone +"</td>"+
			"<td>" + student_phone +"</td>"+
			"<td>" + student_phone +"</td>"+
			"<td>" + student_phone +"</td>"+
			"<td>" + student_phone +"</td>"+
			"<td>" + student_phone +"</td>"+
			"<td><button id='modify' type='button' class='btn btn-warning'>修改</button></td></tr>");
		 panel2.style.display = "none";
	}
});
