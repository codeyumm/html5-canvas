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
        "#5A86BF",  // Pastel Blue
        "#323640",  // Pastel Red
        "#3B478C",  // Pastel Yellow
        "#D93644",  // Pastel Orange
        "#B1A2CA"   // Pastel Purple
    ];
    
    // console.log(x + "---" + y + "---" + dx + "---" + dy);

    var range = 20;
    var maxRadius = 60;
    var minRadius = 2;

    function circle(x, y, dx, dy, radius){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.color = pastelColors[Math.round(Math.random() * 5)];
 
        this.draw = function() {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.strokeStyle = "black"
            c.stroke();
            // c.fillStyle = "#85586f";
            c.fillStyle = this.color;
            c.fill();
        }

        this.update = function() {

            // handle edge case for screen width and height
            if( this.x + this.radius > innerWidth || this.x - this.radius < 0 ){
                this.dx = -this.dx;
            }

            if( this.y + radius > innerHeight || this.y - this.radius < 0 ){
                this.dy = -this.dy;
            }

            // set position for next frame
            this.x += this.dx;
            this.y += this.dy;

            if( mouse.x - this.x < 50 && mouse.x - this.x > -50
                && mouse.y - this.y < 50 && mouse.y - this.y > -50){
                    
                if(this.radius < maxRadius){
                    this.radius += 1;
                }

            } else if( this.radius > this.minRadius ){
                this.radius -= 1;
            }
            
            this.draw();
        }

    }

    // array to store circles
    var circleArray = [];

    var numberOfCircle = 800;

    for(let i=0; i<numberOfCircle; i++){

        var radius = Math.random() * 3 + 1;
        // var radius = 10;
        var x = Math.random() * (innerWidth - (radius*2)) + radius;
        var y = Math.random() * (innerHeight - (radius*2)) + radius;
        var dx = (Math.random() - 0.5);
        var dy = (Math.random() - 0.5);


        circleArray.push(new circle(x, y, dx, dy, radius));
    }



    // to animate
    function animate(){

        requestAnimationFrame(animate);
        //clear the canvas
        // draw circle
        c.clearRect(0, 0, innerWidth, innerHeight);

        circleArray.forEach( (circle) => {
            circle.update();
        });
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