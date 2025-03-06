const q = document.querySelector('.q')
const w = document.querySelector('.w')
const e = document.querySelector('.e')
const r = document.querySelector('.r')

f = localStorage.getItem('cnt')

w.addEventListener('click', () => {

    alert('정답')

    window.open('q8.html', '_parent');
    if (f == 0){
        localStorage.setItem('cnt',1 )
    }
    else if (f == 1){
        localStorage.setItem('cnt',2 )
    }
    else if (f == 2){
        localStorage.setItem('cnt',3 )
    }
    else if (f == 3){
        localStorage.setItem('cnt',4 )
    }
    else if (f == 4){
        localStorage.setItem('cnt',5)
    }
    else if (f == 5){
        localStorage.setItem('cnt',6)
    }
    else if (f == 6){
        localStorage.setItem('cnt',7)
    }
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
    else if (f == 3){
        localStorage.setItem('cnt',3 )
    }
    else if (f == 4){
        localStorage.setItem('cnt',4 )
    }
    else if (f == 5){
        localStorage.setItem('cnt',5 )
    }
    else if (f == 6){
        localStorage.setItem('cnt',6 )
    }
    window.open('q8.html', '_parent');

})

e.addEventListener('click', () => {
    if (f == 0){
        localStorage.setItem('cnt',0 )
    }
    else if (f == 1){
        localStorage.setItem('cnt',1 )
    }
    else if (f == 2){
        localStorage.setItem('cnt',2 )
    }
    else if (f == 3){
        localStorage.setItem('cnt',3 )
    }
    else if (f == 4){
        localStorage.setItem('cnt',4 )
    }
    else if (f == 5){
        localStorage.setItem('cnt',5 )
    }
    else if (f == 6){
        localStorage.setItem('cnt',6 )
    }
    alert('틀림')
    window.open('q8.html', '_parent');

})

q.addEventListener('click', () => {
    if (f == 0){
        localStorage.setItem('cnt',0 )
    }
    else if (f == 1){
        localStorage.setItem('cnt',1 )
    }
    else if (f == 2){
        localStorage.setItem('cnt',2 )
    }
    else if (f == 3){
        localStorage.setItem('cnt',3 )
    }
    else if (f == 4){
        localStorage.setItem('cnt',4 )
    }
    else if (f == 5){
        localStorage.setItem('cnt',5 )
    }
    else if (f == 6){
        localStorage.setItem('cnt',6 )
    }
    alert('틀림')
    window.open('q8.html', '_parent');

})