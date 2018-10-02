import {h, render, Component} from 'preact';
import SplashOverlay from './components/SplashOverlay/index.jsx';

class Index extends Component {
  render() {
    return <SplashOverlay />;
  }
}

render(<Index />, document.querySelector('#dfp_splash_app'));
