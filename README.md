# localStorage demo

A quick demo to show how localStorage can be added to included to save location with a weather API.

Things you'll need:

* The wonderful [forecast.io](http://forecast.io/) weather API to get local weather data
* [Chart.js](http://www.chartjs.org/) for a dynamically graphing hourly weather data
* jQuery
* Run `bower install` after downloading this repo in your shell to install jQuery and chart.js as dependencies
* If you don't already have bower you can find it [here](http://www.chartjs.org/)

### Forecast.io

For using forecast.io, create an account and then replace the `baseUrl` URL with the one forecast.io gives you.

### Using localStorage

The browers has many wonderful APIs, and localStorage is one of them. For example in here we can save a user's preference for a specific city; then show them the weather data for their chosen city whenever they come back to the page so they don't have to reselect a city.

If a user clicks Toronto as their city, we can have localStorage save it like so:


`localStorage.setItem("city", "toronto");`

You can then access that key-value pairing by accessesing the localStorage object with `localStorage.city`

### localStorage and redirects

We also use the locaStorage API to check if a user has already selected an city, and then re-direct the user if they already have. A simple check too see if `localStorage === undefined` accomplishes this. Redirects occur with `window.location='somepath'`.

We also allow a user to clear the `localStorage.city` value to `undefined`, which allows them to set the default landing page to a different city.


