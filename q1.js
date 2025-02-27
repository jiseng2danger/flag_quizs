const q = document.querySelector('.q')
const w = document.querySelector('.w')
const e = document.querySelector('.e')
const r = document.querySelector('.r')


q.addEventListener('click', () => {
    

    localStorage.setItem('cnt', 1)
    alert('정답')

    window.open('q2.html', '_parent');

})

w.addEventListener('click', () => {

    alert('틀림')
    localStorage.setItem('cnt', 0)
    window.open('q2.html', '_parent');

    
})

e.addEventListener('click', () => {

    alert('틀림')
    localStorage.setItem('cnt', 0)
    window.open('q2.html', '_parent');


})

r.addEventListener('click', () => {

    alert('틀림')
    localStorage.setItem('cnt', 0)
    window.open('q2.html', '_parent');

})
