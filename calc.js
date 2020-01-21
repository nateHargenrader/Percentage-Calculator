//get the values for our program and set them to variables we can work with
var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercentOfY');

var calcFunction = function(event){
    //check to make sure both fields have had values entered
    if(!numField1 || !numField2){
        alert("Please Enter Values!");
    } else {
        //turn strings into numbers that we can do math with
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        
        //do the math
        var result = x / y;
        var percent = result * 100;
        
        //display the text in the html header below field
        resultField.innerText = "Answer: " + percent + "%";
        //keep the page from auto refreshing
        event.preventDefault();
    }
}

form.addEventListener('submit', calcFunction);