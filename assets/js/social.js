/**
 * Created by Mistadrumma on 20.03.2017.
 */


var social = document.getElementById('social');
var click = false;

social.onclick = function() {
    console.log(click);
    if (click == false) {

        this.classList.add('fa-heart');
        this.classList.add('ic-move');
        this.classList.remove('fa-heart-o');
        click = true;
    }
    else {
        this.classList.add('fa-heart-o');
        this.classList.remove('fa-heart');
        click = false;
    }
};