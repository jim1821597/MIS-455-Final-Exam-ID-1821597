var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = doucument.querySelector('.name');
var desc = doucument.querySelector('.desc');
var temp = doucument.querySelector('.temp');

button.addEventListener ('click',function(){
    fetch('')
.then(response => response.json())
.then(data => console.log(data))

.catch (err => alert("Wrong city name!"))
})
