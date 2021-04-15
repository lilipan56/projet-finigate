window.onload = function () {
    let container = document.getElementById('container');
    let list = document.getElementById('list');
    let buttons = document.getElementById('buttons').getElementsByTagName('span');
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');
    let index = 1;
    let productContainer = document.getElementById('product-container');
    let productList = document.getElementById('product-list');
    let productPrev = document.getElementById('product-prev');
    let productNext = document.getElementById('product-next');
    
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

    function play() {
        timer = setInterval(function() {
            next.onclick();
        }, 2000);
    }

    function stop() {
        clearInterval(timer);
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

    container.onmouseover = stop;
    container.onmouseout = play;

    play();

    function productAnimate(offset) {
        let newLeft = parseInt(productList.style.left) + offset;
        productList.style.left = `${newLeft}px`;
        if(newLeft > -1080){
            productList.style.left = `${-8640}px`;
        }
        if(newLeft < -8640){
            productList.style.left = `${-1080}px`;
        }
    }

    function productPlay() {
        timer = setInterval(function() {
            productNext.onclick();
        }, 2000);
    }

    function productStop() {
        clearInterval(timer);
    }

    productNext.onclick = function () {
        productAnimate(-1080);
    }

    productPrev.onclick = function () {
        productAnimate(1080);
    }

    productContainer.onmouseout = productPlay;
    productContainer.onmouseover = productStop;

    productPlay();
}

