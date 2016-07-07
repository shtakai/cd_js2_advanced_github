$('#button').on('click', function(e){
  $.get('https://api.github.com/users/sashimi', displayName)
});

function displayName(data){
  console.log(data);
  $('#info').text(JSON.stringify(data));
}


