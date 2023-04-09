// chenge in nave bar-------------------------------
window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


// show hide faq answer
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        //change icon
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'fa-light fa-plus') {
            icon.className = 'fa-solid fa-minus fa-beat fa-sm';
        }
        else{
            icon.className = 'fa-light fa-plus';
        }
       
    })
})



// ---------------nav menu oppen---------------
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#nav_open");
const closeBtn = document.querySelector("#nav_close");

menuBtn.addEventListener('click',() => {
   menu.style.display = "flex";
   closeBtn.style.display = "inline-block";
   menuBtn.style.display = "none"
})

//----------------close menu=--------------


closeBtn.addEventListener('click', () =>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block"
})

// for loading animation-------------------------------
