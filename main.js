let colorPicker;

let divBoard = document.querySelector('#board-container');

let eraserButton = document.querySelector('.eraserButton')

let blackButton = document.querySelector('.blackButton');

let rainbowButton = document.querySelector('.rainbowButton');

let clearButton = document.querySelector('.clearButton');

let sizeofBoard = prompt("Enter the number of squares that you want");

eraserButton.addEventListener('click', ()=>{colorPicker = 1;}); 

blackButton.addEventListener('click', ()=>{colorPicker = 2;});

rainbowButton.addEventListener('click',()=>{colorPicker = 3;});

divBoard.addEventListener('mousemove', function (event){
    
    clearButton.addEventListener('click',()=>{
        
        event.target.style.backgroundColor = null;
        colorPicker = 0;})})

function size (number,measurements) {

    number =  sizeofBoard;

    if (number <= 100 && number > 0)
    {
    
        measurements = (500/number);
    
        for(let i = 0 ; i < number*number ; i++)

        {
            let square = document.createElement ('div');

            square.setAttribute('id',`${i + 1}divSquare`);
    
            square.style.border = '0.5px solid black';
            
            square.style.width = `${measurements}px`;
            
            square.style.height = `${measurements}px`;

            divBoard.appendChild(square);

            const randRed = Math.floor(Math.random() * 256);
    
            const randGreen = Math.floor(Math.random() * 256);
    
            const randBlue = Math.floor(Math.random() * 256);

            divBoard.addEventListener('mousemove', function (e)
                                                
            {
            
                if (e.target.id === `${i + 1}divSquare` && colorPicker === 1) 
            
                {square.style.backgroundColor = 'white';}
                
                else if(e.target.id === `${i + 1}divSquare` && colorPicker === 2)

                {square.style.backgroundColor = 'black';}

                else if(e.target.id === `${i + 1}divSquare` && colorPicker === 3)

                {e.target.style.backgroundColor = `rgb(${randRed}, ${randGreen}, ${randBlue})`;}
                

            }
            )

        }
                                        
    }
    else
    
    {
        prompt("Enter a number less than 100 and above 0, no invalid numbers allowed!")
    }
                                            
    }
size();






