// pkg imports //
import Reef from 'reefjs';
import { injectGlobal } from '@emotion/css';
import easyToggle from "easy-toggle-state";
import 'chota';
// component imports //
import { heroHeader } from './hero.js';
import { darkMode } from './darkmode-button.js';
import { navbar } from './navbar.js';
import { tabBar, tabContent  } from './tabs.js';
// global css // 
injectGlobal` 
  :root {
    --bg-color: #ffffff;
    --bg-secondary-color: #f3f3f6;
    --color-primary: #14854F;
    --color-lightGrey: #d2d6dd;
    --color-grey: #747681;
    --color-darkGrey: #3f4144;
    --color-error: #d43939;
    --color-success: #28bd14;
    --grid-maxWidth: 120rem;
    --grid-gutter: 0rem;
    --font-size: 1.6rem;
    --font-color: #333333;
    --font-family-sans: sans-serif;
    --font-family-mono: monaco, "Consolas", "Lucida Console", monospace;
  }

  body.dark {
      --bg-color: #000;
      --bg-secondary-color: #131316;
      --font-color: #f5f5f5;
      --color-grey: #ccc;
      --color-darkGrey: #777;
    }
`
const slctrStrObj = {
                    mainWindow: 'is-fullscreen is-full-width',
                    nB: 'navbar',
                    tC: 'tab-content',
                    pgHead: 'hero',
}

// app root //
let root = new Reef('#root', {
  data: {
      slctrStr: slctrStrObj,
  },
  template: (props) => {
    return `
            <div ${props.slctrStr.mainWindow}>
             <div id =${props.slctrStr.pgHead}></div>
             <div id =${props.slctrStr.nB}></div>
             <div id =${props.slctrStr.tC}></div>
            </div>
           `;
  }
});

// render components
root.render();
heroHeader.render();
navbar.render();
darkMode.render();
tabBar.render();
tabContent.render();


Reef.debug(true);

