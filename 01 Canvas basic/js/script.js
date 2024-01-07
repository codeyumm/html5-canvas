// to check the js file
// alert("Hello from script.js"); 

window.onload = function() {

    // grabbing elements from dom
    const canvas = document.querySelector('canvas');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // here, c stand for context
    // getContext() returns a object with helpful functions to draw
    var c = canvas.getContext('2d');

    // c.fillRect(x, y, width, height)
    // x and y is position

    c.fillStyle = 'rgba(55,0,0,0.1)';
    c.fillRect(100, 100, 60, 60);
    c.fillRect(0, 0, 60, 60);
    c.fillStyle = 'rgba(55,100,200,0.1)';
    c.fillRect(200, 200, 60, 60);
    c.fillStyle = 'rgba(55,0,0)';
    c.fillRect(300, 300, 60, 60);
    c.fillRect(500, 300, 60, 60);
    c.fillRect(800, 300, 60, 60);

    // Line
    c.beginPath();
    // c.moveTo(x, y);
    c.moveTo(50, 300);
    c.lineTo(300, 100);
    c.lineTo(400, 700);
    c.strokeStyle = "whitesmoke";
    c.stroke();

    //Circle
    c.beginPath();
    // c.arc(x,y, radius, startAngle, endAngle, counterClockWise(true or false))
    c.arc(300, 300, 36, 0, Math.PI * 2, false);
    c.strokeStyle = "orange";
    c.stroke();


    // for random color
    const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

    // to get n number of random circles
    function randomizeCircle(number){
        for(let i=0; i<number; i++){

            var x = Math.random() * window.innerWidth;
            var y = Math.random() * window.innerHeight;
    
            c.beginPath();
            c.arc(x,y, 60, 0, Math.PI * 2, false);
            c.strokeStyle = getRandomColorCode();
            c.stroke();
        }
    }
    
    // to get n number of random lines
    function randomizeLine(number){

        for(let i=0; i<number; i++){

            var x = Math.random() * window.innerWidth;
            var y = Math.random() * window.innerHeight;

            var orginX = Math.random() * window.innerWidth;
            var orginY = Math.random() * window.innerHeight;

            c.moveTo(orginX,orginY);
            c.strokeStyle = getRandomColorCode();
            c.lineTo(x,y);
            c.stroke();
            
        }
    }

    // to get n number of random squares
    function randomizeSquare(number){

        for(let i=0; i<number; i++){
            var x = Math.random() * window.innerWidth;
            var y = Math.random() * window.innerHeight;
    
            console.log(x + "---" + y);
            var orginX = Math.random() * window.innerWidth;
            var orginY = Math.random() * window.innerHeight;
    
            c.fillStyle = getRandomColorCode();
            c.fillRect(orginX, orginY, x, y)
        }

    }

    // to get random hex color code
    function getRandomColorCode(){

        var colorCode = "#";

        for(let i=0; i<6; i++){
            colorCode += hexNumbers[Math.round(Math.random() * (hexNumbers.length-1))];
        }

        return colorCode;
    }



    randomizeCircle(200);
    randomizeLine(100);
    // randomizeSquare(100);

}