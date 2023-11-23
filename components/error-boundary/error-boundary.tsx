import React, { Component, ErrorInfo, ReactNode } from 'react';
import styles from './error-coundary.module.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    this.setState({ hasError: true });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className={styles.container}>
          <h1 className={styles.message}>
            Congratulations! You caused an error
          </h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
