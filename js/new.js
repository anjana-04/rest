function add(x,y){
    var z=x+y;
    return z;
}
function sub(x,y){
    var z=x-y;
    return z;
}
function mul(x,y){
    var z=x*y;
    return z;
}
function div(x,y){
    var z=x/y;
    return z;
}
    function getname()
    {
        var n1=document.getElementById("no1").value;
        var a=parseInt(n1);
        var n2=document.getElementById("no2").value;
        var b=parseInt(n2);
        var n3=document.getElementById("sel").value;
        if(n3=="add"){
            var n4=add(a,b);
            document.getElementById("result").innerHTML="<b>"+ n4+ "<b>";
        }
        else{
            if (n3=="sub") {
                var n4=sub(a,b);
            document.getElementById("result").innerHTML= "<b>"+ n4 +"<b>";
            } else {
                if (n3=="mul") {
                    var n4=mul(a,b);
            document.getElementById("result").innerHTML="<b>"+ n4 +"<b>";
                } else {
                    var n4=div(a,b);
            document.getElementById("result").innerHTML=n4;
                }
            }
        }
    }