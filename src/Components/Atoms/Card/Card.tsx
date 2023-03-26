/* eslint-disable jsx-a11y/aria-role */
import { Component } from 'react';
import style from './styles.module.scss';

interface ICardItem {
  title: string;
  subtitle: string;
  src: string;
}

class Card extends Component<ICardItem, unknown> {
  render() {
    return (
      <div className={style.card} data-testid="card">
        <div className={style.card__image}>
          <img src={this.props.src} alt={this.props.title} />
        </div>
        <div className={style.card__title}>{this.props.title}</div>
        <div className={style.card__subtitle}>{this.props.subtitle}</div>
      </div>
    );
  }
}
export default Card;
