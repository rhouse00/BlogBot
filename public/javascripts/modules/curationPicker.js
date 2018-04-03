
function curationPicker(element, targetElement, newClass, value) {
   const el = document.querySelector(element);

   el.addEventListener('click', (e) => {
      e.preventDefault();
      if(e.target.nodeName !== 'BUTTON') {return};
      let child = e.target.parentNode.parentNode; // button -> td -> tr
      let parNode = e.target.parentNode.parentNode.parentNode; // button -> td -> tr -> tbody
      e.target.className = newClass;
      e.target.innerHTML = value;
     
      parNode.removeChild(child);
      document.querySelector(targetElement).appendChild(child);
   });
}

export default curationPicker;
