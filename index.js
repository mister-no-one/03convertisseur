	var rate = 1.11;
	var currentCurrency = "USD";
	var symbol = '$';


	// var btnUSD = document.querySelector(".currency-usd");
	// btnUSD.addEventListener("click",function(event){
	// 	rate = event.target.getAttribute("data-currency");
	// 	symbol = event.target.getAttribute("data-symbol");
	// 	updateRate();
	// 	console.log();
	// })

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