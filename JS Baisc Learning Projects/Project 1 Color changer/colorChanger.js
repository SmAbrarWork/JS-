// vars
const Body = document.querySelector('body');
const Buttons = document.querySelectorAll('.buttons');

// logs
// console.log('body....', Body);


// loops and functions
Buttons.forEach((button) => {
    button.addEventListener('click', function(e){
        const buttonId = e.target.id; // Get the ID of the clicked button
        
        switch (buttonId) {
            case 'red':
                Body.style.backgroundColor = 'brown'; // Change to red
                break;
            case 'blue':
                Body.style.backgroundColor = 'aqua'; // Change to blue
                break;
            case 'green':
                Body.style.backgroundColor = 'aquamarine'; // Change to green
                break;
            case 'white':
                Body.style.backgroundColor = 'aliceblue'; // Change to white
                break;
            default:
                Body.style.backgroundColor = 'white'; // Default or no change
                break;
        }
    })
});


