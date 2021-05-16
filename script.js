var score = 0;
var cross = true;

function jump() {
    var mario = document.querySelector(".mario");
    if (mario.classList == "marioani") {
        return
    }
    mario.classList.add("marioani");
    setTimeout(() => {
        mario.classList.remove("marioani");
    }, 700);
}

function left() {
    var mario = document.querySelector(".mario");
    var marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue("left"));
    mario.style.left = marioX - 50 + "px";
    if (marioX < 14) {
        mario.style.left = 614 + "px";
    }
}

function rigth() {
    var mario = document.querySelector(".mario");
    var marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue("left"));
    mario.style.left = marioX + 50 + "px";
    if (marioX > 614) {
        mario.style.left = 14 + "px";
    }
}

setInterval(() => {
    var mario = document.querySelector(".mario");
    var dragon = document.querySelector(".dragon");
    var gameover = document.querySelector(".gameOver")
    var marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue("left"));
    var marioY = parseInt(window.getComputedStyle(mario, null).getPropertyValue("top"));
    var dragonX = parseInt(window.getComputedStyle(dragon, null).getPropertyValue("left"));
    var dragonY = parseInt(window.getComputedStyle(dragon, null).getPropertyValue("top"));
    var offsetX = Math.abs(marioX - dragonX);
    var offsetY = Math.abs(marioY - dragonY);
    console.log(offsetX, offsetY);
    if (offsetX < 133 && offsetY < 52) {
        mario.style.visibility = "hidden";
        dragon.classList.remove("dragonani");
        gameover.innerHTML = "GAME OVER - reload to start again";
        score = 0;
    } else if (offsetX < 113 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000)
        setTimeout(() => {
            var aniDur = parseFloat(window.getComputedStyle(dragon, null).getPropertyValue("animation-duration"));
            var newDur = aniDur - 0.4;
            dragon.style.animationDuration = newDur + "s";
        },500)
    }
}, 10)

function updateScore(score) {
    document.querySelector(".score").innerHTML = "Score: " + score;
}
