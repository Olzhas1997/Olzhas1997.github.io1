var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Bill_Rizer.webp')
        myImage.setAttribute('src', 'images/Bill_Rizer_.webp')
    else
        myImage.setAttribute('src', 'images/Bill_Rizer.webp')
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Введите свое имя.');

    if(!myName)
        setUserName();
    else
    {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Билл Райзер и его друг ' + myName;
    }
}

if(!localStorage.getItem('name'))
    setUserName();
else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Билл Райзер и его друг ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}