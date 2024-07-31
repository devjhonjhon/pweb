function qtdLacos() {
    const numberInput = document.getElementById("qtdL").value
    var number = Number(numberInput)

    var cars = [];
    for (let i=0; i<number; i++){
        cars[i] = i+1;
    }
    
    const spnRes = document.getElementById("spnRes");
    var str = "";
    for (let i=0; i < cars.length; i++) {
        str = str + "<br>" + cars[i];
    }

    spnRes.innerHTML = str;
}
