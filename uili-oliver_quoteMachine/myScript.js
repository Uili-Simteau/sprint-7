
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

			var tweet = document.createElement('a');
			tweet.innerHTML = 'Tweet This Quote';
			var quoteLink = data.quote.replace(/\s/g, "%20");
			var authorLink = data.author.replace(/\s/g, "%20");

			tweet.classList.add('twitter-share-button');
			tweet.href = `https://twitter.com/intent/tweet?text=${quoteLink}%20by%20${authorLink}`;
			tweet.setAttribute('data-size', 'large');

			quoteDiv.appendChild(tweet);
			window.twttr = (function(d, s, id) {
				var js, fjs = d.getElementsByTagName(s)[0],
				t = window.twttr || {};
				if (d.getElementById(id)) return t;
				js = d.createElement(s);
				js.id = id;
				js.src = "https://platform.twitter.com/widgets.js";
				fjs.parentNode.insertBefore(js, fjs);

				t._e = [];
				t.ready = function(f) {
					t._e.push(f);
				};

				return t;
			}(document, "script", "twitter-wjs"));

		}

	}


	)


	};


