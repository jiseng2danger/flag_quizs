const q = document.querySelector('.q')
const w = document.querySelector('.w')
const e = document.querySelector('.e')
const r = document.querySelector('.r')

f = localStorage.getItem('cnt')

q.addEventListener('click', () => {

    alert('정답')

    window.open('ans.html', '_parent');
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
    else if (f == 3){
        localStorage.setItem('cnt',3 )
    }
    window.open('ans.html', '_parent');

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
    alert('틀림')
    window.open('ans.html', '_parent');

})

r.addEventListener('click', () => {
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
    alert('틀림')
    window.open('ans.html', '_parent');

})