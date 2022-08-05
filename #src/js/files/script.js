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

}); // end