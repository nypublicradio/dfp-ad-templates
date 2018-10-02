import styles from './CloseButton.scss';
import {h, render, Component} from 'preact';

class CloseButton extends Component {
  render() {
    return (
      <svg
        height="25"
        width="25"
        viewBox="0 0 115 115"
        fill="none"
        class={styles.closeButton}
        onClick={this.props.clickAction}
        xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d)">
          <path
            d="M72.9 57.5l31.2-31.2c1.2-1.2 1.2-3.2 0-4.4l-11-11c-1.2-1.2-3.2-1.2-4.4 0L57.5 42.1 26.3 10.9c-1.2-1.2-3.2-1.2-4.4 0l-11 11c-1.2 1.2-1.2 3.2 0 4.4l31.2 31.2-31.2 31.2c-1.2 1.2-1.2 3.2 0 4.4l11 11c1.2 1.2 3.2 1.2 4.4 0l31.2-31.2 31.2 31.2c1.2 1.2 3.2 1.2 4.4 0l11-11c1.2-1.2 1.2-3.2 0-4.4L72.9 57.5z"
            fill={this.props.buttonColor || '#DE1E3D'}
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="115"
            height="115"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  }
}

export default CloseButton;
