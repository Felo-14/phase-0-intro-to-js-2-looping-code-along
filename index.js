// Code your solutions in this file

function writeCards(stringName, eventName) {
    let message = []
    for (let i = 0; i < stringName.length; i++) {
        message.push(`Thank you, ${stringName[i]}, for the wonderful ${eventName} gift!`)
    }
    return message;
}


function countDown(number){
    while (number >= 0) {
        console.log(number);
        number-=1;
    }
}
