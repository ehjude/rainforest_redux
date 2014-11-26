// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

$(document).on("ready page:load", function(){
	$('#search-form').submit(function(event) {
		event.preventDefault();
		var searchValue = $('#search').val();
		$.getScript("/products?search=" + searchValue);
	});
});

$(document).on("ready page:load", function(){
	if ($('.pagination').length) {
		$(window).scroll(function(){
			var url = $('.pagination span.next').children().attr('href');
			if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
				$('.pagination').text("Fetching more products...");
				return $.getScript(url)
			}
		});
	}
});

// $(document).on("ready page:load", function(){
// 	$(window).scroll(function(){
// 		if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
// 			console.log($('.pagination span.next').children().attr('href'));
// 			$.getScript($('.pagination span.next').children().attr('href'));
// 		}
// 	});
// });




// # GET SHORT HAND
// # $(document).on("ready page:load", function(){
// # 	$('#search-form').submit(function(event) {
// # 		$.get("/products?search=" + searchValue)
// # 			.done(function(date){
// # 				console.log(data);
// # 				$("#products").html(data);
// # 			});
// # 	});
// # });


// # AJAX SHORT HAND
// # $(document).on("ready page:load", function(){
// # 	$('#search-form').submit(function(event) {
// # 		event.preventDefault();
// # 		var searchValue = $('#search').val();

// # 		$.ajax({
// # 			url: "/products?search=" + searchValue,
// # 			type: "GET",
// # 			dataType: "json"
// # 		}).done(function(data){
// # 			$("#products").html(data);
// # 		});
// # 	});
// # });


// #		LONG WAY w/JAVASCRIPT
// # 	function display_search_results() {
// # 	if (this.readyState === 4) {
// # 			console.log(this);
// # 			document.getElementbyID("products").innerHTML = this.responseText;
// # 		}
// # 	}

// # 	var form = document.getElementByID("search-form");
// # 	form.addEventListener("submit", function(event){
// # 		event.preventDefault();
// # 		var searchValue = document.getElementbyID("search").value;

// # 		var xhr = new XMLHttpRequest();
// # 		xhr.onload = display_search_results;
// # 		xhr.open("GET", "/products?search=" + searchValue, true);
// # 		xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
// # 		xhr.send();
// # 	});
// # });