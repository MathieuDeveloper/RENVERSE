//get the string from page, call functions
//controller function
function getValue() {
    let userString = document.getElementById("userString").value;

    document.getElementById("alert").classList.add("invisible");

    function reverseValue(userString);
    function displayValue(reverseString);
}


//reverse the string
//logic function
function reverseValue(userString) {
    let reverseString = [];
    for (let index = userString.length -1; index >= 0; index--) {
        reverseString += userString[index];
    }
    return reverseString;
}

//display the string to user
//view function
function displayValue(reverseString) {
    document.getElementById("alert").classList.remove("invisible");
    document.getElementById("msg").innerHTML = `Your string reversed is:${reverseString}`;
}