var topics = ['Iron Man', 'Batman', 'Superman', 'Moon Knight', 'Spider-Man', 'Hulk', 'Thor', 'Green Lantern', 'Captain America', 'Flash', 'Wolverine', 'Magneto', 'Daredevil', 'Ant-Man', 'Doctor Strange', 'Bane', 'The Joker'];

var userTopic = ""

$("#submit_button").on("click", function() {
	(".sr-only").val(topics[i]);
});
for (let i = 0; i < topics.length; i++) {
	var button = $('<button id="button">');
	button.text(topics[i]);
	button.attr('data-hero', topics[i]);
	$('#heroes_div').append(button);
}
$("button").on("click", function() {

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

