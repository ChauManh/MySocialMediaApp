import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Button from '../../../Button';
import images from '../../../../../src/assets/images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <Link to="/">
            <img src={images.logo} alt="Logo" />
          </Link>
        </div>

        <div className={cx('search-bar')}>
          <button className={cx('search-btn')}>
            <i class="bi bi-search"></i>
          </button>
          <input type="text" placeholder="Search accounts or posts..." />
        </div>

        <div className={cx('menu')}>
          <Button circle>
            <i class="bi bi-chat-left-text-fill"></i>
          </Button>
          <Button circle>
            <i class="bi bi-bell-fill"></i>
          </Button>
          <div className={cx('profileBtn')}>
            <Button circle>
              <i class="bi bi-person-circle"></i>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
