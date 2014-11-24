# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(document).on("ready page:load", function(){
	$('#search-form').submit(function(event) {
		$.getScript("/products?search=" + searchValue)
	});
});


# GET SHORT HAND
# $(document).on("ready page:load", function(){
# 	$('#search-form').submit(function(event) {
# 		$.get("/products?search=" + searchValue)
# 			.done(function(date){
# 				console.log(data);
# 				$("#products").html(data);
# 			});
# 	});
# });


# AJAX SHORT HAND
# $(document).on("ready page:load", function(){
# 	$('#search-form').submit(function(event) {
# 		event.preventDefault();
# 		var searchValue = $('#search').val();

# 		$.ajax({
# 			url: "/products?search=" + searchValue,
# 			type: "GET",
# 			dataType: "html"
# 		}).done(function(data){
# 			$("#products").html(data);
# 		});
# 	});
# });


#		LONG WAY w/JAVASCRIPT
# 	function display_search_results() {
# 	if (this.readyState === 4) {
# 			console.log(this);
# 			document.getElementbyID("products").innerHTML = this.responseText;
# 		}
# 	}

# 	var form = document.getElementByID("search-form");
# 	form.addEventListener("submit", function(event){
# 		event.preventDefault();
# 		var searchValue = document.getElementbyID("search").value;

# 		var xhr = new XMLHttpRequest();
# 		xhr.onload = display_search_results;
# 		xhr.open("GET", "/products?search=" + searchValue, true);
# 		xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
# 		xhr.send();
# 	});
# });