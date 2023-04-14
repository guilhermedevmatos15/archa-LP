const addActiveAndClose = (element, buttonsActive, buttonsClose, classCss) => {
   const $element = element;
   const $buttonsActive = Array.from(buttonsActive);
   const $buttonsClose = Array.from(buttonsClose);
   const $classCss = classCss;

   $buttonsActive.forEach((button) => {
      button.addEventListener('click', (e) => {
         $element.classList.add($classCss);
      });
   });
   $buttonsClose.forEach((button) => {
      button.addEventListener('click', (e) => {
         $element.classList.remove($classCss);
      });
   });
};

const clickResultClose = (elementsClick, elementClose, classCss) => {
   const $elementsClick = Array.from(elementsClick);
   const $elementClose = elementClose;
   const $classCss = classCss;

   $elementsClick.forEach((element) => {
      element.addEventListener('click', () => {
         $elementClose.classList.remove($classCss);
      });
   });
};

const uptadeElementYear = (elements) =>
   Array.from(elements).forEach((element) => {
      element.innerHTML = new Date().getFullYear();
   });

const aboutsInteractive = (element, classCss) => {
   const $element = element;
   const $classCss = classCss;

   $element.addEventListener('click', (e) => {
      if (e.currentTarget === $element) {
         $element.classList.toggle($classCss);
      }
   });

   // add event for childrens
   $element.querySelectorAll('*').forEach(child => {
      child.addEventListener('click', (e) => {
         if (e.currentTarget === $element) {
            $element.classList.toggle($classCss);
         }
      });
   });
}

addActiveAndClose(
   document.querySelector('.menu'),
   document.querySelectorAll('header i.fa-bars'),
   document.querySelectorAll('.menu i.fa-xmark'),
   'active'
);

uptadeElementYear(document.querySelectorAll('span.year'));

clickResultClose(
   document.querySelectorAll('.menu nav li, .menu nav li a'),
   document.querySelector('.menu'),
   'active'
);

aboutsInteractive(
   document.querySelector('.about[data-order="1"]'),
   'active'
);
aboutsInteractive(
   document.querySelector('.about[data-order="2"]'),
   'active'
);
aboutsInteractive(
   document.querySelector('.about[data-order="3"]'),
   'active'
);