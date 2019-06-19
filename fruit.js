function Fruit(){
    this.x;
    this.y;

    this.pickLocation = function(){
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale
    }

    this.canvas = function(){
        context.fillStyle = "#a9ff00";
        context.fillRect(this.x, this.y, scale, scale);
    }
}