const firstNames = ["Ang", "Ben", "Jen", "Mich", "Chlo", "Mia", "Abigail", "Liam"];

const getRandomName = () => `${firstNames[Math.floor(Math.random() * firstNames.length)]}`; 


console.log(getRandomName());



const buttonRandomName = () => {
  

document.getElementById('randomName').innerText = getRandomName() + ' is buying lunch today'
}
document.getElementById('generate')
.addEventListener('click', buttonRandomName);

buttonRandomName();