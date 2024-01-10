// to check the js file
// alert("Hello from script.js"); 

window.onload = function() {

    // grabbing elements from dom
    const canvas = document.querySelector('canvas');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // get position of mouse
    var mouse = {
        x: undefined,
        y: undefined
    }

    // event listeners
    window.addEventListener('mousemove', function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    })


    // for random color
    const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

    
    const pastelColors = [
        "#38184C", 
        "#A0CD60",  
        "#1C646D",  
        "#CEF09D",  
    ];

    // context
    const c = canvas.getContext('2d');

    var gravity = 1;
    var friction = 0.99;

    // to generate ball
    function Ball(x, y, dx, dy, radius){


        this.x = x;
        this.y = y;
        this.dy = dy;
        this.dx = dx;
        this.radius = radius;
        this.color = pastelColors[Math.round(Math.random() * pastelColors.length)];

        this.draw = function(){

            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.fillStyle = this.color;
            c.fill();
            c.stroke();
            c.closePath();

        }

        this.update = function(){

            if( this.y + this.radius + this.dy > canvas.height ){
                this.dy = -this.dy * friction;
                this.dx = this.dx * friction;
            } else {

                this.dy += gravity;
            }

            
            if( this.x + this.radius > canvas.width || this.x - this.radius <= 0){
            
                this.dx = -this.dx * friction;
            }

            this.y += this.dy;
            this.x += this.dx;

            this.draw();

        }
    }



    // implementation
    var ball;
    var ballArray = [];
    var maxBallNumber = 100;
    var radius = 30;

    function init(){
        
        ballArray = [];
        
        for(let i=0; i<maxBallNumber; i++){

            var x = Math.round(Math.random() * (canvas.width - radius)) + radius;
            var y = Math.round(Math.random() * (canvas.height - radius)) + radius;
            var radius = Math.round(Math.random() * 30) + 8;
            // random value between -2 to 2
            var dy = Math.round( Math.random() * 4 - 2);
            var dx = Math.round( Math.random() * 4 - 2);


            ballArray.push( new Ball(x, y,dx, dy, radius))
        }

        console.log(ballArray);
    }   

    // to animate
    function animate(){
        // keep requesting frame to show animation
        requestAnimationFrame(animate);

        // clear canvas
        c.clearRect(0, 0, innerWidth, innerHeight);

        ballArray.forEach( (ball) => {


            ball.update();
            console.log(ball);
        })

        // c.fillText("Hello", mouse.x, mouse.y)
        
    }

    init();
    animate();

    // to get random hex color code
    function getRandomColorCode(){

        var colorCode = "#";

        for(let i=0; i<6; i++){
            colorCode += hexNumbers[Math.round(Math.random() * (hexNumbers.length-1))];
        }

        return colorCode;
    }




}