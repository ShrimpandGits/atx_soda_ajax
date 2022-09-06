$.ajax({
    url: "https://data.austintexas.gov/resource/hye6-gvq2.json",
    type: "GET",
    data: {
      "$limit" : 5,
      "$$app_token" : "YOURAPPTOKENHERE"
    }
}).done(function(data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});
