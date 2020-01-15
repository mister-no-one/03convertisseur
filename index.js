	var rate = 1.11;
	var currentCurrency = "USD";
	var symbol = '$';
	var rates = {};

	updateRate();

	var btnYEN = document.querySelector(".currency-jpy");
	var btnUSD = document.querySelector(".currency-usd");
	var btnPHP = document.querySelector(".currency-php");

	btnYEN.addEventListener("click",function(event){
		changeCurrency();
	})

	btnUSD.addEventListener("click",function(event){
		changeCurrency();
	})

	btnPHP.addEventListener("click",function(event){
		changeCurrency();
	})

	// // SELECTED CURRENCY
	// var selectedCurrency = document.querySelector("currency");
	// selectedCurrency.

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

