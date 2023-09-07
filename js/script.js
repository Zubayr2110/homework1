const nick = document.getElementById('email')
const psw = document.getElementById('password')
function signIn() {
    nick.value == true
    psw.value == true
    location.href = "/index.html"
}

function add() {
    addToLocalStorage(id, inp.value, psw.value)
    location.href = "/index.html"
 }

function getLocalStorage() {
    if (localStorage.getItem('name')) {
       return JSON.parse(localStorage.getItem('name'))
    } else {
        return []
    }
}
function addToLocalStorage(value, psw) {
    const data = { id,value,psw };
    const items = getLocalStorage();
    items.push(data);
    localStorage.setItem('name', JSON.stringify(items));
    location.href = './log.html'
}

// let users = getLocalStorage();

// function checkUser(userinp, psw) {
//     for (let i = 0; i < users.length; i++){
//         if (users[i].value === userinp  && users[i].psw === psw ) {
//         location.href = 'https://kun.uz'
//         } else {
//             console.log('xato');
//         }
//     }
// }
// const btn = document.getElementById('click');
// function one(two) {
//     return two()
// }
// function some() {
//     console.log('dkjcbdhv');
// }
// one(some);
// function newCallback(x, y, next) {
//     let res = x + y;
//     return next(res);
// }
// function extra(some) {
//     console.log(some);
// }
