let body = document.querySelector('body')
let first = document.querySelector('#first')
let second = document.querySelector('#second')

first.addEventListener('click', function() {
    body.classList.toggle('dark')
})

second.addEventListener('click', function() {
    alert('Told you not to click!')
})

let arr = ['Mango', 'Apple', 'Orange']

arr.forEach(function(item) {
    console.log(item)
})
