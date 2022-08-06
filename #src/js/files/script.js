document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header__nav');
    const header = document.querySelector('.header');
    const headerScrollValue = 30;

   const toggleMenu = () => {
      nav.classList.toggle('active');
      header.classList.toggle('active');
      document.body.classList.toggle('_lock');
   }

   const headerScroll = () => {
      if(this.scrollY >= headerScrollValue){
         header.classList.add('scroll');
      }else{
         header.classList.remove('scroll');
      }
   }

   burger.addEventListener('click', toggleMenu);
   window.addEventListener('scroll', headerScroll);

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

               if(link.classList.contains('header__link')){
                  header.classList.remove("active");
                  nav.classList.remove("active");
                  burger.classList.remove("active");
                  document.body.classList.remove("_lock");
              }

               e.preventDefault();
            }
      }

      hrefLinks.forEach(link => {
            link.addEventListener('click', onHrefLinkClick);
      });
   }

   // Scroll Reveal
   const sr = ScrollReveal({
      distance: '25px',
      duration: 1000
   });

   sr.reveal(`.showcase__image-box_left, .popular-destinations__data, .plan-trip__data`, {
      origin: 'left'
   });

   sr.reveal('.showcase__image-box_center', {
      origin: 'bottom'
   });

   sr.reveal(`.showcase__image-box_right, .showcase__data, .plan-trip__data-wrapper`, {
      origin: 'right'
   });

   sr.reveal('.popular-destinations__data-wrapper', {
      origin: 'bottom',
      interval: 200
   });

   sr.reveal('.newsletter__container', {
      origin: 'top'
   });

   sr.reveal(`.footer__inner > div, .footer__separator, .footer__copyright`, {
      origin: 'bottom',
      interval: 200
   });

}); // end