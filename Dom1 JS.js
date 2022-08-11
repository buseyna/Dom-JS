// //EXAMINE THE DOCUMENT OBJECT //
// //console.dir(document);
// //console.log(document.domain);
// //console.log(document.URL);
// // console.log(document.title);
// // //document.title =123;
// // console.log(document.doctype);
// // console.log(document.head);
// // console.log(document.body);
// // console.log(document.all); //gives us an array 
// // console.log(document.all[10]); // we are grabing the index of 10
// // //we can change things based on selector 
// // document.all[10].textContent='Hello'; // But this is definitley not a good way to use the selctor
// // console.log(document.forms);
// // console.log(document.links);// because we don't have it thats why its like array
// //console.log(document.images);

// //GET ELEMENT BY iD
// //console.log(document.getElementById('header-title'));
// //ANOTHER WAY TO DO THE SAME AS PREVIOUSE
// //var headerTitle = document.getElementById('header-title');

// //console.log(headerTitle);
// //headerTitle.textContent = 'Hello';
// //headerTitle.innerText = 'Goodbye';
// //console.log(headerTitle.textContent);
// //headerTitle.innerHTML = '<h3>Hello</h3>';
// //for changing the style 
// //var headerTitle = document.getElementById('main-header');
// //headerTitle.style.borderBottom = 'solid 3px #000';

// //GETELEMENTBYCLASSNAME //
// //  var items = document.getElementsByClassName('list-group-item');
// //  console.log(items);
// //  console.log(items[1]);
// //  items[1].textContent = 'Hello 2';
// //  items[1].style.fontWeight = 'bold';
// //  items[1].style.blackgroundColor = 'yellow';

// //  //GIVES Error
// //  //items.style.blackgroundColor = '#f4f4f4'; //we have to loop in an order to make it work 
// // for(var i = 0; i <items.length; i++){
// // items[i].style.bagroundColor = '#f4f4f4';
// // }

// // //GETELEMENTBYTAGNAME//
// // var li = document.getElementsByTagName('li');
// // console.log(li);
// // console.log(li[1]);
// // li[1].textContent = 'Hello 2';
// // li[1].style.fontWeight = 'bold';
// // li[1].style.blackgroundColor = 'yellow';
// //  //GIVES Error
// //  //items.style.blackgroundColor = '#f4f4f4'; //we have to loop in an order to make it work 
// //  for(var i = 0; i <items.length; i++){
// //     li[i].style.bagroundColor = '#f4f4f4';
// //     }

// //QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello Word'

// var submit = document.querySelector ('input[type="submit"]');
// submit.value = "SEND"

// var item = document.querySelector ('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector ('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector ('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// //QUERYSELECTORALL//
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for( var i = 0; i< odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';

// }