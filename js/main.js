// 1. chiedo il nome all'utente
const firstName = prompt ("inserisci il tuo nome")
// 2.chiedo il cognome all'utente
const lastName = prompt ("inserisci il tuo cognome")
// 3.chiedo il cognome all'utente
const favoriteColor = prompt ("inserisci il tuo colore preferito")
// 4.chiedo il cognome all'utente
const passWord = firstName + lastName + favoriteColor + 76
// 4.stampo su console
console.log( passWord )
// 6.stampo nell'html
document.getElementById('password').innerHTML = passWord

