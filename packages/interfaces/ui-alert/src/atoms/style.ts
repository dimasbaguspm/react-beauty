import { styled } from "@linaria/react";

const intent = `
  &[data-intent="info"] {
    color: var(--components-alert-colors-info);
    &[data-type="colourful"] {
      background-color: var(--components-alert-colors-info-bg);
    }
    &[data-type="outline"] {
      outline-color: var(--components-alert-colors-info);
    }
  }

  &[data-intent="success"] {
    color: var(--components-alert-colors-success);
    &[data-type="colourful"] {
      background-color: var(--components-alert-colors-success-bg);
    }
    &[data-type="outline"] {
      outline-color: var(--components-alert-colors-success);
    }
  }

  &[data-intent="warning"] {
    color: var(--components-alert-colors-warning);
    &[data-type="colourful"] {
      background-color: var(--components-alert-colors-warning-bg);
    }
    &[data-type="outline"] {
      outline-color: var(--components-alert-colors-warning);
    }
  }

  &[data-intent="danger"] {
    color: var(--components-alert-colors-danger);
    &[data-type="colourful"] {
      background-color: var(--components-alert-colors-danger-bg);
    }
    &[data-type="outline"] {
      outline-color: var(--components-alert-colors-danger);
    }
  }
`;

const type = `
  &[data-type="outline"] {
    outline: solid;
    outline-width: 1px;
  }
`;

const description = `
  font-weight: var(--components-alert-font-weight-description);
  font-size: var(--components-alert-font-size);
  line-height: var(--components-alert-line-height);

`;

export const ElAlertIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const ElAlertTitle = styled.h3`
  font-weight: var(--components-alert-font-weight-title);
  font-size: var(--components-alert-font-size);
  line-height: var(--components-alert-line-height);
`;

export const ElAlertDescription = styled.p`
  ${description}
  width: 100%;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ElAlertButton = styled.div`
  // NOTE: flex-grow: 1 is required to make the button position have more longer
  flex-grow: 1;

  display: flex;
  align-items: center;
  justify-content: end;

  // NOTE: ensure the color that inherited from the parent is not override
  color: inherit;

  button {
    display: flex;
    align-items: center;
    background-color: unset;
    border: none;
    border-radius: var(--components-alert-border-radius);
    color: inherit;

    &:hover {
      background-color: var(--components-alert-colors-dismiss-hover);
      cursor: pointer;
    }

    &:active {
      transform: scale(0.85);
    }

    transition: transform 0.2s ease-in-out;
  }
`;

export const ElAlertContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  max-width: 400px;
  padding: var(--components-alert-padding);
  background-color: var(--components-alert-colors-default);
  border-radius: var(--components-alert-border-radius);
  gap: var(--components-alert-gap);

  ${intent}
  ${type}
  ${description}
`;
