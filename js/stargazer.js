$(document).ready(function() {
  $('#search').submit(function(e) {
    e.preventDefault();
    var searchVal = $('#search-name').val();

    $.ajax({
      method: "get",
      url: 'http://www.strudel.org.uk/lookUP/json/',
      dataType: 'jsonp',
      data: {
        name: searchVal
      }
    })
    .done(function(data, textStatus, jqXHR) {
      if(data.message) {
        $('#preview').html("<h2>YOU ARE WRONG</h2><br><img src=http://0.media.dorkly.cvcdn.com/77/37/c7358e161859b0a65c09fef0e3996c13.gif>")
      }
      else { $('#preview').html("<img src=" + data.image.src + "><img>"); }
    })
  })
});
