	function updateRate(){
		processConvert();
		console.log("Start to update the rate")
		var request = new XMLHttpRequest();
		request.open("GET","https://api.exchangeratesapi.io/latest");
		
		request.addEventListener("load",function(event){
			var dataText = event.target.responseText;
			var data = JSON.parse(dataText);
			rate = data.rates[currentCurrency];
			console.log(rate);
			rates = data.rates;


			console.log("Rate updated");
		});
		request.send();
	}

	function processConvert(){
		console.log("Convertion processing");
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
		toValueElement.innerHTML = result + symbol;

		console.log(symbol);
	}

	function changeCurrency(targetElement){
		currencyAll = targetElement.getAttribute("data-currency");
		symbolAll = targetElement.getAttribute("data-symbol");
		currentCurrency = currencyAll;
		symbol = symbolAll;
		rate = rates[currentCurrency];
		processConvert();
	}

	function selectCurrency(targetElement){
		var previousCurrency = document.querySelector(".selected");
		if(previousCurrency){
			previousCurrency.classList.remove("selected");
		}
		console.log(currentCurrency);

		targetElement.classList.add("selected");
		
	}