import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import images from '../../assets/images';
import Button from '../../components/Button';

const cx = classNames.bind(styles);
function Home() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('statusBar')}>
        <div className={cx('itemBar')}>
          <div className={cx('profile')}>
            <img src={images.avatar} alt="Avatar" className={cx('avatar')} />
          </div>
          <span className={cx('itemText')}>Bạn đang nghĩ gì thế?</span>
        </div>
        <div className={cx('actions')}>
          <Button primary className={cx('postBtn')}>
            Add a new post
          </Button>
        </div>
      </div>

      <div className={cx('content')}>
        <div className={cx('postContainer')}>{/* Posts Render */}</div>
      </div>
    </div>
  );
}

export default Home;
