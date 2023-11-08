let divBoard = document.querySelector('#board-container');

let sizeofBoard = prompt("Enter the number of squares that you want");

function size (number,measurements) {
    
    number =  sizeofBoard;
    
    measurements = (500/number);
    
    console.log(measurements);


    for(let i = 0 ; i < number*number ; i++)

    {
    
        let square = document.createElement ('div');
    
        square.setAttribute('id',`${i + 1}divSquare`);
    
        square.style.border = '0.5px solid black';
    
        square.style.width = `${measurements}px`;
    
        square.style.height = `${measurements}px`;
    
        divBoard.appendChild(square);
    
        console.log(square);

        divBoard.addEventListener('mousemove', function (e)
                                                  {if (e.target.id === `${i + 1}divSquare`) {square.style.backgroundColor='white';
                                                                                            console.log(`clicked ${i + 1}divSquare`);}})
    
    }

}

size();



