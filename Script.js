let buttons = document.querySelector('.buttons');
let btn = document.querySelector('span');
let value = document.getElementById('value');

for(let i=0; i<btn.length; i++) {
    btn[i].addEventListener("click", function() {
        
        if(this.innerHTML="="){
            value.innerHTML=eqal(value.innerHTML);
        } else {
            if(this.innerHTML="clear") {
                value.innerHTML="";
            }
            else {
                value.innerHTML+=this.innerHTML;
            }
        }
        
    });
}