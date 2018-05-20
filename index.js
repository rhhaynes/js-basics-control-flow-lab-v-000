function scuberGreetingForFeet(distance){
  let greeting;
  if (distance <= 199) {
    greeting = 'This one is on me!';
  } else if (distance > 2000 && distance <= 2500) {
    greeting = 'I will gladly take your thirty bucks.';
  } else if (distance > 2500) {
    greeting = 'No can do.';
  }
  return greeting;
}

function ternaryCheckCity(destination){
  return (destination === 'NYC' ? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      'Thank you so much.';
      break;
    case 'not as generous':
      'Thank you.';
      break;
    default:
      'Bye.';
  }
}