let zones = document.querySelectorAll('.cube'),
    rightBtn = document.querySelector('.right-arrow'),
    leftBtn = document.querySelector('.left-arrow'),
    playBtn = document.querySelector('.play-pause'),
    rotation = 0;

rightBtn.addEventListener('click', () => {
    rotation -= 90;
    if (rotation == Math.abs(360)) {
        rotation = 0;
    }
    zones.forEach(zone => {
        zone.style.transform = `rotateY(${rotation}deg)`;
    });
});

leftBtn.addEventListener('click', () => {
    rotation += 90;
    if (rotation == Math.abs(360)) {
        rotation = 0;
    }
    zones.forEach(zone => {
        zone.style.transform = `rotateY(${rotation}deg)`;
    });

});

//rotazione delle immagini al click del pulsante sia destro che sinistro


rightBtn.addEventListener('mouseover', () => {
    rotation -= 45;
    if (rotation == Math.abs(45)) {
        rotation = 0;
    }
    zones.forEach(zone => {
        zone.style.transform = `rotateY(${rotation}deg)`;
    });
});

leftBtn.addEventListener('mouseover', () => {
    rotation += 45;
    if (rotation == Math.abs(360)) {
        rotation = 0;
    }
    zones.forEach(zone => {
        zone.style.transform = `rotateY(${rotation}deg)`;
    });

});

//gira a metà quando ci passi il mouse sopra sia a destra che a sinistra

rightBtn.addEventListener('mouseout', () => {
    rotation += 45;
    if (rotation == Math.abs(45)) {
        rotation = 0;
    }
    zones.forEach(zone => {
        zone.style.transform = `rotateY(${rotation}deg)`;
    });
});

leftBtn.addEventListener('mouseout', () => {
    rotation -= 45;
    if (rotation == Math.abs(45)) {
        rotation = 0;
    }
    zones.forEach(zone => {
        zone.style.transform = `rotateY(${rotation}deg)`;
    });

});
//Quando togli il mouse dal pulsante, torna in posizione originale. 

//PROVA PULSANTE PLAY

 