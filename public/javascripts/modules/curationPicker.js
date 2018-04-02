
function curationPicker(element, targetElem, newClassName) {
   // const posts = document.querySelectorAll(element);
   const el = document.querySelector(element);
   console.log(el);
   el.addEventListener('click', (e) => {
      e.preventDefault();
      let child = e.target.parentNode.parentNode;
      console.log(child);
      let parNode = e.target.parentNode.parentNode.parentNode;
      console.log(parNode);
      e.target.className = newClassName;
      parNode.removeChild(child);
      document.querySelector(targetElem).appendChild(child);
   })

   
   // el.addEventListener('click', (e) => {
   //    console.log(e);
   // })

}

export default curationPicker;