/*============================toggle icon navbar ====================*/


/*============================scroll section active link===================*/
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top =window.scrollY;
        let offset =sec.offsetTop - 150;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >=offset && top <offset + height ) {
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelectorAll ('Headers nav a [href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*============================Stcky navbar====================*/
    let header =document.querySelectorAll('header');

    header.classList.toggle('sticky', window.scrollY > 100);

};

/*============================scorll reveal====================*/
ScrollReveal({ 
    reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-img',{origin:'top'});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});

ScrollReveal().reveal('.about-content, .heading', {origin: 'top'});

ScrollReveal().reveal('.skills, .heading', {origin: 'top'});


/*============================typedjs====================*/
var typed = new Typed (".auto-type",{
    strings: ["Web Development", "Student","Coding Enjoyer"],
    typespeed: 50,
    backspeed: 50,
    loop: true
})

