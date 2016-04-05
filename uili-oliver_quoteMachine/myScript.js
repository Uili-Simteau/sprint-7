
	document.getElementById('getQuote').onclick = function() {
		var newQuote = new XMLHttpRequest();
		var url = "https://andruxnet-random-famous-quotes.p.mashape.com/";
		newQuote.open('POST', url, false);
		newQuote.setRequestHeader("X-Mashape-Key", "YYZBL44AScmshjOI6TkpIvwUK4fpp1uQLUcjsnM16uN9HQH3ti");
		newQuote.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		newQuote.setRequestHeader("Accept", "application/json");
		newQuote.send();
		
		var data = JSON.parse(newQuote.response);
		
	};

