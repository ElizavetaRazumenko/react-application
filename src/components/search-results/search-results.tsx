import { Component, ReactNode } from 'react';
import { State } from '../../types/types';
import s from './search-results.module.css';

interface PropsType {
  currentState: State;
}
export default class SearchResults extends Component<PropsType, {}> {
  render(): ReactNode {
    return (
      <div className={s.results_container}>
        {this.props.currentState.map((item, index) => (
          <div key={index} className={s.card}>
            <p className={s.title}>{item.title}</p>
            <p className={s.description}>{item.description}</p>
          </div>
        ))}
      </div>
    );
  }
}
