// pkg imports //
import Reef from 'reefjs';
import easyToggle from "easy-toggle-state";
import 'chota';
// data imports //
import { etsAttributes } from '../data/etsAttr.js';
// component css //
const slctrStrObj  = {
                        nav: {bar: `nav`, lft: `nav-left`, cntr: `nav-center`, rt: `nav-right`,},
                        bttn: `button clear`, // syntax note: to include multiple classes, wrap in `` 
                        tabBar: 'tab-bar',
};
const tglObj = {
                tglClassStr: {
                           activeDM: `${etsAttributes.tgl}='dark'`,
                },
                tglTgt: {
                      tgtBody: `${etsAttributes.tgt}= 'body'`,
                         // syntax note: ID selectors have to be accsessed with #, but not declared this way 
                },
};
// component structure //
export const darkMode = new Reef('#dark-mode-bttn', {
  data: {
      btnTxt: 'theme',
      style: slctrStrObj,
      ets: tglObj,
  },
  template: (props) => {
    return `
                  <!-- dark mode button -->
                  <button class='${props.style.bttn}' 
                    ${props.ets.tglClassStr.activeDM}  
                    ${props.ets.tglTgt.tgtBody} >
                                                ${props.btnTxt}
                  </button>
                  <!-- end dark mode button -->

                  <!-- syntax note: wrap class strings with multiple classes in '' -->
          `;
  },
  attachTo: root,
});

