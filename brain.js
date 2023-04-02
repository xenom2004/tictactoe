

function get(ide){
    var buttontype=document.querySelectorAll("button");
    for(var i=0;i<9;i++){
        if(buttontype[i].id==ide){
            var value=buttontype[i].innerHTML;
    

        }}
return value;
}
var numberoftimes=0;
function Changevalue(val){
    console.log(val);
    if(numberoftimes%2==0){
    var value=document.createTextNode("O");}
    else{
        var value=document.createTextNode("X");

    }
    val.appendChild(value);
    val.style.cursor="not-allowed";
    val.removeAttribute("onclick");
    numberoftimes++;
    if(numberoftimes>=5){

    var output=winner();
    if(output!=null){
    var answer=document.querySelectorAll("p")[0];
    answer.innerHTML="The winner is "+output;
    var buttons=document.querySelectorAll("button");
    for(var i=0;i<9;i++){
        buttons[i].removeAttribute("onclick");
        buttons[i].style.cursor="not-allowed";

    }


    }}
    
    


}

// console.log(get(1));
function winner(){
    for(var i=1;i<4;i++){
        for(var j=3*i-2;j<3*i+1;j++){
            if(get(j)=='' | get(j)=="X"){
                console.log("executed1");
                break;
            }
            if(j==3*i ){
                console.log("returning1");
                return 'O';
            }           
        }
    }
    for(var i=1;i<4;i++){
        for(var j=i;j<i+7;j=j+3){
            if(get(j)=='' | get(j)=="X"){
                console.log("executed2");
                break;
            }
            if(j==i+6 ){
                console.log("returning2");
                return 'O';
            }           
        }
    }
    for(var i=1;i<4;i++){
        for(var j=3*i-2;j<3*i+1;j++){
            if(get(j)=='' | get(j)=="O"){
                console.log("executed3");
                break;
            }
            if(j==3*i ){
                console.log("returning3");
                return 'X';
            }           
        }
    }
    for(var i=1;i<4;i++){
        for(var j=i;j<i+7;j=j+3){
            if(get(j)=='' | get(j)=="O"){
                console.log("executed4");
                break;
            }
            if(j==i+6 ){
                console.log("returning4");
                return 'X';
            }           
        }
    }
    if((get(1)==get(5) && get(5)==get(9) ) | (get(3)==get(5) && get(5)==get(7))){
        console.log("executed5");
        return get(5);
    }
}
function refresh(){
    location.reload();
}

