var time=1;
var tc="";
var dtc="";

function clicked(){
    //standar code
    var line=document.createElement("br");
    document.body.appendChild(line);

    //changeable code
    if(time==1){
        tc="A.Note        v1.0 (Java)";
        dtc="Drawing.jar"
    }else if(time==2){
        tc="A.Note        v1.1 (Java)";
        dtc="A.Note v1.1.jar"
    }
    var text=document.createElement("a");
    text.download=dtc;
    text.href="";
    text.onclick="clicked()";
    text.textContent=tc;
    document.body.appendChild(text);
    time++;
}
