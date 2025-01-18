document.addEventListener('DOMContentLoaded', () => {
    let input = document.getElementById('display')
    let buttons = document.querySelectorAll('button')
    let string = '';
    let arr = Array.from(buttons);
    console.log(arr);
         
    arr.forEach((e)=>{
     
    e.addEventListener('click',(e)=>{
        if (e.target.innerHTML=='Generate OTP') {
            string =Math.floor(Math. random() *9999  + 1000)
            input.value=string;
        }
        else if (e.target.innerHTML=='Clear all') {
            string = '';
            input.value=string;
        }
        else{
            string = new Date();
            input.value=string;
        }
    
        
    })

    
    })
})