const numbers = [1,2,3,4,5,6,7,8,9,0]
const lowerCase = []
for (let i = 97; i < 122; i++) lowerCase.push(String.fromCharCode(i))
const upperCase = lowerCase.map(letter => letter.toUpperCase())
const specials = ['!', '@', '#', '$']
const overall = [numbers, upperCase, lowerCase, specials]
const checkboxes = document.querySelectorAll('.param')

document.querySelector('#range').oninput = function() {
    document.querySelector('#password-length').textContent = this.value
}

document.querySelector('#generator').onclick = generator

function generator(){
    let summary = []
    checkboxes.forEach((checkbox, index) => {
        if(checkbox.checked) {
            summary = [...summary,...overall[index]]
        }
    })

    shuffle(summary)

    let pass = ''
    let passwordLength = document.querySelector('#password-length').textContent
    for(let i = 0; i < Number(passwordLength); i++){
        pass += summary[randomInteger(0, Number(summary.length - 1))]
    }

    document.querySelector('#out').innerHTML = pass


}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

document.querySelector('#copy').onclick = function (){
    const text = document.querySelector('#out').textContent
    navigator.clipboard.writeText(text);
    document.execCommand("copy")
}

generator()
