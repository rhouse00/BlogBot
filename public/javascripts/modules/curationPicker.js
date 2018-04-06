
function curationPicker(element, targetElement, newClass, newText) {
   if(!window.document.URL.includes('curate')) {return};
   
   const el = document.querySelector(element);
   el.addEventListener('click', (e) => {
      e.preventDefault();
      if(e.target.nodeName !== 'BUTTON') {return};
      
      let child = e.target.parentNode.parentNode; // button -> td -> tr
      let parNode = e.target.parentNode.parentNode.parentNode; // button -> td -> tr -> tbody
      e.target.className = newClass;
      e.target.innerHTML = newText;
     
      parNode.removeChild(child);
      document.querySelector(targetElement).appendChild(child);
   });
}

export default curationPicker;
