
function curationPicker(element, targetElem) {
   const posts = document.querySelectorAll(element);

   posts.forEach((elem) => {
      elem.addEventListener('click', (e) => {
         e.preventDefault();
         let child = e.target.className;
         let parent = e.path[3];
         // let parNode = child.parentNode.nodeName;
         console.log(child);
         console.log(parent);
         // console.log(parNode);
         console.log(e)
         parent.removeChild(child);
         targetElem.appendChild(child);
         console.log(e.target.value);
      })
   })
}

export default curationPicker;