



var buttons = document.getElementsByClassName('button');
var screen = document.getElementById('screenSpan');
// var buttonSection = document.getElementById('button-section');
var body = document.getElementsByTagName('body');


var operand1 = 0;
var operand2 = null;
var operator = null;
var reset = true;
var result = 0;
var message = "";
var dummy = 0;
var value = null;



for (var i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {

        value = this.getAttribute('data-value');

        if (value == "+" && message == "") {
            operand2 = parseFloat(dummy);


            if (!operand2 && operator != "/") {
                operator = "+";
                operand1 = parseFloat(screen.innerText);
                screen.innerText = screen.innerText + operator;
                reset = false;
            } else if (operand2 == 0 && operator == "/" || message != "" && operand2 != 0) {
                // message ="Cannot Divide By Zero";
                // screen.innerText= message;
                alert("Cannot Divide by Zero");
                console.log("works?");

            } else {
                result = eval(operand1 + "" + operator + "" + operand2);
                operand1 = result;
                dummy = 0;
                operator = "+";
                screen.innerText = screen.innerText + operator;
            }
            console.log("operand2 and operand1", operand2, operand1);

        } else if (value == "-" && message == "") {
            operand2 = parseFloat(dummy);


            if (!operand2 && operator != "/") {
                operator = "-";
                operand1 = parseFloat(screen.innerText);
                screen.innerText = screen.innerText + operator;
                reset = false;
            } else if (operand2 == 0 && operator == "/" || message != "" && operand2 != 0) {
                // message ="Cannot Divide By Zero";
                // screen.innerText= message;
                alert("Cannot Divide by Zero");
                console.log("works?");

            } else {
                result = eval(operand1 + "" + operator + "" + operand2);
                operand1 = result;
                dummy = 0;
                operator = "-";
                screen.innerText = screen.innerText + operator;
            }
            console.log("operand2 and operand1", operand2, operand1);

        } else if (value == "*" && message == "") {
            operand2 = parseFloat(dummy);


            if (!operand2 && operator != "/") {
                operator = "*";
                operand1 = parseFloat(screen.innerText);
                screen.innerText = screen.innerText + operator;
                reset = false;
            } else if (operand2 == 0 && operator == "/" || message != "" && operand2 != 0) {
                // message ="Cannot Divide By Zero";
                // screen.innerText= message;
                alert("Cannot Divide by Zero");
                console.log("works?");

            } else {
                result = eval(operand1 + "" + operator + "" + operand2);
                operand1 = result;
                dummy = 0;
                operator = "*";
                screen.innerText = screen.innerText + operator;
            }
            console.log("operand2 and operand1", operand2, operand1);

        } else if (value == "/" && message == "") {
            operand2 = parseFloat(dummy);


            if (!operand2 && operator != "/") {
                operator = "/";
                operand1 = parseFloat(screen.innerText);
                screen.innerText = screen.innerText + operator;
                reset = false;
            } else if (operand2 == 0 && operator == "/" || message != "" && operand2 != 0) {
                // message ="Cannot Divide By Zero";
                // screen.innerText= message;
                alert("Cannot Divide by Zero");
                console.log("works?");

            } else {
                result = eval(operand1 + "" + operator + "" + operand2);
                operand1 = result;
                dummy = 0;
                operator = "/";
                screen.innerText = screen.innerText + operator;
            }
            console.log("operand2 and operand1", operand2, operand1);

        } else if (value == "%" && message == "") {
            operand2 = parseFloat(dummy);


            if (!operand2 && operator != "/") {
                operator = "%";
                operand1 = parseFloat(screen.innerText);
                screen.innerText = screen.innerText + operator;
                reset = false;
            } else if (operand2 == 0 && operator == "/" || message != "" && operand2 != 0) {
                // message ="Cannot Divide By Zero";
                // screen.innerText= message;
                alert("Cannot Divide by Zero");
                console.log("works?");

            } else {
                result = eval(operand1 + "" + operator + "" + operand2);
                operand1 = result;
                dummy = 0;
                operator = "%";
                screen.innerText = screen.innerText + operator;
            }
            console.log("operand2 and operand1", operand2, operand1);

        } else if (value == "=") {
            operand2 = parseFloat(dummy);
            console.log(operand1 + " " + operator + " " + operand2);
            // operand2 = parseFloat(screen.innerText);
            if (operand2 == 0 && operator == "/" || message != "" && operand2 != 0) {
                message = "Cannot Divide By Zero";
                screen.innerText = message;

            } else if (operand2 == 0 && operand1 != 0 && operator != "%") {
                screen.innerText = eval(operand1 + "" + operator + "" + operand2);
            } else if (operand1 == 0 && operand2 == 0 && operator == null) {

                screen.innerText = screen.innerText;

            } else if (operand1 == 0 && operand2 == 0) {
                screen.innerText = 0;
                console.log("yes!");
            } else {

                if (operator == "%" && operand2 == 0) {

                    operand2 = 100;
                    result = eval(operand1 / 100);
                    screen.innerText = result;
                    reset = true;
                    dummy = 0;
                    console.log(" hnm function")

                } else if (operator == "%" && operand2 != 0) {

                    // operand2 = 100;
                    result = (operand1 / 100) * operand2;
                    // result = eval(result +""+"*"+""+operand2);
                    screen.innerText = result;
                    reset = true;
                    dummy = 0;
                    console.log("% function")

                } else {
                    result = eval(operand1 + "" + operator + "" + operand2);
                    screen.innerText = result;
                    reset = true;
                    dummy = 0;
                }
            }

        } else if (value == "C") {
            screen.innerText = "0";
            message = "";
            operand1 = 0;
            operand2 = 0;
            dummy = 0;
            operator = null;
            reset = true;
        } else {
            if (screen.innerText == 0) {
                screen.innerText = "";

            }

            if (message == "") {
                screen.innerText += value;
            }

            if (reset == false) {

                dummy += value;
                console.log(dummy);
            }
        }



    })
}


