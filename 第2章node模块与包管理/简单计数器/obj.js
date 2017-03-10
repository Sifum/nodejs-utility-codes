var outputVal = 0;
var increment = 1;

exports.seOutputVal = function(val){
    outputVal = val;
}

exports.setIncrement = function(incrementVal){
    increment = incrementVal;
}

exports.printNextCount = function(){
    outputVal += increment;
    console.log(outputVal);
}

exports.autoSetZero = function(){
    if(outputVal >= 100){
        outputVal = 0;
    }
    console.log(outputVal);
}