console.log('the city saved in localstrage is: ' + localStorage.city);

if (localStorage.city === undefined) {
  console.log('no city defined');
} else {
  //window.location='index.html';
  console.log('has a city defined');
  window.location='local/local.html';
}

$(function() {
    $('.toronto').click(function(){
      localStorage.setItem("city", "toronto");
      var value = localStorage.getItem("city");
      window.location='local/local.html';
    });
    $('.montreal').click(function(){
      localStorage.setItem("city", "montreal");
      var value = localStorage.getItem("city");
      window.location='local/local.html';
    });
    $('.boston').click(function(){
      localStorage.setItem("city", "boston");
      var value = localStorage.getItem("city");
      window.location='local/local.html';
    });
    $('.chicago').click(function(){
      localStorage.setItem("city", "chicago");
      var value = localStorage.getItem("city");
      window.location='local/local.html';
    });
    $('.nyc').click(function(){
      localStorage.setItem("city", "nyc");
      var value = localStorage.getItem("city");
      window.location='local/local.html';
    });
    $('.sf').click(function(){
      localStorage.setItem("city", "sf");
      var value = localStorage.getItem("city");
      window.location='local/local.html';
    });
});