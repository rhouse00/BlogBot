
function curationPicker(element, targetElem) {
   const posts = document.querySelectorAll(element);

   posts.forEach((elem) => {
      elem.addEventListener('click', (e) => {
         e.preventDefault();
         let child = e.target.parentNode.parentNode;
         // let parent = e.path[3];
         let parNode = e.target.parentNode.parentNode.parentNode;
         console.log(child);
         // console.log(parent);
         console.log(parNode);
         // console.log(targetElem);
         
         parNode.removeChild(child);
         document.querySelector(targetElem).appendChild(child);
         console.log(e.target.value);
      })
   })
}

export default curationPicker;