function kinagyit(kuldo){
   
    document.getElementById("kep").setAttribute("src", "images//"+ kuldo.value+".jpg");
    document.getElementById("kep").setAttribute("height", 800);
    document.getElementById("kep").setAttribute("width", 800);
}

function valtozas(){
    document.getElementById("kep").setAttribute("height", document.getElementById("magassag").value);
    document.getElementById("kep").setAttribute("width", document.getElementById("szelesseg").value);
}

function Blur(){
    if (document.getElementById("blur").checked) {
        document.getElementById("kep").style="filter:blur(8px);";
    }else{
        document.getElementById("kep").style="filter:blur(0px);";
    }
}

function Atlatszo(){
    if (document.getElementById("atlatszo").checked) {
        document.getElementById("kep").style="filter:opacity(30%);";
    }else{
        document.getElementById("kep").style="filter:opacity(100%);";
    }
}