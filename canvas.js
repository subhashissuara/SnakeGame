const canvas = document.querySelector('.canvas');
const context = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
const Up = document.getElementById('up')
const Down = document.getElementById('down')
const Left = document.getElementById('left')
const Right = document.getElementById('right')

var snake;

(function start() {
    snake = new Snake();
    fruit = new Fruit();

    fruit.pickLocation();

    window.setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height)
        fruit.canvas();
        snake.update();
        snake.canvas();

        if(snake.eat(fruit)) {
            fruit.pickLocation();
        }

        snake.checkCollision();
        document.querySelector('.score')
            .innerText = "Score:" + snake.total;
        document.querySelector('.highscore')
            .innerText = "High Score (For this Session):" + snake.highscore;
    }, 150);
}());

window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
}))

Up.addEventListener('touchstart', ((evt) => {
    const direction = "Up";
    snake.changeDirection(direction);
}))

Down.addEventListener('touchstart', ((evt) => {
    const direction = "Down";
    snake.changeDirection(direction);
}))

Left.addEventListener('touchstart', ((evt) => {
    const direction = "Left";
    snake.changeDirection(direction);
}))

Right.addEventListener('touchstart', ((evt) => {
    const direction = "Right";
    snake.changeDirection(direction);
}))