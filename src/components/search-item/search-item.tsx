import { Component, ReactNode } from 'react';
import s from './search-item.module.css';

export default class SearchItem extends Component {
  render(): ReactNode {
    return <div className={s.div}>Result</div>;
  }
}
