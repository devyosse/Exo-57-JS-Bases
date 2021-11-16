let a = prompt('Entrez un nombre décimal');

let b = prompt('Entrez un nombre');

if(a === parseInt(a) && b === parseInt(b)){
    alert('Recommence')
}

else{
    let result = parseInt(a)* b;
    alert(result);
}