const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const menu_sections = document.getElementsByClassName('menu__section');
const laptop_media = window.matchMedia('(min-width: 1025px)');

let cl = true;
media_query();
laptop_media.addListener(media_query);

function media_query() {
    if (!laptop_media.matches) {
        console.log('mobile');
        btn.addEventListener('click', menu_toggle);
        for (section of menu_sections) {
            section.addEventListener('click', menu_toggle);
        }
        menu.style.display = 'none';
    }
    else {
        console.log('laptop');
        btn.removeEventListener('click', menu_toggle);
        for (section of menu_sections) {
            section.removeEventListener('click', menu_toggle);
        }
        menu.style.display = 'flex';
        document.body.style.overflow = 'visible';
    }
}

function menu_toggle() {
    if (cl == true) {
        menu.style.display = 'block';
        document.body.style.overflow = 'hidden';
        cl = false;
    }
    else {
        menu.style.display = 'none';
        document.body.style.overflow = 'auto';
        cl = true;
    }
}
