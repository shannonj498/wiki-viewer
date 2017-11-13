

function getResults() {
    let keyword = document.getElementById("keyword").value;
    $(".submit-form").css("display", "none");
    $(".header").css("display", "none");
    $(".loading").text("Loading . . . ")

    $.ajax({
      type: "GET",
      url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + keyword + "&prop=info&inprop=url&utf8=&format=json",
      dataType: "jsonp",
      success: function(response) {
        $(".loading").css("display", "none");
        $(".search-results-title").css("display", "block");
        for (var i = 0; i < response.query.search.length; i++) {
          let title = response.query.search[i].title;
          let snippet = response.query.search[i].snippet;
          let link = encodeURIComponent(response.query.search[i].title);
          $('.search-results').append("<div class='search-box'><a target='_blank' href=https://en.wikipedia.org/wiki/" + link + "><h3 class='title'>" + title + "</h3><p class='snippet'>" + snippet + "</p></a></div>")
          }
        }
     });

    // Reload page on 'new search' click
    $("#new-search").click(function() {
      window.location.reload();
    });
};

$("#search").click(function() {
getResults();
});

$("#random").click(function() {
  window.open("https://en.wikipedia.org/wiki/Special:Random")
})

$(document).keypress(function(event) {
    var keycode = event.keyCode || event.which;
    if(keycode == '13') {
        getResults();
    }
});
