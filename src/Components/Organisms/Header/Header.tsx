import * as React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Input from '../../Atoms/Input/Input';
import style from './styles.module.scss';

const headerLinks: IMenuValue[] = [
  { id: 1, title: 'Main', path: '/', dataTestid: 'main-link' },
  { id: 2, title: 'About', path: '/about', dataTestid: 'about-link' },
  { id: 3, title: 'Form', path: '/form', dataTestid: 'form-link' },
];
interface IMenuValue {
  id: number;
  title: string;
  path: string;
  dataTestid: string;
}
interface IProps {
  searchValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
class Header extends Component<IProps, unknown> {
  render() {
    return (
      <div className={style.header}>
        <div className={style.header__container}>
          <div className={style.container__links}>
            {/* {headerLinks.map((item: IMenuValue) => (
              <NavLink to={item.path} key={item.id} data-testid={item.dataTestid}>
                <div>{item.title}</div>
              </NavLink>
            ))} */}
          </div>
          <div className={style.container__search_bar}>
            <Input
              placeholder="Search..."
              value={this.props.searchValue}
              handleChange={this.props.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
