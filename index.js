	var rate = 1.11;
	console.log(rate);

	function updateRate(){
		var request = new XMLHttpRequest();
		request.open("GET","https://api.exchangeratesapi.io/latest");
		request.send();

		request.addEventListener("load",function(event){
			var dataText = event.target.responseText;
			var data = JSON.parse(dataText);
			rate = data.rates.USD;
		});
	}

	function processConvert(){

	}



	updateRate();
	var element = document.querySelector(".userInput");
	element.classList.remove("disabled");










// var rate = 1.11;

// var request = new XMLHttpRequest();
// request.open("GET","https://api.exchangeratesapi.io/latest");
// request.send();

// request.addEventListener("load",function(event){

// 	var dataText = event.target.responseText;
// 	var data = JSON.parse(dataText);

// 	rate = data.rates.USD;

// 	var element = document.querySelector(".userInput");
// 	element.classList.remove("disabled");
// });


var formElement = document.querySelector(".userInput form");
formElement.addEventListener("submit",function(event){
	event.preventDefault();
	var valueElement = document.querySelector(".userInput input[name=inputValue]");
	var value = valueElement.value;

	if(!value){
		value = 1;
	}

	var result = value * rate;

	var fromValueElement = document.querySelector(".result .fromValue");
	var toValueElement = document.querySelector(".result .toValue");

	fromValueElement.innerHTML = value + '€';
	toValueElement.innerHTML = result + '$';
})
