

let id = 0;

document.getElementById('add').addEventListener('click',()=>{
     
     let table = document.getElementById('tab');
     let row = table.insertRow(1);
     row.setAttribute('id',`item-${id}`);
     row.insertCell(0).innerHTML = document.getElementById('new-year').value;
     row.insertCell(1).innerHTML = document.getElementById('new-movie').value;
     row.insertCell(2).innerHTML = document.getElementById('new-budget').value;


     let delCell = row.insertCell(3);
     let delButton = document. createElement('button');

     delButton.className='btn btn-danger';
     delButton.innerHTML = 'Delete';

     let newId = id;  // id of the value before it increments to the next
     delButton.addEventListener('click',() => {
     console.log(" deleting entry: " ,`item-${newId}`);
     let elementToDelete = document.getElementById(`item-${newId}`);
     elementToDelete.parentNode.removeChild(elementToDelete);

     });
     
     delCell.appendChild(delButton);
    
     id++;

   document.getElementById('new-year').value=('');
   document.getElementById('new-movie').value=('');
   document.getElementById('new-budget').value=('');
  

    });

