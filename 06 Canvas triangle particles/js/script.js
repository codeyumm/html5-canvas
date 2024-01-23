// to check the js file
// alert("Hello from script.js"); 

window.onload = function() {

    var mouse = {
        x: undefined,
        y: undefined
    }

    // event listeners
    window.addEventListener('mousemove', function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    })


    // grabbing elements from dom
    const canvas = document.querySelector('canvas');
    
    // setting height and width of canvas according to screen size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // here, c stand for context
    // getContext() returns a object with helpful functions to draw
    var c = canvas.getContext('2d');

    //variables
    // var x = Math.random() * (innerWidth);
    // var y = Math.random() * (innerHeight);
    // var dx = (Math.random() - 0.5) * 8;
    // var dy = (Math.random() - 0.5) * 8;
    // var radius = 60;
    
    // for random color
    const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

    const pastelColors = [
        "#261A24", 
        "#F2DC9B",  
        "#D9814E",  
        "#D95555",  
        "#F25F29",
    ];

    // dot needs a x, y, dx, dy, radius
    class dot{

        constructor(){

            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;
            this.color = pastelColors[Math.round(Math.random() * pastelColors.length)];

        }

        draw(){

            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.fillStyle = this.color;
            c.fill();
            c.stroke();
            c.closePath();
            
        }

        update(){

            if( this.x + radius > innerWidth || this.x - radius < 0){
                this.dx = -this.dx;

            }
            
            if( this.y + radius > innerHeight ||  this.y - radius < 0){
                this.dy = -this.dy;
            }

            


            this.x += this.dx;
            this.y += this.dy;

            console.log(this.x + "----" + this.y);
            this.draw();
        }
    }
    
    // array to store n number of dots
    var dots = [];
    
    // maximum dots on screen
    var maxDots = 100;
    var radius = 6;

    for(let i=0; i<maxDots; i++){

        var x = Math.round(Math.random() * (innerWidth - radius));
        var y = Math.round(Math.random() * (innerHeight - radius));
        var dx = Math.round( Math.random() * 4 - 2);
        var dy = Math.round( Math.random() * 4 - 2);
        // var dx =  Math.random() * 4;
        // var dy =  Math.random() * 4;


        dots.push( new dot(x, y, dx, dy, radius));
    }

    console.log(dots);

    
    // to animate
    function animate(){

        requestAnimationFrame(animate);

        c.clearRect(0, 0, innerWidth, innerHeight);
        

        dots.forEach ( dot => {
            dot.update();
        })


    }   




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