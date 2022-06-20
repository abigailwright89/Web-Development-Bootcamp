const btn = document.getElementById('calculate');
btn.addEventListener('click', function(){


let height= document.getElementById('height').value;
let weight= document.getElementById('weight').value;

if(height == ''|| weight == '') {
alert('Please fill out the input fields');
return;

}




height = height / 100

let BMI = (weight / (height * height));

BMI = Math.round(BMI)

document.querySelector('#result').innerHTML = BMI;


let status = ' ';

if(BMI < 19){
    status = "underweight";
}
if(BMI >= 19 && BMI <25) {
    status = "Normal weight";
}
if(BMI >= 25 && BMI < 30) {
    status = "Overweight";
}
if(BMI >=30) {
    status = "Obese";
}

document.querySelector('.comment').innerHTML = `Comment: You are <span id="comment"> ${status} </span>`;


});