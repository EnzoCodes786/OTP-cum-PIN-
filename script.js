
document.addEventListener('DOMContentLoaded', () => {  //required somehow in my workplace to use getElement and querySelector
    let input = document.getElementById('inputBox');  //Selects the Input box and stores it in form of variable
    let buttons = document.querySelectorAll('button');//takes all the buttons and makes the variable

    let string = "";   

    let arr = Array.from(buttons);
    console.log(arr);

    arr.forEach(e => {
        console.log(e);
        e.addEventListener('click', (e) => {
          //  console.log(e.target.innerHTML);
            //string += e.target.innerHTML;
            //input.value = string;

            if (e.target.innerHTML == 'AC') {
                string ='';
                input.value=string;
            }
      //       if(e.target.innerHTML=='DEL'){
        //        string=string.substring(0,string.length-1)
          //      input.value =string;
            //}
            else if(e.target.innerHTML == '='){
                string =eval(string);
                input.value=string;
            }

            else {string=e.target.innerHTML
                input.value += string;   

            }
             
        })
    });
});