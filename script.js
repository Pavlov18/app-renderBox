var $start = document.querySelector('#start')
var $game = document.querySelector('#game')
var $time = document.querySelector('#time')
var $result = document.querySelector('#result')
var $timeHeader = document.querySelector('#time-header')
var $resultHeader = document.querySelector('#result-header')

var score = 0
var isGameStarted = false

$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)


// запуск игры (убираем кнопку старт и заливаем фон белым цветом)
function startGame() {
    score  = 0;
    setGameTime()
    $timeHeader.classList.remove('hide')
    $resultHeader.classList.add('hide')
    isGameStarted = true
    $game.style.backgroundColor = '#fff'
    $start.classList.add('hide')

    var interval = setInterval(function(){
        var time = parseFloat($time.textContent)
        if (time <=0){
            clearInterval(interval)
            endGame()
        //end game
        } else {
            $time.textContent = (time - 0.1).toFixed(1)
        }  
    }, 100) //обновление таймера каждые 100 милисекунд

    renderBox()
}

 

function setGameScore() {
    $result.textContent = score.toString()
}

function setGameTime() {   // установка изначального времени игры
    var time = 5
    $time.textContent = time.toFixed(1)
} 

function endGame() {
    isGameStarted = false
    setGameScore()
    $start.classList.remove('hide')
    $game.innerHTML = ''
    $game.style.backgroundColor = '#ccc'
    $timeHeader.classList.add('hide')
    $resultHeader.classList.remove('hide')
}

// если кликнули по квадрату (проверка, есть ли аттрибут data-box)
function handleBoxClick(event) {
    if (!isGameStarted) {
        return
    }

    if (event.target.dataset.box){
        score++ // увеличение очков при клике на квадрат
        renderBox()
    }
    
}

//создание квадрата
function renderBox() {
    $game.innerHTML = '' // удаление квадрата при клике на него
    var box = document.createElement('div')
    var boxSize = getRandom(30, 100)
    var gameSize = $game.getBoundingClientRect() // получение данных игрового поля
    var maxTop = gameSize.height - boxSize
    var maxLeft = gameSize.width - boxSize
 
    box.style.height = box.style.width = boxSize+'px'
    box.style.position = 'absolute'
    box.style.backgroundColor = '#000'
    box.style.borderRadius = '50%'
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxLeft) +'px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', true)

    $game.insertAdjacentElement('afterbegin', box)
}

function getRandom(min, max) { // генерация случайных чисел
    return Math.floor(Math.random() * (max-min) +min)
}