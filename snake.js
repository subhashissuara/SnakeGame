function Snake() {
    this.x = 150;
    this.y = 150;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
    this.highscore = 0;

    this.canvas = function () {
        context.fillStyle = "#FFFFFF";

        for (let i = 0; i < this.tail.length; i++) {
            context.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }
        context.fillRect(this.x, this.y, scale, scale);
    }
    this.update = function () {
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1]
        }

        this.tail[this.total - 1] = { x: this.x, y: this.y };

        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
    this.changeDirection = function (direction) {
        switch (direction) {
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                break;
            case 'Left':
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
                break;
            case 'Right':
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                break;
        }
    }

    this.eat = function (fruit) {
        if (this.x === fruit.x && this.y === fruit.y) {
            this.total++;
            return true;
        }
        return false;
    }
    this.gameOver = function () {
        alert("Game Over! Score: " + this.total);
        this.highscore = this.total
        this.total = 0;
        this.tail = [];
        alert("Press OK to Play Again!");
        this.x = 150;
        this.y = 150;
    }
    this.checkCollision = function () {
        if (this.x >= canvas.width) {
            this.gameOver();
        }

        if (this.y >= canvas.height) {
            this.gameOver();
        }

        if (this.x < 0) {
            this.gameOver();
        }

        if (this.y < 0) {
            this.gameOver();
        }
        for (var i = 0; i < this.tail.length; i++) {
            if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
                this.gameOver();
            }
        }
    }
}