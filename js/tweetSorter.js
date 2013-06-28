$(document).ready(function() {

  $('#fetcher').on('submit', function(){
    setInterval(
      fetcher(event),
      1000); // poll every 5min
  });

  $('.status').on('click', function(){
    console.log('hey');
  });

  setInterval(
    console.log($('.status').length),
    500);

});

var fetcher = function(theEvent) {
    var screenName = $('#filterer').val();
    var k, v;

    theEvent.preventDefault();

    $.ajax({
        dataType: "json", // required
        url: "http://bstshk-replacement.herokuapp.com/?callback=?&screen_name="+screenName,
        error:function(){
          console.log('FAIL');
        },
        success:function(data){
          $(data).each(function(k,v) {
            $('#tweetbox').append($('<p class="status">' + v.text + '<a href="#" class="favorites">Favorite This</a>' + '</p>'));
            console.log("SUCCESS");
          });
        }
      });
};

var moveToFavorites = function(that){
  var parentStatus = $(that).parent();
  console.log(parentStatus);
  $('#favorite-tweets').append(parentStatus);
};
