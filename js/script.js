
alert("My First JavaScript Calculator")

function plus() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;

    num2 = document.getElementById('n2').value;

    result = num1 + num2;
    document.getElementById('out').innerHTML = result;
}

function minus() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;

    num2 = document.getElementById('n2').value;

    result = num1 - num2;
    document.getElementById('out').innerHTML = result;
}

function divide() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;

    num2 = document.getElementById('n2').value;

    result = num1 / num2;
    document.getElementById('out').innerHTML = result;
}

function multiplication() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;

    num2 = document.getElementById('n2').value;

    result = num1 * num2;
    document.getElementById('out').innerHTML = result;
}



