import * as React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Input from '../Atoms/Input/Input';
import style from './styles.module.scss';

const HeaderLinks: IMenuValue[] = [
  { id: 1, title: 'Main', path: '/' },
  { id: 2, title: 'About', path: '/about' },
  { id: 3, title: 'Form', path: '/form' },
];
interface IMenuValue {
  id: number;
  title: string;
  path: string;
}
interface IProps {
  searchValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
class Header extends Component<IProps> {
  render() {
    return (
      <div className={style.header}>
        <div className={style.header__container}>
          <div className={style.container__links}>
            {HeaderLinks.map((item: IMenuValue) => (
              <NavLink to={item.path} key={item.id}>
                <div>{item.title}</div>
              </NavLink>
            ))}
          </div>
          <div className={style.container__search_bar}>
            <Input
              placeholder="Search..."
              searchValue={this.props.searchValue}
              handleChange={this.props.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
