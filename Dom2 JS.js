// //TRAVERSING THE DOM // 
// var itemsList = document.querySelector('#items');
// //ParentNodeProperty//
// // console.log(itemsList.parentNode);
// // itemsList.parentNode.style.backgroundColor = '#f4f4f4';
// // console.log(itemsList.parentNode.parentNode.parentNode);

// //ParentElement // it's the same above 
// // console.log(itemsList.parentElement);
// // itemsList.parentElement.style.backgroundColor = '#f4f4f4';
// // console.log(itemsList.parentElement.parentElement.parentElement);


// //ChildNodes
// console.log(itemsList.childNodes);
// console.log(itemsList.children);
// //for the specific child //
// console.log(itemsList.children[1]);
// itemsList.children[1].style.backgroundColor = 'yellow';

// //FIRST CHild
// console.log(itemsList.firstChild);

// //FIRST Element Child 
// console.log(itemsList.firstElementChild);
// itemsList.firstElementChild.textContent = 'Hello 1';



// //LAST CHild
// console.log(itemsList.lastChild);

// //Last Element Child 
// console.log(itemsList.lastElementChild);
// itemsList.lastElementChild.textContent = 'Hello 4';
// itemsList.children[3].style.backgroundColor = 'red';

// //NextSibling 
// console.log(itemsList.nextSibling);
// //Next Element Sibling 
// console.log(itemsList.nextElementSibling);


// //PreviousSibling 
// console.log(itemsList.previousSibling);
// //Previous Element Sibling 
// console.log(itemsList.previousElementSibling);
// itemsList.previousElementSibling.style.color = 'blue';


// //CREATE ELEMENT

// //Create a div
// var newDiv = document.createElement('div');

// //Add class
// newDiv.className='hello';

// //Add id 
// newDiv.id='hello1';

// //Add Attribute
// newDiv.setAttribute('title', 'Hello Div');

// //Create text  node
// var newDivText = document.createTextNode('Hello world');


// //Add Text to Div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// console.log(newDiv);
// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);
