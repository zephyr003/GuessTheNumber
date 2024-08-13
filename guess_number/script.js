let guess_no = Math.floor(Math.random() * 101);
let limit = 5
function guess_number() {
    let number = parseInt(document.getElementById("guess").value,10);
    let msg = document.getElementById("msg");
    if (number === guess_no){
        msg.textContent = "You guessed right!";
        guess_no = Math.floor(Math.random() * 101);
        limit = 5
        return false;
    }
    else if (number < guess_no) {
        msg.textContent = "Too low! Chances remaining: "+limit;
        limit--;
        if (limit==0) {
            msg.textContent = "Game Over! You lost. The number was: "+guess_no;
            guess_no = Math.floor(Math.random() * 101);
            limit = 5   
        }
        return false;
    }
    else {
        msg.textContent = "Too high! Chances remaining: "+limit;
        limit--;
        if (limit==0) {
            msg.textContent = "Game Over! You lost. The number was: "+guess_no;
            guess_no = Math.floor(Math.random() * 101);
            limit = 5
        }
        return false;
    }
}