const q = document.querySelector('.q')
const w = document.querySelector('.w')
const e = document.querySelector('.e')
const r = document.querySelector('.r')
f = localStorage.getItem('cnt')


q.addEventListener('click', () => {

    alert('정답')
    if (f == 0){
        localStorage.setItem('cnt',1 )
    }
    else if (f == 1){
        localStorage.setItem('cnt',2 )
    }
    else if (f == 2){
        localStorage.setItem('cnt',3 )
    }
    window.open('../q4/q4.html');

})

w.addEventListener('click', () => {

    alert('틀림')
    if (f == 0){
        localStorage.setItem('cnt',0 )
    }
    else if (f == 1){
        localStorage.setItem('cnt',1 )
    }
    else if (f == 2){
        localStorage.setItem('cnt',2 )
    }
    window.open('../q4/q4.html');


})

e.addEventListener('click', () => {

    alert('틀림')
    if (f == 0){
        localStorage.setItem('cnt',0 )
    }
    else if (f == 1){
        localStorage.setItem('cnt',1 )
    }
    else if (f == 2){
        localStorage.setItem('cnt',2 )
    }
    window.open('../q4/q4.html');


})

r.addEventListener('click', () => {

    alert('틀림')
    if (f == 0){
        localStorage.setItem('cnt',0 )
    }
    else if (f == 1){
        localStorage.setItem('cnt',1 )
    }
    else if (f == 2){
        localStorage.setItem('cnt',2 )
    }
    window.open('../q4/q4.html');


})
