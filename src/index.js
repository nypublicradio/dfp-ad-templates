import {h, render, Component} from 'preact';
import SplashOverlay from './components/SplashOverlay';
import DesktopAndMobileSplash from './templates/DesktopAndMobileSplash';
import DesktopSplashMobileInset from './templates/DesktopSplashMobileInset';

class Index extends Component {
  render() {
    switch(window.DFP.templateName) {
      case 'desktop-and-mobile-splash':
        return <DesktopAndMobileSplash />;
        break;
      case 'desktop-splash-mobile-inset':
        return <DesktopSplashMobileInset />;
        break;
      default:
        return <DesktopAndMobileSplash />;
    }
  }
}

render(<Index />, document.querySelector('#dfp_splash_app'));
