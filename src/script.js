window.addEventListener('DOMContentLoaded', () => {
    // Check the device orientation when the page loads
    checkOrientation();

    // Listen for orientation change events
    window.addEventListener('orientationchange', checkOrientation);
    window.addEventListener('resize', checkOrientation);
});

function checkOrientation() {
    const isLandscape = window.matchMedia("(orientation: landscape)").matches;
    var body = document.getElementById('body_mobile');
    if (isLandscape && isMobile()) {
        alert("Please switch to portrait mode for the best experience.");
        body.classList.add('hidden');
    } else {
        if (body.classList.contains('hidden')) {
            body.classList.remove('hidden');
        }
    }
}

function isMobile() {
    return /Mobi/i.test(navigator.userAgent);
}

const island = document.getElementById('island');
island.addEventListener('click', () => {
    if(island.classList[island.classList.length-1] == 'w-20') {
        island.classList.remove('w-20');
        island.classList.add('w-96');
        var h1Child = document.getElementById('islandH1');
        if (h1Child) {
            h1Child.remove();
        }
        let names = ['►►►', 'Stake', 'About', 'Contact'];
        setTimeout(() => {
            for (let i = 0; i < names.length; i++) {
                var a = document.createElement('a');
                var h1 = document.createElement('h1');
                h1.setAttribute('id', 'islandH1_'+i);
                h1.setAttribute('class', 'text-xl text-center text-white m-4');
                h1.innerHTML = names[i];
                if (i!=0) a.setAttribute('href', '#'+names[i].toLowerCase());
                a.appendChild(h1);
                island.appendChild(a);
            }
        }, 150)
    } else {
        island.classList.remove('w-96');
        island.classList.add('w-20');
        var h1Child_0 = document.getElementById('islandH1_0');
        var h1Child_1 = document.getElementById('islandH1_1');
        var h1Child_2 = document.getElementById('islandH1_2');
        var h1Child_3 = document.getElementById('islandH1_3');
        if (h1Child_0 && h1Child_1 && h1Child_2) {
            h1Child_0.remove();
            h1Child_1.remove();
            h1Child_2.remove();
            h1Child_3.remove();
        }
        var h1 = document.createElement('h1');
        h1.setAttribute('id', 'islandH1');
        h1.setAttribute('class', 'text-2xl text-center text-white');
        h1.innerHTML = 'Menu';
        island.appendChild(h1);
    }
})

const island_mobile = document.getElementById('island_mobile');
island_mobile.addEventListener('click', () => {
    var nav = document.getElementById('mobile_nav');
    if(island_mobile.classList[island_mobile.classList.length-1] == 'w-20') {
        island_mobile.classList.add('mt-2');
        island_mobile.classList.remove('w-20');
        island_mobile.classList.add('w-[22rem]');
        var h1Child = document.getElementById('islandH1_mobile');
        if (h1Child) {
            h1Child.remove();
        }
        nav.classList.remove('flex-row');
        nav.classList.add('flex-col');
        let names = ['►►►', 'Stake', 'About', 'Contact'];
        setTimeout(() => {
            for (let i = 0; i < names.length; i++) {
                var a = document.createElement('a');
                var h1 = document.createElement('h1');
                h1.setAttribute('id', 'islandH1_'+i+'_mobile');
                h1.setAttribute('class', 'text-xl text-center text-white m-4');
                h1.innerHTML = names[i];
                if (i!=0) a.setAttribute('href', '#'+names[i].toLowerCase());
                a.appendChild(h1);
                island_mobile.appendChild(a);
            }
        }, 150)
    } else {
        island_mobile.classList.remove('mt-2');
        island_mobile.classList.remove('w-[22rem]');
        island_mobile.classList.add('w-20');
        var h1Child_0 = document.getElementById('islandH1_0_mobile');
        var h1Child_1 = document.getElementById('islandH1_1_mobile');
        var h1Child_2 = document.getElementById('islandH1_2_mobile');
        var h1Child_3 = document.getElementById('islandH1_3_mobile');
        if (h1Child_0 && h1Child_1 && h1Child_2) {
            h1Child_0.remove();
            h1Child_1.remove();
            h1Child_2.remove();
            h1Child_3.remove();
        }
        var h1 = document.createElement('h1');
        h1.setAttribute('id', 'islandH1_mobile');
        h1.setAttribute('class', 'text-xl text-white');
        h1.innerHTML = 'Menu';
        island_mobile.appendChild(h1);
        setTimeout(() => {
            nav.classList.remove('flex-col');
            nav.classList.add('flex-row');
        }, 160)
    }
})
