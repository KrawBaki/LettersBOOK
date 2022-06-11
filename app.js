const saveLetter = document.querySelector('.save-letter')
const list = document.querySelector('.list')

const textArea = document.querySelector('textarea')
const letterPosts = []
let letter = {}
let count = 1


saveLetter.addEventListener('click', function(e){

    let lastElem = list.children.length + 1
    let text = textArea.value


    let li = document.createElement('li')
    let span = document.createElement('span')
    span.setAttribute('class', 'removeLetter')
    span.innerHTML = 'X'

    li.setAttribute('class', 'list-item')
    li.setAttribute('data-key', lastElem)
    li.innerHTML = `Запись ${ +lastElem}`
    li.appendChild(span) 
    list.appendChild(li)



    //Добавление в LocalStorage
    letter = {
        key: +li.dataset.key,
        value: text
    }
    letterPosts.push(letter)
    localStorage.setItem('letter', JSON.stringify(letterPosts))
    

    // Выбор элемента
    const listItems = list.children
    for(let elem of listItems) {elem.addEventListener('click', choiceElem)}

    span.addEventListener('click', function() {
        this.parentElement.remove()
    })




    count++
    textArea.value = ''
})






function choiceElem() {

    const data = localStorage.getItem('letter')
    const arrData = JSON.parse(data)

    for (let dataElem of arrData) {
        if(+this.dataset.key === dataElem.key ){
            textArea.value = dataElem.value
            textArea.focus()
        }
    }
}