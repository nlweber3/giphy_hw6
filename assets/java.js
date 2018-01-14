var topics = ['Iron Man', 'Batman', 'Superman', 'Moon Knight', 'Spider-Man', 'Hulk', 'Thor', 'Green Lantern', 'Captain America', 'Flash', 'Wolverine', 'Magneto', 'Daredevil', 'Ant-Man', 'Doctor Strange', 'Bane', 'The Joker'];



for (let i = 0; i < topics.length; i++) {
	var button = $('<button class="button">');
	button.text(topics[i]);
	button.attr('data-hero', topics[i]);
	$('#heroes_div').append(button);
}
$("#submit_button").on("click", function() {
	topics.push($("#inlineFormInput").val());
			console.log(topics);
			var button = $('<button class="button">');
	button.text($("#inlineFormInput").val());
	button.attr('data-hero', $("#inlineFormInput").val());
	$('#heroes_div').append(button);
	$("#inlineFormInput").val('');

$(".button").on("click", function() {

	var hero = $(this).attr("data-hero");



	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
	hero +  "&api_key=EwWNWNoK3EfrkSejjujKMAUkNGKvIzbG&limit=10";


	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		var results = response;
		console.log(response);

		for (var i = 0; i < results.data.length; i++) {


			$("#gifs").prepend("<img src='" + results.data[i]['images']['fixed_height']['url'] + "' />");
		}

		



	});
});
});


$(".button").on("click", function() {

	var hero = $(this).attr("data-hero");



	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
	hero +  "&api_key=EwWNWNoK3EfrkSejjujKMAUkNGKvIzbG&limit=10";


	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		var results = response;
		console.log(response);

		for (var i = 0; i < results.data.length; i++) {


			$("#gifs").prepend("<img src='" + results.data[i]['images']['fixed_height']['url'] + "' />");
		}

		



	});
});




