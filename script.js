// Calculator HomeWork 13/01/2019 By Temo Guseinov

    let classname =  document.getElementsByClassName("btn"); // buttons

// insert symbol in calculator screen
    let insert = function insert() {
        document.getElementById('screen').innerHTML += this.innerHTML;
    };

// clear entered numbers in calculator
    let clear = function clear(){
        document.getElementById('screen').innerHTML = '';
    };

// equal entered numbers
    let equal = function equal(){
        document.getElementById('screen').innerHTML = eval(document.getElementById('screen').innerHTML);
    };

// back entered numbers
    let backspace = function backspace(){
        let screen = document.getElementById('screen').innerHTML;
        document.getElementById("screen").innerHTML = screen.substr(0, screen.length - 1);
    };

// Enter Numbers With Keyboard
    let keyPress = function (e){
        console.log(e.keyCode);
        // Numbers Shortcut
        if (e.keyCode >= 42 && e.keyCode <= 58){
            document.getElementById('screen').innerHTML += e.key;
        }
        // Enter Shortcut
        if (e.keyCode === 13){
            equal();
        }
    };

    // Not Symbol Keys
    let keyDown = function backspaceKey(e){
        // BackSpace Shortcut
        if (e.keyCode === 8){
            backspace();
        }
        // Delete Shortcut
        if (e.key === "Delete"){
            clear();
        }
    };

    // Events
    document.getElementById('clear').addEventListener('click', clear);
    document.getElementById('equal').addEventListener('click', equal);
    document.getElementById('backspace').addEventListener('click', backspace);
    document.addEventListener('keypress', keyPress); // Symbols Keys
    document.addEventListener('keydown', keyDown); // Not Symbol Keys
    //

    // Add Events For All Buttons In HTML
    for (let i = 0; i < classname.length; i++){
        classname[i].addEventListener('click', insert)
    }

// END
