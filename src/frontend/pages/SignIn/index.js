import classNames from 'classnames/bind';
import styles from './SignIn.module.scss';
import images from '../../assets/images';
import Input from '../../components/InputItem';
import Button from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { loginApi } from '../../util/api';

const cx = classNames.bind(styles);

function SignIn() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const onUpdateField = (e) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    // validate
    if (!form.username || !form.password) {
      toast.error('All fields are required', {
        duration: 2000,
        position: 'top-right',
      });
      return;
    }

    try {
      const res = await loginApi(form.username, form.password);

      // Lưu jwt token
      localStorage.setItem('access_token', res.data.token);

      toast.success('Logged in successfully', {
        duration: 2000,
        position: 'top-right',
      });
      navigate('/home');
    } catch (err) {
      const errorMessage = err.response?.data?.error;
      toast.error(errorMessage, {
        duration: 2000,
        position: 'top-right',
      });
      return 0;
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('webDescription')}>
        <img src={images.logo} alt="Logo" className={cx('logo')} />
        <span className={cx('slogan')}>THIS IS MY FIRST FULLSTACK PROJECT</span>
      </div>
      <form onSubmit={handleSignIn} className={cx('formWrapper')}>
        <div className={cx('infoWrapper')}>
          <h2 className={cx('title')}>Sign in</h2>
          <Input type="text" name="username" placeholder="User name" onChange={onUpdateField} />
          <Input type="password" name="password" placeholder="Password" onChange={onUpdateField} />
          <div className={cx('actions')}>
            <Button type="submit" primary className={cx('signInBtn')} onClick={handleSignIn}>
              Sign in
            </Button>
            {/* <Link to="/signup"> */}
            <span className={cx('forgottenPassword')}>Forgotten password?</span>
            {/* </Link> */}
            <Link to="/signup">
              <Button outline className={cx('signUpBtn')}>
                Create new account
              </Button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
