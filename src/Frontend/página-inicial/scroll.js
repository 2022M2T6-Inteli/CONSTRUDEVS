document.lastScrollPosition = 0;

document.addEventListener(type: 'scroll', listener:() => {

    const direction = window.pageYoffset - document.lastScrollPosition > 0 ? 'down' : 'up';

    

    document.lastScrollPosition = window.pageYoffset;
})