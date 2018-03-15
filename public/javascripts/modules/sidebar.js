function sideBar(elem) {
   const tabs = document.querySelectorAll(elem);
   tabs.forEach((el) => {
      el.addEventListener('click', (e) => {
         e.preventDefault();
         const active = document.querySelector('.active');
         active.classList.remove('active');
         el.classList.add('active');
      });
   });
};

export default sideBar;
