


function padPlayer(n) {

    const padSound1 = new Audio("pad-sound1.mp3")
    const padSound2 = new Audio("pad-sound2.mp3")
    const padSound3 = new Audio("pad-sound3.mp3")
    const padSound4 = new Audio("pad-sound4.mp3")

    padSound1.pause();
    padSound2.pause();
    padSound3.pause();
    padSound4.pause();
    


    switch(n) {
        case 1:
            padSound1.play();
            break;
        case 2:
            padSound2.play();
            break;
        case 3:
            padSound3.play();
            break;
        case 4:
            padSound4.play();
            break;

    }


}