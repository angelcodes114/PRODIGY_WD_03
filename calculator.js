let input=document.getElementById("inputbox");
let btns=document.querySelectorAll('button');

let string = "";
let arr= Array.from(btns);
arr.forEach(button=>{
button.addEventListener('click', (e) =>{
    if(e.target.innerHTML=='='){
        if(string==''){
        alert("You must enter something to see the results!");
        }
        else{
            string=eval(string);
        }
    }
    else if(e.target.innerHTML=='AC'){
        string='';
    }
    else if(e.target.innerHTML=='DEL'){
        string=string.substring(0, string.length-1);
    }
    else{        
        string += e.target.innerHTML;
    }
    input.value=string;
        })
    })