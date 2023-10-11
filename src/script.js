const island = document.getElementById('island');
island.addEventListener('click', () => {
    // console.log(island.classList)
    const isMobile = island.classList[0] == 'mobile'
    if(isMobile) {
        let nav = document.getElementById('mobile_nav');
        if (nav.classList[nav.classList.length-1] == 'flex-row') {
            nav.classList.add('flex-col');
            nav.classList.remove('flex-row');
        } else {
            nav.classList.remove('flex-col');
            nav.classList.add('flex-row');
        }
    }
    if(island.classList[island.classList.length-1] == 'w-20') {
        island.classList.remove('w-20');
        island.classList.add(isMobile ? 'w-[22rem]' : 'w-96');
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
        island.classList.remove(isMobile ? 'w-[22rem]' : 'w-96');
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