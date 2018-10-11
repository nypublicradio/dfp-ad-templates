import {h, render, Component} from 'preact';
import SplashOverlay from '../../components/SplashOverlay';
import InsetWithImage from '../../components/InsetWithImage';

class DesktopSplashMobileInset extends Component {
  state = {
    windowSize: window.innerWidth,
  };

  render() {
    if (this.state.windowSize > 840) {
      return <SplashOverlay />;
    } else {
      return (
        <InsetWithImage
          imageUrl={window.DFP.imageUrlMobile}
          backgroundColor={window.DFP.backgroundColor}
          clickthroughUrl={window.DFP.clickthroughUrl}
        />
      );
    }
  }
}

export default DesktopSplashMobileInset;
