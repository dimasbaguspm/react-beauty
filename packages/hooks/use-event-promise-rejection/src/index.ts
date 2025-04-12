import { useCallback, useEffect, useMemo } from "react";

import type { RefObject } from "react";

/**
 * The options for useEventPromiseRejection hook
 */
export interface UseEventPromiseRejectionOptions {
  /**
   * Hide unhandled promise rejection log
   *
   * @default false
   */
  hideUnhandledLog?: boolean;

  /**
   * Hide handled promise rejection log
   *
   * @default false
   */
  hideHandledLog?: boolean;

  /**
   * The callback function to handle unhandled promise rejection
   */
  onUnhandledRejection?: (event: PromiseRejectionEvent) => void;

  /**
   * The callback function to handle handled promise rejection
   */
  onHandledRejection?: (event: PromiseRejectionEvent) => void;
}

/**
 * useEventPromiseRejection
 *
 * Handle promise rejections script that settle in window or a HTMLBodyElement and SVGSVGElement
 *
 * @param node - The node to listen for unhandled promise rejections
 * @param options - The options for the hook.
 * @returns void
 */
export const useEventPromiseRejection = (
  node?: Window | RefObject<HTMLBodyElement | SVGSVGElement>,
  options?: UseEventPromiseRejectionOptions,
) => {
  const {
    onUnhandledRejection,
    hideUnhandledLog = false,
    onHandledRejection,
    hideHandledLog = false,
  } = options ?? {};

  /**
   * Get the parent node of the given node
   */
  const getParentNode = useCallback(
    (
      node: Window | RefObject<HTMLBodyElement | SVGSVGElement> | undefined,
    ): Window | HTMLBodyElement | SVGSVGElement => {
      if (node instanceof Window) {
        return node;
      }

      if (node && "current" in node && node.current) {
        return node.current;
      }

      return document.defaultView || window;
    },
    [],
  );

  /**
   * Handle on unhandled promise rejection
   */
  const handleOnUnhandledRejection = useCallback(
    (event: PromiseRejectionEvent): void => {
      event.preventDefault();

      if (!hideUnhandledLog) {
        console.warn(
          "Unhandled Promise Rejected" +
            (event?.reason ? ", reason: " + event.reason : ""),
        );
      }

      onUnhandledRejection?.(event);
    },
    [onUnhandledRejection],
  );

  /**
   * Handle on handled promise rejection
   */
  const handleOnHandledRejection = useCallback(
    (event: PromiseRejectionEvent): void => {
      event.preventDefault();

      if (!hideHandledLog) {
        console.warn(
          "Handled Promise Rejected" +
            (event?.reason ? ", reason: " + event.reason : ""),
        );
      }

      onHandledRejection?.(event);
    },
    [onHandledRejection],
  );

  const parentNode: Window | HTMLBodyElement | SVGSVGElement = useMemo(
    () => getParentNode(node),
    [node],
  );
  const abortController: AbortController = useMemo(
    () => new AbortController(),
    [],
  );

  /**
   * subscribe to the promise rejection events from the parent node
   */
  useEffect(() => {
    parentNode?.addEventListener(
      "unhandledrejection",
      // @ts-expect-error - deliberately
      handleOnUnhandledRejection,
      {
        signal: abortController.signal,
      },
    );
    parentNode.addEventListener(
      "rejectionhandled",
      // @ts-expect-error - deliberately
      handleOnHandledRejection,
      {
        signal: abortController.signal,
      },
    );

    return () => {
      abortController.abort();
    };
  }, [parentNode]);
};
