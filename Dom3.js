//Button onclick old version of work 
// function buttonClick(){
//     console.log('Button clicked');
// }

//EVENTS//

// var button = document.getElementById('button').addEventListener ('click',buttonClick );//Replace this function... function(){
// console.log(123); }); //with button click//

//function buttonClick(e){
//     console.log('Button clicked');
//     document.getAnimations('header-title').textContent = 'Changed';
//     document.querySelector('#main').getElementsByClassName.backgroundColor = '#f4f4f4';
// console.log(e);
// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);

// var output = document.getElementById('button');
// output.innerHTML = '<h3>'+e.target.id+'</h3>'


// console.log(e.type);

// console.log(e.clientX);
 // console.log(e.clientY);

// console.log(e.offsetX);
// console.log(e.offsetY);

// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
//}


var button = document.getElementById('button');
var box = document.getElementById('box');


//button.addEventListener ('click',runEvent);
// button.addEventListener ('dblclick',runEvent);
//button.addEventListener ('mousedown',runEvent);
// button.addEventListener ('mouseup',runEvent);

//box.addEventListener('mouseenter', runEvent);
//box.addEventListener('mouseleave', runEvent);


//box.addEventListener('mouseover', runEvent);
//box.addEventListener('mouseout', runEvent);


//box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);
function runEvent(e){
    //THIS IS FOR SUBMIT //
    //e.preventDefault();

    
    console.log('EVENT TYPE:'+e.type);
    //console.log(e.target.value);

    //document.body.style.display ='none'; // it's everything desapeare

    // console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';


   //output.innerHTML = '<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY:'+e.offsetY+'</h3>';

   //To change the color in the box once the mouse moves
    // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";


       //To change the color in the body once the mouse moves
//document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";


}