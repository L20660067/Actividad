const button = document.getElementById('colorButton');

function randomRGB() {
    let rgbColor = "rgb(";
    let colors = [];

    for (let i = 0; i < 3; i++) {
        colors.push(Math.floor(Math.random() * 256)); 
    }

    rgbColor += colors.join(",") + ")";
    return rgbColor;
}

button.addEventListener('click', function() {
    document.body.style.backgroundColor = randomRGB();
});
