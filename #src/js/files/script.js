document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header__nav');
    const header = document.querySelector('.header');

   const toggleMenu = () => {
      nav.classList.toggle('active');
      header.classList.toggle('active');
      document.body.classList.toggle('_lock');
   }

   const headerScroll = () => {
      if(this.scrollY >= 30){
         header.classList.add('scroll');
      }else{
         header.classList.remove('scroll');
      }
   }

   burger.addEventListener('click', toggleMenu);
   window.addEventListener('scroll', headerScroll);

}); // end