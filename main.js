$('#button').on('click', function(e){
  var data = new Promise(function(resolve, reject){
    getUserData(resolve, reject);
  });
  data.then(function(data){
    console.log('just get data');
    $('#info').text(JSON.stringify(data));
  });
  console.log('end');
});

function getUserData(resolve, reject){
  console.log(1);
  setTimeout(function(){
    $.get('https://api.github.com/users/sashimi', function(json){
      resolve(json);
  });
  }, 5000);
  console.log(2);
}


