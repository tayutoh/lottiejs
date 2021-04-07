import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import Lottie from 'react-web-lottie';
import animationData from './circle.json';


export default function Animation() {
  const animationRef = useRef(null);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Lottie
      lottiRef={animationRef}
      width={300}
      height={300}
      options={defaultOptions}
    />
  );
}

// export default class LottieControl extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {isStopped: false, isPaused: false};
//     // this.animationRef = React.createRef();
//   }

//   /*
//     Update text dynamically
//     to make it work,
//     you need to deselect glyphs option while exporting JSON from After effects
//   */
//   setInputData = (text) => {
//     // Play a particular segment form animation by providing starting and ending frame number
//     // this.animationRef.current.playSegments([[140, 145]], true);

//     let 
//       element,
//       layerIndex = 4, // Layer number from JSON file
//       frameIndex = 0; // frame in a layer

//     // element = this.animationRef.current.renderer.elements[layerIndex];
//     // element.updateDocumentData({ t: text, s: 40 }, frameIndex); // s is font size
//   };


//   render() {
//     const buttonStyle = {
//       display: 'block',
//       margin: '10px auto'
//     };

//     const defaultOptions = {
//       loop: true,
//       autoplay: true, 
//       animationData: animationData,
//       // rendererSettings: {
//       //   preserveAspectRatio: 'xMidYMid slice'
//       // }
//     }

//     return (
//       <div>
//         <Lottie 
//           options={defaultOptions}
//           height={300}
//           width={300}
//           // lottiRef={animationRef}
//         />
//       </div>
//     )
//   }
// }


// ========================================

ReactDOM.render(
  <Animation />,
  document.getElementById('root')
);
