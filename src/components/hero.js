// pkg imports //
import Reef from 'reefjs';
import 'chota';


// component css //
const slctrStrObj  = {
                        full: `col is-full-width text-center`,
                        title: 'pg-title', // syntax note: this is an ID selector, but not declared with #
}


// component structure //
export const heroHeader = new Reef('#hero', {
  data: {
      header: 'Reef + Chota + Emotion + ETS',
      style: slctrStrObj,
  },
  template: (props) => {
    return `
            <!-- page header -->

            <div class='${props.style.full}'>
              <h1 id=${props.style.title} >
                                           ${props.header}
              </h1>
            </div>

            <!-- end page header -->
          `;
  },
  attachTo: root,
});

