let doc = document;

// Selecting all Buttons  containing submenus
let activeButtons = doc.getElementsByClassName('accordion');

// activeButtons is array like Object,
// and we need to make it an Array in order to loop through it
// whith .map() method
let arrayOfButtons = Array.from(activeButtons);

// Adding event listener 'click' to whole document(page)
doc.addEventListener('click', event => {
  //when something clicked, we check if it was button from
  //desirable array
  arrayOfButtons.map(singleButton => {
    // we can determine what element of the Page was clicked
    // using .target property of the object that triggered that event
    // console.log(event.target)
    if (event.target === singleButton) {
      // Adding or removing class to or from  clicked element,
      // and its next sibling element, wich in our case is submenu
      singleButton.classList.toggle('is-open');
      let subMenu = singleButton.nextElementSibling;
      subMenu.classList.toggle('is-open');
    }
  });
});
