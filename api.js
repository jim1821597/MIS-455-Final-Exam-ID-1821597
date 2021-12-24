var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = doucument.querySelector('.name');
var desc = doucument.querySelector('.desc');
var temp = doucument.querySelector('.temp');

button.addEventListener ('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='inputValue.value+'&appid=dfa2010462c6ce0a108a550f199f9756')
.then(response => response.json())
.then(data => console.log(data))

.catch (err => alert("Wrong city name!"))
})
