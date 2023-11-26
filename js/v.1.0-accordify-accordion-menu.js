// Accodify JS
// Dynamic Accordion Menu

/* Make this html structure, dynamically:
<li>
    <button>Balderdash<span>+</span></button>
    <div>
        <p>Plaid, portland truffaut chicharrones. Irony copper mug.</p>
        <p>Gluten-free pabst, Banjo green juice, quinoa waistcoat.</p>
    </div>
</li> 
*/

const accordifyBtns = document.querySelectorAll(".accordify button");

accordifyBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      btn.classList.toggle("btn-hilite");
      const div = this.nextElementSibling;
      div.style.height = div.style.height ? null : div.scrollHeight + "px";
    });
});

// show-hide (toggle) div in same section as clicked panel
// nextElementSibling gets the next element after "this" 
// which is the clicked button that is calling the function
// this next element sibling is the panel div which is hidden 
// until the button is clicked

// Element.nextElementSibling read-only property returns the 
// element immediately following the specified one in its 
// parent's children list

// Element.scrollHeight read-only property is a measurement of 
// the height of an element's content, including content not 
// visible on the page -- this tells us how tall we need to 
// make thediv when it animates from zero-height
// nextElementSibling gets the next element after "this" 
// which is the clicked button that is calling the function
// this next element sibling is the div which is either hidden 
// or showing; function toggles the show-hide

// Element.nextElementSibling read-only property returns the 
// element immediately following the specified one in its 
// parent's children list

// Element.scrollHeight read-only property is a measurement of 
// the height of an element's content, including content not 
// visible on the page -- this tells us how tall we need to 
// make thediv when it animates from zero-height