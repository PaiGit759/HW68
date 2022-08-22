let inputValueH;

let inputValueR;

let cylinderVolume;

function buttonOnclick() {
    inputValueH = new Number(document.getElementById("fildForInput").value);
    inputValueR = new Number(document.getElementById("fildForInput1").value);

    cylinderVolume = (Math.PI * inputValueR * inputValueR * inputValueH);

    document.getElementById("exsamp").style.background = "#A0bF";
    document.getElementById("exsamp").style.color = "#FFFF";
    document.getElementById("exsamp").innerHTML = "<br><br>Cylinder Volume = " + cylinderVolume.toFixed(4);
}
