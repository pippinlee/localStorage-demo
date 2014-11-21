// see if a city has been previously selected by user
// if not they should be redirected to select one
if (localStorage.city === undefined) {
  window.location='../index.html';
} else {
  console.log('you are good to go, a city is defined');
}

function forecastUrl(city) {
  var baseUrl = 'https://api.forecast.io/forecast/52128f3e8e139f8749c511f8eb745265/';
  var coordinates = {
    toronto: '43.6582713,-79.3777061',
    montreal: '45.5601451,-73.7120832',
    boston: '42.3133735,-71.0571571',
    chicago: '41.8337329,-87.7321555',
    nyc: '40.7056308,-73.9780035',
    sf: '37.7577,-122.4376'
  }
  return baseUrl + coordinates[city] + '?&units=ca';
}

var url = forecastUrl(localStorage.city);

$.ajax({
  url: url,
  dataType: "jsonp",
  success: function (data) {
    console.log(data);
      var timezone = data.timezone;
      var summary = data.currently.summary;
      var temp = data.currently.temperature;
      var feelslike = data.currently.apparentTemperature;
      var hourly = data.hourly.data;
      var arr = data.hourly.data.slice(0,12);

      $('header').text( localStorage.city + ' weather: ' + summary);
      $('#temp').text('Current temp: ' + temp + 'C'  + ' (' + 'Feels like: ' + feelslike + 'C' + ')' );

      arr.forEach(function(e , callback) {
        $('<h5>' + convertTime(e.time) + ' : ' + e.temperature + 'C'  + ' (' + e.apparentTemperature  + 'C' + ')' + ', </h5>').appendTo("h4");
        var allTemps = [];
        allTemps.push(e.temperature);
        allTemps = allTemps.slice(0, 3);
      });

      function allTemps (options) {
          var best = [];
          options.forEach(function(e){
            best.push(e.temperature);
          });
          return best;
      }

      function allHours (options) {
        var hrs = [];
        options.forEach(function(e){
          hrs.push( convertTime(e.time) );
        });
        return hrs;
      }


      // Charting fun begins!

      var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
      var chartData = {
        labels : allHours(arr),
        datasets : [
          {
            label: "York Sunshine List",
            fillColor : "rgba(220,220,220,0.2)",
            strokeColor : "red",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            pointHighlightFill : "#fff",
            pointHighlightStroke : "rgba(220,220,220,1)",
            data : allTemps(arr)
          }
        ]
      };


      window.onload = function(){
          var ctx = document.getElementById("canvas").getContext("2d");
          ctx.canvas.width = 600;
          ctx.canvas.height = 300;
          window.myNewChart = new Chart(ctx).Line(chartData, {
              showTooltip: true,
              tooltipTemplate: "<%= value %>"
          });
      };

      // Charting fun ends!


  }
});

// convert from unix timestamp
function convertTime(time){
    var date = new Date(time*1000);

    // hours part from the timestamp
    // converts from 24hr to AM/PM
    var hours = date.getHours();
    if (hours > 12) {
        hours = hours - 12;
        hours = hours + 'PM';
    } else if(hours === 0){
        hours = 'midnight';
    } else {
        hours = hours + 'AM';
    }

    // minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // seconds part from the timestamp
    var seconds = "0" + date.getSeconds();
    // will display time in converted format
    var converted = hours;

    return converted;
}

// if user wants to change location
// clears localStorage city variable
$('#clear').click(function(){
  localStorage.clear();
  window.location='../index.html';
});