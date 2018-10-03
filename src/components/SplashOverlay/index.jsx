import styles from './SplashOverlay.scss';
import findHighestZIndex from '../../utils/findHighestZIndex';
import CloseButton from '../CloseButton';
import {h, render, Component} from 'preact';

const ESCAPE_KEY = 27;

class SplashOverlay extends Component {
  state = {
    showSplash: true,
    imageUrl: this.isDesktop()
      ? window.DFP.imageUrlDesktop
      : window.DFP.imageUrlMobile,
    clickthroughUrl: window.DFP.clickthroughUrl,
  };

  _handleKeyDown() {
    switch( event.keyCode ) {
      case ESCAPE_KEY:
        this.dismissSplash();
        break;
      default:
        break;
    }
  }

  componentWillMount() {
    document.addEventListener('keydown', this._handleKeyDown.bind(this));
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
