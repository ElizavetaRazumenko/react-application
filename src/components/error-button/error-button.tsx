import { Component, ReactNode } from 'react';
import s from './error-button.module.css';

interface StateType {
  hasError: boolean;
}
export default class ErrorButton extends Component<{}, StateType> {
  state: StateType = {
    hasError: false,
  };
  render(): ReactNode {
    if (this.state.hasError) {
      throw Error('Application error');
    }
    return (
      <button className={s.button_error} onClick={this.handleCreateError}>
        Create an Error
      </button>
    );
  }

  private handleCreateError = () => {
    this.setState({
      hasError: true,
    });
  };
}
