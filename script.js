// ===== Smooth Scrolling Navigation =====

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const section = document.querySelector(
            this.getAttribute('href')
        );

        section.scrollIntoView({
            behavior: "smooth"
        });

    });

});




// ===== Scroll Animation =====

const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, 
{
    threshold:0.2
});



sections.forEach(section => {

    observer.observe(section);

});






// ===== Automatic Footer Year =====

const year = new Date().getFullYear();


document.querySelector("footer p").innerHTML =
`© ${year} Samrawit Asmelash | Computer Science Portfolio`;
