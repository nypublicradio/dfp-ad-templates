import CloseButton from '../CloseButton';
import Cookies from 'js-cookie';
import findHighestZIndex from '../../utils/findHighestZIndex';
import styles from './SplashOverlay.scss';
import {h, render, Component} from 'preact';

const ESCAPE_KEY = 27;

class SplashOverlay extends Component {
  state = {
    showSplash: this._shouldShowSplash(),
    imageUrl: this._isDesktop()
      ? window.DFP.imageUrlDesktop
      : window.DFP.imageUrlMobile,
    clickthroughUrl: window.DFP.clickthroughUrl,
  };

  _dismissSplash() {
    this.setState({showSplash: false});
    Cookies.set('hasSeenSplash', 'true', { expires: 1, path: '/' });
    document.removeEventListener('keydown', this._handleKeyDown.bind(this));
  }

  _handleKeyDown() {
    switch( event.keyCode ) {
      case ESCAPE_KEY:
        this._dismissSplash();
        break;
      default:
        break;
    }
  }

  _isDesktop() {
    return window.innerWidth >= 840;
  }

  _shouldShowSplash() {
    if (!Cookies.get('hasSeenSplash')) {
      document.addEventListener('keydown', this._handleKeyDown.bind(this));
      return true;
    }
  }

  render() {
    return this.state.showSplash ? (
      <div
        class={styles.splashOverlay}
        onClick={this._dismissSplash.bind(this)}
        style="z-index: 10000">
        <div class={styles.splashOverlayContainer}>
          <CloseButton
            buttonColor="#000"
            clickAction={this._dismissSplash.bind(this)}
          />
          <a href={this.state.clickthroughUrl} target="_blank">
            <img
              src={this.state.imageUrl}
              class={
                this._isDesktop()
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