// for(var i =0; i < buttons.length;i++){

body[0].addEventListener("keydown", function (e) {

    var key = e.key;
    console.log(key);

    if (key.match(/[^a-z]/g) && key.match(/[^A-Z]/g) && !key.match(/\s/g) && key.match(/[0-9]/g)
        || key.match(/\d/g) || key == "Backspace" || key == "Escape" || key == "Enter" || key == "+"
        || key == "-" || key == "*" || key == "/" || key == "." || key == "=" || key == "%") {

        if (key == "+" && message == "") {
            operand2 = parseFloat(dummy);
            console.log(operator, operand1, operand2)

            if (!operand2 && operator != "/") {
                operator = "+";
                operand1 = parseFloat(screen.innerText);
                screen.innerText = screen.innerText + operator;
                reset = false;
                console.log("if");
            } else if (operand2 == 0 && operator == "/" || message != "" && operand2 != 0) {
                // message ="Cannot Divide By Zero";
                // screen.innerText= message;
                alert("Cannot Divide by Zero");
                console.log("works?");

            } else {
                result = eval(operand1 + "" + operator + "" + operand2);
                operand1 = result;
                dummy = 0;
                operator = "+";
                screen.innerText = screen.innerText + operator;
                console.log("else");
            }
            console.log("operand2 and operand1", operand2, operand1);



        } else if (key == "-" && message == "") {
            operand2 = parseFloat(dummy);
            if (!operand2 && operator != "/") {
                operator = "-";
                operand1 = parseFloat(screen.innerText);
                screen.innerText = screen.innerText + operator;
                reset = false;
            } else if (operand2 == 0 && operator == "/" || message != "" && operand2 != 0) {
                // message ="Cannot Divide By Zero";
                // screen.innerText= message;
                alert("Cannot Divide by Zero");
                console.log("works?");

            } else {
                result = eval(operand1 + "" + operator + "" + operand2);
                operand1 = result;
                dummy = 0;
                operator = "-";
                screen.innerText = screen.innerText + operator;
            }
            console.log("operand2 and operand1", operand2, operand1);
        } else if (key == "*" && message == "") {
            operand2 = parseFloat(dummy);


            if (!operand2 && operator != "/") {
                operator = "*";
                operand1 = parseFloat(screen.innerText);
                screen.innerText = screen.innerText + operator;
                reset = false;
            } else if (operand2 == 0 && operator == "/" || message != "" && operand2 != 0) {
                // message ="Cannot Divide By Zero";
                // screen.innerText= message;
                alert("Cannot Divide by Zero");
                console.log("works?");

            } else {
                result = eval(operand1 + "" + operator + "" + operand2);
                operand1 = result;
                dummy = 0;
                operator = "*";
                screen.innerText = screen.innerText + operator;
            }
            console.log("operand2 and operand1", operand2, operand1);
        } else if (key == "/" && message == "") {
            operand2 = parseFloat(dummy);

            if (!operand2 && operator != "/") {
                operator = "/";
                operand1 = parseFloat(screen.innerText);
                screen.innerText = screen.innerText + operator;
                reset = false;
            } else if (operand2 == 0 && operator == "/" || message != "" && operand2 != 0) {
                // message ="Cannot Divide By Zero";
                // screen.innerText= message;
                alert("Cannot Divide by Zero");
                console.log("works?");

            } else {
                result = eval(operand1 + "" + operator + "" + operand2);
                operand1 = result;
                dummy = 0;
                operator = "/";
                screen.innerText = screen.innerText + operator;
            }
            console.log("operand2 and operand1", operand2, operand1);
        } else if (key == "%" && message == "") {
            operand2 = parseFloat(dummy);

            if (!operand2 && operator != "/") {
                operator = "%";
                operand1 = parseFloat(screen.innerText);
                screen.innerText = screen.innerText + operator;
                reset = false;
            } else if (operand2 == 0 && operator == "/" || message != "" && operand2 != 0) {
                // message ="Cannot Divide By Zero";
                // screen.innerText= message;
                alert("Cannot Divide by Zero");
                console.log("works?");

            } else {
                result = eval(operand1 + "" + operator + "" + operand2);
                operand1 = result;
                dummy = 0;
                operator = "%";
                screen.innerText = screen.innerText + operator;
            }
            console.log("operand2 and operand1", operand2, operand1);

        } else if (key == "=" || key == "Enter") {
            operand2 = parseFloat(dummy);
            console.log(operand1 + " " + operator + " " + operand2);
            // operand2 = parseFloat(screen.innerText);
            if (operand2 == 0 && operator == "/" || message != "" && operand2 != 0) {
                message = "Cannot Divide By Zero";
                screen.innerText = message;

            } else if (operand2 == 0 && operand1 != 0 && operator != "%") {
                screen.innerText = eval(operand1 + "" + operator + "" + operand2);;
            } else if (operand1 == 0 && operand2 == 0 && operator == null) {

                screen.innerText = screen.innerText;

            } else if (operand1 == 0 && operand2 == 0) {
                screen.innerText = 0;
            } else {

                if (operator == "%" && operand2 == 0) {

                    // operand2 = 100;
                    result = eval(operand1 / 100);
                    screen.innerText = result;
                    reset = true;
                    dummy = 0;
                    console.log(" hnm function")

                } else if (operator == "%" && operand2 != 0) {

                    // operand2 = 100;
                    result = (operand1 / 100) * operand2;
                    // result = eval(result +""+"*"+""+operand2);
                    screen.innerText = result;
                    reset = true;
                    dummy = 0;
                    console.log("% function")

                } else {
                    result = eval(operand1 + "" + operator + "" + operand2);
                    screen.innerText = result;
                    reset = true;
                    dummy = 0;
                }
            }
        } else if (key == "Backspace" || key == "Escape") {
            screen.innerText = "0";
            message = "";
            operand1 = 0;
            operand2 = 0;
            operator = null;
            reset = true;
        } else {
            if (screen.innerText == 0) {
                screen.innerText = "";

            }

            if (message == "") {
                screen.innerText += key;
            }

            if (reset == false) {

                dummy += key;
                console.log(dummy);
            }
        }


    }


})

// }