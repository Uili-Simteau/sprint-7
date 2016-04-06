
	document.getElementById('getQuote').onclick = function() {
		var url = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies";
		$.ajax(
		{
			url: url,
			type: 'POST',
			dataType: 'JSON',
			async: false,	
			headers: {
				"X-Mashape-Key": "YYZBL44AScmshjOI6TkpIvwUK4fpp1uQLUcjsnM16uN9HQH3ti",
				"Content-Type": "application/x-www-form-urlencoded",
				Accept: "application/json"
			},

			success: function(data) {
				var quoteDiv = document.querySelector('#quote');
				quoteDiv.innerHTML = "";
				var quoteContent = document.createElement('p');
				quoteContent.innerHTML = data.quote;
				console.log(quoteContent)
				quoteDiv.appendChild(quoteContent);
				
				var quoteAuthor = document.createElement('p');
				quoteAuthor.innerHTML = data.author;
				console.log(quoteAuthor);
				quoteDiv.appendChild(quoteAuthor);
			}

		}


		)




		/*
		var newQuote = new XMLHttpRequest();
		newQuote.open('POST', url, false);
		newQuote.setRequestHeader("X-Mashape-Key", "YYZBL44AScmshjOI6TkpIvwUK4fpp1uQLUcjsnM16uN9HQH3ti");
		newQuote.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		newQuote.setRequestHeader("Accept", "application/json");
		newQuote.send();
		
		var data = JSON.parse(newQuote.response);
		
		//adding stuff to DOM
		var quoteDiv = document.querySelector('#quote');
		quoteDiv.innerHTML = "";
		var quoteContent = document.createElement('p');
		quoteContent.innerHTML = data.quote;
		console.log(quoteContent)
		quoteDiv.appendChild(quoteContent);
		
		var quoteAuthor = document.createElement('p');
		quoteAuthor.innerHTML = data.author;
		console.log(quoteAuthor);
		quoteDiv.appendChild(quoteAuthor);
		*/

	};


