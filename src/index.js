import {h, render, Component} from 'preact';
import SplashPage from './components/SplashOverlay/index.jsx';

class Index extends Component {
  render() {
    return <SplashPage />;
  }
}

render(<Index />, document.body);
