import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
  to,
  href,
  primary,
  outline,
  circle,
  small,
  large,
  text,
  disabled,
  rounded,
  className,
  onClick,
  children,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    circle,
    small,
    large,
    text,
    rounded,
  });

  if (to) {
    props.to = to;
    Comp = 'Link';
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }
  return (
    <Comp className={classes} {...props}>
      <span className={cx('title')}>{children}</span>
    </Comp>
  );
}

export default Button;
