import { styled } from '@linaria/react';

export const ElLoaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const ElLoaderContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  width: 100%;
`;

export const ElLoaderSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  /* Circular spinner animation - fixed size */
  &[data-type='circular'] {
    width: var(--components-loader-size-sm);
    height: var(--components-loader-size-sm);
    border-radius: 50%;
    border: var(--components-loader-border-width) solid
      var(--components-loader-color-track);
    border-top-color: var(--components-loader-color-spinner);
    animation: loaderRotate var(--components-loader-animation-duration)
      var(--components-loader-animation-timing) infinite;
  }

  /* Linear loader animation - fixed size */
  &[data-type='linear'] {
    position: relative;
    height: var(--components-loader-border-width);
    width: 100%;
    max-width: 100px;
    border-radius: var(--components-loader-border-width);
    background-color: var(--components-loader-color-track);
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 30%;
      background-color: var(--components-loader-color-spinner);
      border-radius: var(--components-loader-border-width);
      animation: loaderLinear var(--components-loader-animation-duration)
        var(--components-loader-animation-timing) infinite;
    }
  }

  @keyframes loaderRotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes loaderLinear {
    0% {
      left: -30%;
    }
    100% {
      left: 100%;
    }
  }
`;

export const ElLoaderText = styled.div`
  color: var(--components-loader-color-text);
  font-size: var(--components-loader-font-size);
  font-weight: var(--components-loader-font-weight);
  line-height: var(--components-loader-line-height);
  text-align: center;
`;
