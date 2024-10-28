import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import images from '../../assets/images';
import Button from '../../components/Button';
import Avatar from '../../components/Avatar';
import PostItem from '../../components/PostItem';

const cx = classNames.bind(styles);
function Home() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('statusBar')}>
        <div className={cx('itemBar')}>
          <Avatar image={images.avatar} />
          <span className={cx('itemText')}>Bạn đang nghĩ gì thế?</span>
        </div>
        <div className={cx('actions')}>
          <Button primary className={cx('postBtn')}>
            Add a new post
          </Button>
        </div>
      </div>

      <div className={cx('postContainer')}>
        <PostItem
          avatar={images.logo}
          name="Phương Thanh"
          createdAt="27/10/2024"
          description="Alo alo một hai ba bốn"
          emoCount={2}
        />
        <PostItem
          avatar={images.avatar}
          name="Phương Thanh"
          createdAt="27/10/2024"
          description="Alo alo một hai ba bốn"
          media={[
            { type: 'image', url: images.avatar },
            { type: 'image', url: images.logo },
          ]}
          emoCount={95}
          commentCount={12}
        />
      </div>
    </div>
  );
}

export default Home;
