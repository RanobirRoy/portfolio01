// Navbar Toggle
const navWraper = document.querySelector('.nav-wraper');
const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click', () => {
    navWraper.classList.toggle('nav-active');
})
// Scrolled Navbar
const homePage = document.querySelector('.home-page');
const homeOptions = {
    root: null,
    rootMargin: "-150px"
};
const homeObserver = new IntersectionObserver(function(entries,homeObserver){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            homePage.classList.remove("navbar-active")
        }else{
            homePage.classList.add("navbar-active");
        }
    })
},homeOptions);
homeObserver.observe(homePage);