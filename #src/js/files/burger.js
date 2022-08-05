const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('[data-menu]');
burger.addEventListener("click", () =>{
    headerMenu.classList.toggle("_active");
    burger.classList.toggle("_active");
    document.body.classList.toggle("_lock");
});
if(link.classList.contains('header__link')){
    header.classList.remove("active");
    nav.classList.remove("active");
    burger.classList.remove("active");
    document.body.classList.remove("_lock");
}
// smooth scroll
const hrefLinks = document.querySelectorAll('[data-href]');
if(hrefLinks.length > 0){
      function onHrefLinkClick(e){
         const link = e.target;
         if(link.dataset.href && document.querySelector(link.dataset.href)){
            const hrefBlock = document.querySelector(link.dataset.href);
            const topValue = hrefBlock.getBoundingClientRect().top + scrollY - header.offsetHeight;

            window.scrollTo({
               top: topValue,
               behavior: 'smooth'
            });

            e.preventDefault();
         }
     }

     hrefLinks.forEach(link => {
         link.addEventListener('click', onHrefLinkClick);
     });
}