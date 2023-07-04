let container = document.querySelector(".container");
for (let i = 1; i <= 100; i++) {
    let squares = document.createElement("div");
    squares.classList.add("element");
    container.appendChild(squares);
}

let animation = anime.timeline ({
    targets: ".element",
    easing: "easeInOutExpo",
    loop: true,
    delay: anime.stagger(80, {grid: [10, 10], from: "center"}),
});

animation
    .add({
        scale: 0,
        rotate: "-45deg",
        borderTopLeftRadius: "0%",
        opacity: "0",
    })
    .add({
        borderRadius: 50,
    })
    .add({
        scale: 1,
        opacity: 1,
        rotateZ: "360deg",
    })
    .add({
      scale: 0.2,
      opacity: 1,  
    })
    .add({
        opacity: 0,
        scale: 1,
        rotate: "100deg",
    });
