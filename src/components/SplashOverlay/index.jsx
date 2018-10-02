import styles from './SplashOverlay.scss';
import CloseButton from '../CloseButton';
import {h, render, Component} from 'preact';

class SplashOverlay extends Component {
  constructor() {
    super();
    this.state.showSplash = true;
    this.state.imageUrl =
      window.innerWidth >= 800
        ? window.dfp.imageUrlDesktop
        : window.dfp.imageUrlMobile;
    this.state.clickthroughUrl = window.dfp.clickthroughUrl;
  }

  dismissSplash() {
    this.setState({showSplash: false});
  }

  render() {
    return this.state.showSplash ? (
      <div class={styles.splashOverlay} onClick={this.dismissSplash.bind(this)}>
        <a href={this.state.clickthroughUrl} target="_blank">
          <img src={this.state.imageUrl} />
        </a>
      </div>
    ) : null;
  }
}

export default SplashOverlay;
