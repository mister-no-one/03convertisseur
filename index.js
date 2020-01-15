	var rate = 1.11;
	var currentCurrency = "USD";
	var symbol = '$';
	var rates = {};

	updateRate();

	var btnYEN = document.querySelector(".currency-jpy");
	var btnUSD = document.querySelector(".currency-usd");
	var btnPHP = document.querySelector(".currency-php");

	btnYEN.addEventListener("click",function(event){
		currencyJPY = event.target.getAttribute("data-currency");
		symbolJPY = event.target.getAttribute("data-symbol");
		currentCurrency = currencyJPY;
		symbol = symbolJPY;
		rate = rates[currentCurrency];
		processConvert();
	})

	btnUSD.addEventListener("click",function(event){
		currencyUSD = event.target.getAttribute("data-currency");
		symbolUSD = event.target.getAttribute("data-symbol");
		currentCurrency = currencyUSD;
		symbol = symbolUSD;
		rate = rates[currentCurrency];
		processConvert();
	})

	btnPHP.addEventListener("click",function(event){
		currencyPHP = event.target.getAttribute("data-currency");
		symbolPHP = event.target.getAttribute("data-symbol");
		currentCurrency = currencyPHP;
		symbol = symbolPHP;
		rate = rates[currentCurrency];
		processConvert();
	})

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