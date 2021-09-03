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
                        themeSwitch: 'dark-mode-bttn',
}

// component structure //
export const navbar = new Reef('#navbar', {
  data: {
      header: 'Reef + Chota + Emotion + ETS',
      btnTxt: 'theme',
      style: slctrStrObj,
  },
  template: (props) => {
    return `
              <!-- NAVBAR -->
              <nav class=${props.style.nav.bar}>

                <div class=${props.style.nav.lft}>
                  <!-- tab-bar -->
                  <div id=${props.style.tabBar}></div>
                  <!-- tab-bar -->
                </div>

                <div class=${props.style.nav.rt} >
                  <!-- dark mode button -->
                  <div id=${props.style.themeSwitch}></div>
                  <!-- end dark mode button -->
                </div>

              </nav>
              <!-- NAVBAR -->

              <!-- syntax note: wrap class strings with multiple classes in '' -->
          `;
  },
  attachTo: root,
});

