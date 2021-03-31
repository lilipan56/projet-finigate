window.onload = function () {
    let container = document.getElementById('container');
    let list = document.getElementById('list');
    let buttons = document.getElementById('buttons').getElementsByTagName('span');
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');
    let index = 1;

    function showButton() {
        for (let i = 0; i < buttons.length; i++){
            if (buttons[i].className === 'on'){
                buttons[i].className = '';
                break;
            }
        }
        buttons[index - 1].className = 'on';
    }

    function animate(offset) {
        let newLeft = parseInt(list.style.left) + offset;
        list.style.left = `${newLeft}px`;
        if(newLeft > -1150){
            list.style.left = `${-5750}px`;
        }
        if(newLeft < -5750){
            list.style.left = `${-1150}px`;
        }
    }

    next.onclick = function () {
        if (index === 5){
            index = 1;
        }else{
            index += 1;
        }
        
        showButton();
        animate(-1150)
    }

    prev.onclick = function () {
        if (index === 1){
            index = 5;
        }else{
            index -= 1;
        }
        
        showButton();
        animate(1150)
    }

    for(let i=0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            if (this.className === 'on') {
                return;
            }
            let myIndex = parseInt(this.getAttribute('index'));
            let offset = -1150 * (myIndex - index);
            animate(offset);
            index = myIndex;
            showButton();
        }
    }
}