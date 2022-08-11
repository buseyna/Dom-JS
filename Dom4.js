var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);
//Delete event
itemList.addEventListener('click', removeItem);

//filter event 
filter.addEventListener('keyup', filterItems);

//Add item
function addItem(e){
    e.preventDefault();
    //console.log(1);
    
    //Get input value
    var newItem = document.getElementById('item').value;

    //Create New Li Element
    var li = document.createElement('li');

    //Add class
    li.className= 'list-group-item';
   // console.log(li);

   //Add text node with input value
   li.appendChild(document.createTextNode(newItem));

   //Create the delete button element
   var deleteBtn = document.createElement('button');

   //Add classes to delete button 
   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

   //Append text node
   deleteBtn.appendChild(document.createTextNode('X'));

   //Append button to li 
   li.appendChild(deleteBtn);

   //Append li to list
   itemList.appendChild(li);
}
   //Remove item
   function removeItem(e){
    if(e.target.classList.contains('delete')){
       console.log(1);
    
   }
}

//function filter Items
function filterItems(e){
    //convert text to lowercase
  var text = e.target.value.toLowerCase();
//  console.log(text);

//Get List
  var  items = itemList.getElementsByTagName('li');
  //console.log(items); // it showa collection of HTML that's why we need to convert it to an Array

  //Convert to an Array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
   // console.log(itemName);

   //sence we convert it to lowerCase then we need 
   if (itemName.toLowerCase().indexOf(text) != -1){
     item.style.display ='block';
   }
   else{
    item.style.display = 'none';
   }
  });
}