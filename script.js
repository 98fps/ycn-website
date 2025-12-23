document.addEventListener('DOMContentLoaded', function() {
    // 1. Falling Potatoes
    const rainContainer = document.getElementById('potato-rain');
    const potatoImg = new Image();
    potatoImg.src = 'https://i.ibb.co/KcVfYFJY/1000033695-removebg-preview.png';

    function createPotato() {
        const potato = document.createElement('div');
        potato.className = 'potato';
        potato.style.left = Math.random() * 100 + 'vw';
        potato.style.top = Math.random() * -100 + 'px';
        potato.style.animationDuration = 5 + Math.random() * 5 + 's';
        rainContainer.appendChild(potato);

        potato.addEventListener('animationend', function() {
            potato.remove();
            createPotato();
        });
    }

    // Start with 15 potatoes
    for (let i = 0; i < 15; i++) {
        createPotato();
    }

    // 2. Buttons
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const questionText = document.getElementById('questionText');

    yesBtn.addEventListener('click', function() {
        questionText.textContent = "Yes you should!";
        questionText.classList.add('yes-response');
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';

        setTimeout(function() {
            questionText.textContent = "Do you like YCN?";
            questionText.classList.remove('yes-response');
            yesBtn.style.display = 'block';
            noBtn.style.display = 'block';
        }, 2000);
    });

    noBtn.addEventListener('mouseover', function() {
        noBtn.style.left = Math.random() * 60 + 20 + '%';
        noBtn.style.top = Math.random() * 60 + 20 + '%';
    });

    noBtn.addEventListener('click', function(e) {
        e.preventDefault();
        noBtn.style.left = Math.random() * 60 + 20 + '%';
        noBtn.style.top = Math.random() * 60 + 20 + '%';
    });

    // 3. Potato Clicker
    const clickerPotato = document.getElementById('clickable-potato');
    const counter = document.getElementById('click-counter');
    let clicks = 0;

    clickerPotato.addEventListener('click', function() {
        clicks++;
        counter.textContent = clicks;
        this.style.transform = 'scale(1.1)';
        setTimeout(() => this.style.transform = 'scale(1)', 100);
    });
});