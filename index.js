	var rate = 1.11;

	function updateRate(){
		console.log("Debut requete")
		var request = new XMLHttpRequest();
		request.open("GET","https://api.exchangeratesapi.io/latest");
		request.send();

		request.addEventListener("load",function(event){
			var dataText = event.target.responseText;
			var data = JSON.parse(dataText);
			rate = data.rates.USD;

			console.log(rate);
		});
	}

	function processConvert(){
		
		// RECUPERATION VALEURS
		var valueElement = document.querySelector(".userInput input[name=inputValue]");
		var value = valueElement.value;

		if(!value){
			value = 1;
		}

		// CALCUL
		var result = value * rate;

		// AFFICHAGE
		var fromValueElement = document.querySelector(".result .fromValue");
		var toValueElement = document.querySelector(".result .toValue");
		fromValueElement.innerHTML = value + '€';
		toValueElement.innerHTML = result + '$';
	}

	// UPDATE RATE
	updateRate();
	var element = document.querySelector(".userInput");
	element.classList.remove("disabled");

	// PROCESS CONVERT
	var formElement = document.querySelector(".userInput form");
	formElement.addEventListener("submit",function(event){
		event.preventDefault();
		processConvert();
	})

	// REFRESH RATE ON CLIC
	var buttonRefresh = document.querySelector(".btn-refresh");
	buttonRefresh.addEventListener("click",updateRate);