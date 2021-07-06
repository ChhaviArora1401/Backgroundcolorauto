

function change() {
    var clr = document.querySelector(".clr")
    var bgcolor = new Array("blueviolet", "blue", "cyan", "red", "blanchedalmond", "burlywood", "cadetblue", "cornflowerblue", "darkgoldenrod", "darkorchid", "darkmagenta", "darkviolet", "violet", "yellowgreen", "gray",
        "indigo", "indianred", "lavender", "chartreuse", "brown");
    document.body.style.background = bgcolor[Math.floor(Math.random() * bgcolor.length)]
    clr.textContent = document.body.style.background = bgcolor[Math.floor(Math.random() * bgcolor.length)]
}

function changeh() {
    var clr = document.querySelector(".clr")
    var R = new Array("1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
    var G = new Array("1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
    var B = new Array("1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
    var bg = new Array("#" + R[Math.floor(Math.random() * R.length)] + R[Math.floor(Math.random() * R.length)] + G[Math.floor(Math.random() * G.length)] + G[Math.floor(Math.random() * G.length)] + B[Math.floor(Math.random() * B.length)] + B[Math.floor(Math.random() * B.length)]);
    document.body.style.background = bg
    clr.textContent = document.body.style.background = bg
}

function changer() {
    var clr = document.querySelector(".clr")
    var R = new Array("0", "1", "2");
    var G = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
    var B = new Array("0", "1", "2", "3", "4", "5");
    var bg = new Array("rgb(" + R[Math.floor(Math.random() * R.length)] + G[Math.floor(Math.random() * G.length)] + B[Math.floor(Math.random() * B.length)] + "," + R[Math.floor(Math.random() * R.length)] + G[Math.floor(Math.random() * G.length)] + B[Math.floor(Math.random() * B.length)] + "," + R[Math.floor(Math.random() * R.length)] + G[Math.floor(Math.random() * G.length)] + B[Math.floor(Math.random() * B.length)] + ")");
    document.body.style.background = bg
    clr.textContent = document.body.style.background = bg
}