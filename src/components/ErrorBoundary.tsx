import React from "react";

/** Optional extras your component might accept */
interface ErrorBoundaryProps {
  /** Fallback UI to show when an error occurs (defaults to h1 text) */
  fallback?: React.ReactNode;
  /** Called after React captures an error */
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

/** Internal state for tracking whether we’re in the error state */
interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<ErrorBoundaryProps>,
  ErrorBoundaryState
> {
  /** Initialize state */
  state: ErrorBoundaryState = { hasError: false };

  /** Update state so the next render shows the fallback UI */
  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  /** Side‑effect: report the error somewhere (analytics, logging, etc.) */
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    } else {
      /* Replace with your own logger */
      console.error("Unhandled error:", error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <h1>Something went wrong.</h1>;
    }
    /* Render normally */
    return this.props.children;
  }
}
