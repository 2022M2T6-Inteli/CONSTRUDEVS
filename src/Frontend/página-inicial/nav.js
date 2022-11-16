const openMenu = () => {
    document.getElementsByClassName('.backdrop').className = 'backdrop active';
    document.getElementsByClassName('.aside').className = 'active';

}

const closeMenu = () => {
    document.getElementsByClassName('.backdrop').className = 'backdrop';
    document.getElementsByClassName('.aside').className = '';

}


document.getElementById('menuBtn').onclick = e => {

    e.preventDefault ();
    openMenu();
}

document.querySelector('aside button.close').onclick = e => {
    closeMenu();
}

document.querySelector('backdrop').onclick = e => {
    closeMenu();
}