import { styled } from "@linaria/react";

export const ElEmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--components-empty-state-gap);
  align-items: center;
  justify-content: center;
  padding: var(--components-empty-state-padding-y)
    var(--components-empty-state-padding-x);
`;
export const ElEmptyStateTitle = styled.h1`
  font-size: var(--components-empty-state-font-size-title);
  font-weight: var(--components-empty-state-font-weight-title);
  line-height: var(--components-empty-state-line-height-title);
  color: var(--components-empty-state-colors-default);
  text-align: center;
`;
export const ElEmptyStateDescription = styled.p`
  font-size: var(--components-empty-state-font-size-description);
  line-height: var(--components-empty-state-line-height-description);
  font-weight: var(--components-empty-state-font-weight-description);
  color: var(--components-empty-state-colors-default);
  text-align: center;
`;
export const ElEmptyStateIcon = styled.div`
  position: relative;
  height: 100%;
  text-align: center;

  & > svg[data-is-primary] {
    width: var(--components-empty-state-size-icon-primary);
    height: var(--components-empty-state-size-icon-primary);
    color: var(--components-empty-state-colors-default);
  }

  & > svg[data-is-secondary] {
    position: absolute;
    z-index: 2;
    top: var(--space-2);
    right: var(--space-2);
    color: var(--components-empty-state-colors-icon-secondary-color);
    background-color: var(--components-empty-state-colors-icon-secondary-bg);
    border-radius: var(--components-empty-state-border-radius);
  }
`;
