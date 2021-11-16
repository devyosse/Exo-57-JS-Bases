let a = +prompt('Votre âge ?')

if(a === parseInt(a)) {
    if(a > 18){
        alert('Vous êtes majeur')
    }

    else {
        alert('Vous êtes mineur')
    }
}

else{
    alert('Erreur');
}
