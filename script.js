var $start = document.querySelector('#start')
var $game = document.querySelector('#game')

var score = 0;

$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)


// запуск игры (убираем кнопку старт и заливаем фон белым цветом)
function startGame() {
    $game.style.backgroundColor = '#fff'
    $start.classList.add('hide')
    renderBox()
}

// если кликнули по квадрату (проверка, есть ли аттрибут data-box)
function handleBoxClick(event) {
    if (event.target.dataset.box){
        score++ // увеличение очков при клике на квадрат
        renderBox()
    }
    
}

//создание квадрата
function renderBox() {
    $game.innerHTML = '' // удаление квадрата при клике на него
    var box = document.createElement('div')

    box.style.height = box.style.width = '50px'
    box.style.position = 'absolute'
    box.style.backgroundColor = '#000'
    box.style.top = '50px'
    box.style.left = '50px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', true)

    $game.insertAdjacentElement('afterbegin', box)
}