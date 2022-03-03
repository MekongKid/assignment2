// The "Hitchhiker's Guide to the Galaxy" Game
// Use a combination of simple conditional, nested if/else if, and switch statements



// switch > Much easy using switch.

const game = prompt(`Enter 'yes' or 'no' to start game`) 

switch(game) {
        case 'yes':
            alert('You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.'); 
            prompt('Which direction would you like to head (please enter forward, left, or right');

        case 'forward': 
             document.write = alert('You walk 100 yards and safely make your way out of the cave.');
        break;

        case 'left':
            document.write = alert('Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!');
        break;               

        case 'right': 
             document.write = alert('You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!')
        break;


        case 'no':
            alert ('Ok, thanks! Maybe next time.');
            break;

         default:
                document.write = alert('The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option. Game Over!');

        
};          

        
    
  


