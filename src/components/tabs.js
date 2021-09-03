// pkg imports //
import Reef from 'reefjs';
import { css, cx } from '@emotion/css';
import easyToggle from "easy-toggle-state";
import 'chota';
// data imports //
import { etsAttributes } from '../data/etsAttr.js';
// componenent imports //
//
// component css //
const hiddenContent = css`
                          display: none;
                          z-index: 1;
                         `;
const displayedContent = css`display: block;`;

const activeTabHead = css`color: var(--color-primary)!important;`;

const slctrStrObj  = {
                        full: `col is-full-width text-center`,
                        tabs: {bar: `tabs`, t1:`tab-one`, t2: `tab-two`, t3: 'tab-three',},
                        activeTab: `${cx(activeTabHead)}`,
                        hidden: `${cx(hiddenContent)}`,
                        revealed: `${cx(displayedContent)}`,
};

const tglObj = {
                tglClassStr: {
                           actTab:`${etsAttributes.onTgl}='${slctrStrObj.activeTab}'`,
                           showTab: `${etsAttributes.tgl}='${slctrStrObj.revealed}'`,
                },
                tglTgt: {
                      tabGrp: {
                            uno: `${etsAttributes.tgt}='#${slctrStrObj.tabs.t1}'`,
                            dos: `${etsAttributes.tgt}='#${slctrStrObj.tabs.t2}'`,
                            tres: `${etsAttributes.tgt}='#${slctrStrObj.tabs.t3}'`,
                      },

                         // syntax note: ID selectors have to be accsessed with #, but not declared this way 
                },
                tglGrp: {
                       tabHeads: `${etsAttributes.radioGrp}='tabHeads'`,
                },
};

// tab bar component structure //
export const tabBar = new Reef('#tab-bar', {
  data: {
      tabTtl: {uno: 'Packages', dos: 'About / Usage', tres: 'Who Should Drive',},
      style: slctrStrObj,
      ets: tglObj,
  },
  template: (props) => {
    return `
                    <!-- tab bar -->

                    <div class=${props.style.tabs.bar}>
                      <a ${etsAttributes.bttnLink}
                         ${etsAttributes.activeTgl} 
                         ${props.ets.tglClassStr.actTab}
                         ${props.ets.tglClassStr.showTab} 
                         ${props.ets.tglTgt.tabGrp.uno}
                         ${etsAttributes.kBCtl}
                         ${props.ets.tglGrp.tabHeads} 
                         ${etsAttributes.defaultAct} >
                                              ${props.tabTtl.uno} 
                      </a>
                      <a ${etsAttributes.bttnLink}
                         ${etsAttributes.activeTgl} 
                         ${props.ets.tglClassStr.actTab}
                         ${props.ets.tglClassStr.showTab} 
                         ${props.ets.tglTgt.tabGrp.dos}
                         ${etsAttributes.kBCtl}
                         ${props.ets.tglGrp.tabHeads} >
                                              ${props.tabTtl.dos} 
                      </a>
                      <a ${etsAttributes.bttnLink}
                         ${etsAttributes.activeTgl} 
                         ${props.ets.tglClassStr.actTab}
                         ${props.ets.tglClassStr.showTab} 
                         ${props.ets.tglTgt.tabGrp.tres}
                         ${etsAttributes.kBCtl}
                         ${props.ets.tglGrp.tabHeads} >
                                              ${props.tabTtl.tres} 
                      </a>
                    </div>

                    <!-- end tab bar -->
          `;
  },
  attachTo: root,
});

// tabbed content component //
 export const tabContent = new Reef('#tab-content', {
  data: {
      style: slctrStrObj,
      ets: tglObj,
  },
  template: (props) => {
    return `
              <!-- tab content -->
              <p class='${props.style.full} ${props.style.hidden}' 
                id='${props.style.tabs.t1}' >
                            mapped cards component goes here
              </p>

              <p class='${props.style.full} ${props.style.hidden}' 
                id='${props.style.tabs.t2}' >
                            split content grid component goes here 
              </p>

              <p class='${props.style.full} ${props.style.hidden}' 
                id='${props.style.tabs.t3}' >
                           who Should Drive UI displayed here to demonstrate state based interface
              </p>
              <!-- end tab content -->
            `;
  },
  attachTo: root,
});

