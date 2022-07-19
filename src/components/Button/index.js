import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    herf,
    text,
    leftIcon,
    rightIcon,
    primary,
    outline,
    rounded,
    unrouned,
    disabled,
    small,
    large,
    children,
    className,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        ...passProps,
    };

    if (disabled) {
        delete props.onClick;
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (herf) {
        props.herf = herf;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        rounded,
        unrouned,
        disabled,
        small,
        large,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
