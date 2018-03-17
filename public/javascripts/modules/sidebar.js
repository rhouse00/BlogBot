function sideBar(el) {
   const tabs = document.querySelectorAll(el);
   
   tabs.forEach((elem) => {
      elem.addEventListener('click', (e) => {
         e.preventDefault();
         document.querySelector('.active').classList.remove('active');
         elem.classList.add('active');

         document.querySelectorAll('.tabContent')
            .forEach((element) => {
               element.style.display = 'none';
            });

         document.getElementById(elem.dataset.name)
            .style.display = 'block';
      });
   });
};

export default sideBar;
