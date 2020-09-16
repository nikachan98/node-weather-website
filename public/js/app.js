// console.log('working')
// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then(data => {
//         console.log(data)
//     })
// })


const weatherForm = document.getElementById('form')
const search = document.querySelector('input')
const msgOne = document.querySelector('#msg-1')
const msgTwo = document.querySelector('#msg-2')


weatherForm.addEventListener('submit', e => {
    e.preventDefault()

    const location = search.value;

    msgOne.textContent = 'Loading weather...'
    msgTwo.textContent = ''

    fetch('/weather?address=' + location).then(response => {
    response.json().then((data) => {
        if(data.error){
             msgOne.textContent = data.error;
             msgTwo.textContent = ''
        }else{
           msgOne.textContent = data.location 
           msgTwo.textContent = data.forecast
        }
    })
})
})