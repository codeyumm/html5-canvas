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
    
    // empty array to store lines
    var lineArray = [];

    // width and height(angle) for lines
    var lineX = 30;
    var lineY = 0;
    var theta = 0;
    var maxTheta = 20;
    var angle = lineY + theta;
    // to create line
    function Line(){
        this.x = Math.round(Math.random() * (innerWidth - lineX));
        this.y = Math.round(Math.random() * innerHeight);
        this.color = pastelColors[Math.round(Math.random() * pastelColors.length)];
        this.theta = theta;
        this.angle = this.y + this.theta;

        this.draw = function(){
            c.beginPath();
            // c.moveTo(x, y);
            c.moveTo(this.x, this.y);
            c.lineTo(this.x + lineX, this. angle);
            c.strokeStyle = this.color;
            c.stroke();
        }

        this.update = function(){

            if( mouse.x - this.x < 50 && mouse.x - this.x < -50
                && mouse.y - this.y < 50 && mouse.y - this.y > -50){
                if( this.theta < maxTheta ){
                    // this.theta += 20;
                    // this.angle = this.y + this.theta;
                    this.x += 10;
                }
            } else if( this.theta > maxTheta ){
                // this.theta = 0;
                // this.angle = this.y + this.theta;
                this.x -= 10;
            }

            this.draw();
        }
    }

    // number of lines on screen
    var numberOfLines = 800;

    // create number of line and push it to array
    for(let i=0; i<numberOfLines; i++){
        lineArray.push(new Line());
    }



    
    // to animate
    function animate(){

        requestAnimationFrame(animate);
        //clear the canvas
        // draw circle
        c.clearRect(0, 0, innerWidth, innerHeight);

        lineArray.forEach( (line) => {
            line.update();
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