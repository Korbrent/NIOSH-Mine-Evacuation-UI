const render = document.getElementById("renderThang");

function init_render(width, height) {
    for (let i = 0; i < height; i++) {
        let row = "<tr>";
        for (let j = 0; j < width; j++) {
            row += '<td class="grid" id="' + j + '_' + i + '" style="background-color:rgba(0,0,0,0);"></td>';
        }
        row += "</tr>";
        render.insertAdjacentHTML('beforeend', row);
    }
}

function whoAmI(event) {
    const [x, y] = event.target.id.split("_");
    alert("I am at (" + x + "," + y + ")");
}

function setColor(x, y, rgb) {
    document.getElementById(x + "_" + y).style.backgroundColor = rgb;
}

init_render(10, 10);
document.getElementById("1_1").style.backgroundColor = "#000000";
document.getElementById("1_2").style.backgroundColor = "#000000";
document.getElementById("1_1").addEventListener("click", whoAmI);