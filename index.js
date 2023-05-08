let buttonElement=document.getElementById("switch");
let displayElement=document.getElementById("display");
let buttons=document.querySelectorAll('button');
let interFaceElement=document.getElementById('interFace');
let string ='';
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            string=eval(string);
            displayElement.value=string;
        }else if (e.target.innerHTML == 'C'){
            string='';
            displayElement.value=string;
        }else if (e.target.innerHTML =="DE"){
            string=string.substring(0,string.length-1);
            displayElement.value=string;
        }
        else{
            string+=e.target.innerHTML;
            displayElement.value=string;

        }
        
    })
})

buttonElement.onclick=function(){

    interFaceElement.classList.toggle("backgroundColorElement")
}

