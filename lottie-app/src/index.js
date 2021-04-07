import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import Lottie from 'lottie-web';
import animationData from './circle.json';


export default class LottieControl extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {isStopped: false, isPaused: false};
    this.animationRef = React.createRef();
  }

  componentDidMount(){
    this.animation = Lottie.loadAnimation({
      container: this.animationRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }

  componentWillUnmount(){
    // release resources
    this.animation.destroy();
  }


  render() {
    return <div ref={this.animationRef} style={{width:"400px", height:"400px"}} />;
  }
}

// ========================================

ReactDOM.render(
  <LottieControl />,
  document.getElementById('root')
);
