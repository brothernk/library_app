$(function(){

	$(".change-readbook").on("click", function(event){
		let id = $(this).data("id");
		let newReadBook = $(this).data("newreadbook");
		var newReadBookState = {
			readbook:newReadBook
		};

		//PUT Request
		$.ajax("/api/books/" + id,{
			type:"PUT",
			data:newReadBookState
		})
		.then(function(){
			location.reload();
		});
	});

	function validateForm() {
		var x = document.forms["myForm"]["fname"].value;
		if (x == "") {
			alert("Name must be filled out");
			return false;
		}
	}

	$(".create-form").on("submit", function(event){
		event.preventDefault();

		let newBook = {
			name:$("#enter-book").val().trim(),
			readbook:$("[name=readbook]:checked").val().trim()
		};

		//POST Request
		$.ajax("/api/books",{
			type:"POST",
			data:newBook
		})
		.then(function(){
			location.reload();
		});
	});

	$(".delete-book").on("click", function(event){
		let id = $(this).data("id");

		//DELETE Request
		$.ajax("/api/books/" + id, {
			type:"DELETE",
		})
		.then(function(){
			location.reload();
		});
	});
});