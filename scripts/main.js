/* var myHeading = document.querySelector('h1');
myHeading.textContent = "Hello, World!"; 

function myFunction(num1, num2){
    var result = num1 * num2;
    return result;
} 

document.getElementById("multiply").innerHTML = myFunction(2, 5); 
document.getElementById("multiply").textContent = myFunction(2, 10); 
document.querySelector('h2').textContent = myFunction(3, 100);

document.querySelector('html').onclick = function(){
    alert("Fox says: Ouch! Stop pocking me!");
}  */

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt("Enter your name: ");
    localStorage.setItem('ime', myName);
    myHeading.textContent = "Mozilla is cool, " + myName;
}

if(!localStorage.getItem('ime')){
    setUserName();
} else {
    var storedName = localStorage.getItem('ime');
    myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = function() {
    setUserName();
}

var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySource = myImage.getAttribute('src');
    if(mySource === 'images/fox.jpg'){
        myImage.setAttribute('src', 'images/fox2.jpg');
    } else {
        myImage.setAttribute('src', 'images/fox.jpg');
    }
}