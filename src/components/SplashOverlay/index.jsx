import styles from './SplashOverlay.scss';
import findHighestZIndex from '../../utils/findHighestZIndex';
import CloseButton from '../CloseButton';
import {h, render, Component} from 'preact';

class SplashOverlay extends Component {
  state = {
    showSplash: true,
    imageUrl: this.isDesktop()
      ? window.DFP.imageUrlDesktop
      : window.DFP.imageUrlMobile,
    clickthroughUrl: window.DFP.clickthroughUrl,
  };

  isDesktop() {
    return window.innerWidth >= 840;
  }

  dismissSplash() {
    this.setState({showSplash: false});
    document.removeEventListener('keydown', this._handleKeyDown.bind(this));
  }

  isDesktop() {
    return window.innerWidth >= 840;
  }

  render() {
    return this.state.showSplash ? (
      <div
        class={styles.splashOverlay}
        onClick={this.dismissSplash.bind(this)}
        style={`z-index: ${findHighestZIndex(document.querySelector('body'))}`}>
        <div style="position: relative;">
          <CloseButton
            buttonColor="#000"
            clickAction={this.dismissSplash.bind(this)}
          />
          <a href={this.state.clickthroughUrl} target="_blank">
            <img
              src={this.state.imageUrl}
              class={
                this.isDesktop()
                  ? styles.splashImgDesktop
                  : styles.splashImgMobile
              }
            />
          </a>
        </div>
      </div>
    ) : null;
  }
}

export default SplashOverlay;
