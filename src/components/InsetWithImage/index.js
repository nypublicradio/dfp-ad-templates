import {h, render, Component} from 'preact';
import styles from './InsetWithImage.scss';
import CloseButton from '../CloseButton';
import Cookies from 'js-cookie';

class InsetWithImage extends Component {
  _dismissSplash = () => {
    this.setState({showSplash: false});
    Cookies.set('hasSeenSplash', 'true', {expires: 1, path: '/'});
    document.removeEventListener('keydown', this._handleKeyDown);
  };

  _shouldShowSplash = () => {
    if (!Cookies.get('hasSeenSplash')) {
      document.addEventListener('keydown', this._handleKeyDown);
      return true;
    }
  };

  state = {
    showSplash: this._shouldShowSplash(),
  };

  render() {
    return this.state.showSplash ? (
      <div
        class={[styles.insetContainer, styles.heightConstraints].join(' ')}
        style={`background-color: ${this.props.backgroundColor}`}
        onClick={this._dismissSplash}
        data-cy="inset">
        <CloseButton buttonColor="#000" clickAction={this._dismissSplash} />
        <a
          href={this.props.clickthroughUrl}
          target="_blank"
          data-cy="inset-link">
          <img
            src={this.props.imageUrl}
            class={[styles.img, styles.heightConstraints].join(' ')}
            data-cy="inset-img"
          />
        </a>
      </div>
    ) : null;
  }
}

export default InsetWithImage;
