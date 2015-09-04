function deleteCity(element) {
		console.log(element.parentElement.parentElement.rowIndex);
		document.getElementById('weatherTableLocations').deleteRow(element.parentElement.parentElement.rowIndex);
	}

function dataReceived(response) {
		
		var firstRow = '<th>' + 'Location' + '</th>';
				
		response.list.slice(0, 4).forEach(function(day){
			var date = new Date(day.dt * 1000).toLocaleDateString();
			firstRow += '<th>' + date + '</th>'
			});
		
		document.getElementById('weatherTableLocations').rows[0].innerHTML =firstRow;
		//document.getElementById('weatherTableLocations').insertRow(0).innerHTML = firstRow;
		
		
		function addRow (response) {
			var city = $( "#pac-input" ).val();
			var otherRows = '<tr><td><button class = "delete-button" onclick="deleteCity( this)"><img src = "images/delete.png"/></button>' + city + '</td>';
			response.list.slice(0, 4).forEach (function(day){
				otherRows += '<td><img src="images/'+ day.weather[0].icon + '.png" class = "icon"/><h4>' + day.weather[0].main + '</h4><p>' + Math.round(day.temp.max) + '&deg;C/'+ Math.round(day.temp.min) + '&deg;C</p><p>' + Math.round(Math.round(day.temp.max) *180 / 100 + 32) + '&deg;F/'+ Math.round(Math.round(day.temp.min)*180 / 100 + 32) + '&deg;F</p>' + '</td>'
				
				});
			document.getElementById('weatherTableLocations').insertRow(-1).innerHTML = otherRows;
			}
		addRow (response)
		
		
		
		console.log(firstRow);
		console.log(response);
		//$('#weatherTableLocations').html(html);
		//console.log(html);
	}

/*$(function(){
    //getWeatherData('ua', dataReceived, showError);
    getWeatherByCoords(dataReceived);

    function dataReceived(response) {
		var html = '<tr><th>' + 'Location' + '</th>';
		
		response.list.slice(0, 4).forEach(function(day){
			var date = new Date(day.dt * 1000).toLocaleDateString();
			html += '<th>' + date + '</th>'
			});
		html += '</tr>';
		
        console.log(response);
		html += '<tr><td>' + response.city.name + '</td>';
        response.list.slice(0, 4).forEach (function(day){
			html += '<td><img src="images/'+ day.weather[0].icon + '.png" class = "icon"/><h4>' + day.weather[0].main + '</h4><p>' + Math.round(day.temp.max) + '&deg;C/'+ Math.round(day.temp.min) + '&deg;C</p>' + '</td>'
						
			});
	
		$('#weatherTableLocations').html(html);
		console.log(html);
	}
});*/