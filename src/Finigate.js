window.onload = function () {
    let posterContainer = document.getElementById('poster-container');
    let posterList = document.getElementById('poster-list');
    let posterButtons = document.getElementById('poster-buttons').getElementsByTagName('span');
    let posterPrev = document.getElementById('poster-prev');
    let posterNext = document.getElementById('poster-next');
    let index = 1;
    let productList = document.getElementById('product-list');
    let productPrev = document.getElementById('product-prev');
    let productNext = document.getElementById('product-next');
    let partnersList = document.getElementById('partners-list');
    let partnersPrev = document.getElementById('partners-prev');
    let partnersNext = document.getElementById('partners-next');
    
    function showButton() {
        for (let i = 0; i < posterButtons.length; i++){
            if (posterButtons[i].className === 'on'){
                posterButtons[i].className = '';
                break;
            }
        }
        posterButtons[index - 1].className = 'on';
    }

    function animate(offset, list, number){
        let newLeft = parseInt(list.style.left) + offset;
        list.style.left = `${newLeft}px`;
        if(offset > 0) {
            offset = offset - 2 * offset;
        }
        if(newLeft > offset && offset < 0) {
            list.style.left = `${number * offset}px`;
        }
        if(newLeft < number * offset && offset < 0) {
            list.style.left = `${offset}px`;    
        }
    }


    //poster animation
    posterNext.onclick = function () {
        if (index === 5){
            index = 1;
        }else{
            index += 1;
        }
        
        showButton();
        animate(-1150, posterList, 5);
    }

    posterPrev.onclick = function () {
        if (index === 1){
            index = 5;
        }else{
            index -= 1;
        }
        
        showButton();
        animate(1150, posterList, 5);
    }

    for(let i=0; i < posterButtons.length; i++) {
        posterButtons[i].onclick = function () {
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

    function play(next) {
        timer = setInterval(function() {
            next.onclick();
        }, 3000);
    }

    function stop() {
        clearInterval(timer);
    }

    posterContainer.onmouseover = stop;
    posterContainer.onmouseout = play;

    play(posterNext);


    //product animation
    productNext.onclick = function () {
        animate(-1080, productList, 8);
    }

    productPrev.onclick = function () {
        animate(1080, productList, 8);
    }

    productList.onmouseout = play;
    productList.onmouseover = stop;

    play(productNext);


    //partners animation
    partnersNext.onclick = function () {
        animate(-1070, partnersList, 12);
    }

    partnersPrev.onclick = function() {
        animate(1070, partnersList, 12);
    }

    partnersList.onmouseout = play;
    partnersList.onmouseover = stop;

    play(partnersNext);
}

