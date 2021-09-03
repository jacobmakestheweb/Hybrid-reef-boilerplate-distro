import easyToggle from "easy-toggle-state";

const handler = () => {
  easyToggle();
	 document.removeEventListener("DOMContentLoaded", handler);
};
document.addEventListener("DOMContentLoaded", handler);

// global ETS strings object //
export var etsAttributes = {
   activeTgl : `data-toggle-class="" `,  // data-attribute sets 'is-active' class on button and target on click
   bttnLink : `href="#" role="button" `,  // set only if using link as button trigger
   tgl : `data-toggle-class-on-target `,  // data-attribute for class toggle switch
   tgt : `data-toggle-target `,  // data-attribute for class toggle target
   radioGrp : `data-toggle-radio-group `,  // data-attribute associates group of elements (tabs/ radio bttns)
   onTgl : `data-toggle-class-on-trigger `,  // data-attribute associates classes to toggle on the trigger only
   kBCtl : `data-toggle-arrows `,  //  set to use arrow keys on toggle group
   defaultAct : `data-toggle-is-active `,  // data-attribute sets group member as active default 
};

