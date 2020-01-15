	var rate = 1.11;
	var currentCurrency = "USD";
	var symbol = '$';
	var rates = {};

	updateRate();

	function selectCurrency(targetElement){
		var previousCurrency = document.querySelector(".selected");
		if(previousCurrency){
			previousCurrency.classList.remove("selected");
		}
		console.log(currentCurrency);

		targetElement.classList.add("selected");
		
	}

	var btnYEN = document.querySelector(".currency-jpy");
	var btnUSD = document.querySelector(".currency-usd");
	var btnPHP = document.querySelector(".currency-php");

	btnYEN.addEventListener("click",function(event){
		changeCurrency(event.target);
		selectCurrency(event.target);
	})

	btnUSD.addEventListener("click",function(event){
		changeCurrency(event.target);
		selectCurrency(event.target);
	})

	btnPHP.addEventListener("click",function(event){
		changeCurrency(event.target);
		selectCurrency(event.target);
	})

	// SELECTED CURRENCY


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

