const inut = document.getElementById('added');
const values = document.querySelector('ul');
const fm = document.querySelector('form');
const h = document.querySelector('h1');
let erase = document.getElementById('erase');
const submitButton = document.getElementById('submit');
function valueandupdate()
{
    if(inut.value!=''){
    if(localStorage.getItem('item')==null)
    {
       listItems=[];
       listItems.push(inut.value);
       localStorage.setItem('item' ,JSON.stringify(listItems));
       inut.value = null; 
    }
    else{
       listItemsstr = localStorage.getItem('item');
       listItems = JSON.parse(listItemsstr);
       listItems.push(inut.value);
       localStorage.setItem('item',JSON.stringify(listItems)); 
       inut.value = null;
    } 
    erase.style.display = 'grid'; 
    h.style.display = 'grid';
    update();
}
}
function update(){
    if(localStorage.getItem('item')==null)
    {

        listItems = [];
        localStorage.setItem('item' , JSON.stringify(listItems));
    }
    else{
        listItemsstr = localStorage.getItem('item');
        listItems = JSON.parse(listItemsstr);
    }
    let str = " ";
    listItems.forEach((element,index)=> {  
       str += `<li>${element} <button id="bt" onclick="delet(${index})">remove</button></li>`; 
    });
     values.innerHTML = str;
     if(listItems[0]==null)
     {
        erase.style.display = 'none';
        h.style.display = 'none';
         update();
     }
}

function delet(itemindex)
{
    listItems = [];
    listItemsstr = localStorage.getItem('item');
    listItems = JSON.parse(listItemsstr);
    listItems.splice(itemindex,1);
    localStorage.setItem('item' , JSON.stringify(listItems));
    update();
}
function erased()
{
    if(confirm('Do you want to clean your list?'))
    {
        localStorage.clear();
    }
    update();
}
update();




 
       
   




