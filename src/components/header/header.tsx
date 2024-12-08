import {User} from '../../mocks/users.ts';
import Logo from '../logo/logo.tsx';
import {AppRoute} from '../../const.ts';
import {Link} from 'react-router-dom';
import {offersMock} from '../../mocks/offers_mock.ts';

export type HeaderProps = {
  user: User;
}
export default function Header({ user }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">{user.username}</span>
                  <span className="header__favorite-count">{offersMock.filter((offer) => offer.isFavorite).length}
                  </span>
                </Link>
              </li>
              <li className="header__nav-item">
                <Link className="header__nav-link" to={AppRoute.Login}>
                  <span className="header__signout">Sign out</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
