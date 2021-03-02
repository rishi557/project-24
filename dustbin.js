class dustbin {
    constructor(baseX, baseY) {
        var options = {
            isStatic : true
        }

        this.x = baseX;
        this.y = baseY;
        this.width = 200;
        this.height = 100; 
        this.wallWidth = 20;
        this.angle = 0;
        this.baseBody = Bodies.rectangle(this.x, this.y, this.width, this.wallWidth, options);
        this.leftBody = Bodies.rectangle(this.x-this.width/2, this.y-this.height/2, this.wallWidth, this.height, options);
        this.rightBody = Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.wallWidth, this.height, options);
        Matter.Body.setAngle(this.leftBody, this.angle);
        Matter.Body.setAngle(this.rightBody, -1*this.angle);

        World.add(world, this.baseBody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
    }

    display () {
        var basePos = this.baseBody.position
        var leftPos = this.leftBody.position;
        var rightPos = this.rightBody.position;

        push();
        translate(basePos.x, basePos.y);
        rectMode(CENTER);
        strokeWeight(3);
        angleMode(RADIANS);
        fill(255, 0, 255);
        rect(0, 0, this.width, this.wallWidth);
        pop();

        push();
        translate(leftPos.x, leftPos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        strokeWeight(3);
        fill(255, 0, 255);
        rotate(this.angle);
        rect(0, 0, this.wallWidth, this.height);
        pop();

        push();
        translate(rightPos.x, rightPos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        strokeWeight(3);
        fill(255, 0, 255);
        rotate(-1*this.angle);
        rect(0, 0, this.wallWidth, this.height);
        pop();
    }
}