// click listener for all buttons
$(".animals").on("click", function() {
  // variable storing the buttons
  var topics = ["shark", "turtle", "eagle"];
  var animal = $(this).attr("data-animal");


  // queryURL using the animal name
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    topics + "&api_key=dc6zaTOxFJmzC&limit=10";
  // ajax request
  $.ajax({
    url: queryURL,
    method: "GET"
  })

    //  After data comes back from the request
    .then(function(response) {
      console.log(queryURL);

      console.log(response);
      // storing the data from the AJAX request in the results variable
      var results = response.data;

      //  Looping through each result item
      for (var i = 0; i < results.length; i++) {

        //  Creating and storing a div tag
        var animalDiv = $("<div>");

        //  Creating a paragraph tag with the result item's rating
        var p = $("<p>").text("Rating: " + results[i].rating);
        document.write(p);
        //  Creating and storing a div tag
        var animalImage = $("<img>");
        // setting the src attribute of the image to a property pulled off the result item
        animalImage.attr("src", results[i].images.fixed_height.url);

        //  Appending the paragraph and image tag to the animalDiv
        animalDiv.append(p);
        animalDiv.append(animalImage);

        // prepending the animalDiv to the HTML page in the "#gifs-appear-here" div
        console.log("animalDiv"+ animalDiv);
        $("#gifs-appear-here").prepend(animalDiv);
      }
    });
});

$(".gif").on("click", function() {
  // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
  var state = $(this).attr("data-state");
  // If the clicked image's state is still, update its src attribute to what its data-animate value is.
  // Then, set the image's data-state to animate
  // Else set src to the data-still value
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});