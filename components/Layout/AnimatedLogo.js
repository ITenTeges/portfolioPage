import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './AnimatedLogo.css';

class AnimatedLogo extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (<div className={cx(s.itenteges, this.props.className)}>
      <div className={s.logo}>
        <div className={s['letter-i']}>
          <div className={cx(s.ruler, s.grey)}>
            <div className={s.bar} />
            <div className={s.bar} />
            <div className={s.bar} />
            <div className={s.bar} />
            <div className={s.bar} />
            <div className={s.bar} />
            <div className={s.bar} />
            <div className={s.bar} />
            <div className={s.bar} />
          </div>
        </div>
        <div className={s['letter-t']}>
          <div className={cx(s.ruler, s.horizontal)}>
            <div className={s.bar} />
            <div className={s.bar} />
            <div className={s.bar} />
            <div className={s.bar} />
            <div className={s.bar} />
            <div className={s.bar} />
            <div className={s.bar} />
            <div className={s.bar} />
            <div className={s.bar} />
          </div>
          <div className={s.ruler}>
            <div className={s.bar} />
            <div className={s.bar} />
            <div className={s.bar} />
            <div className={s.bar} />
            <div className={s.bar} />
            <div className={s.bar} />
            <div className={s.bar} />
            <div className={s.bar} />
            <div className={s.bar} />
          </div>
        </div>
      </div>
      <div>
        <h1 className={s.h1}>& Teges</h1>
      </div>
    </div>);
  }
}

export default AnimatedLogo;
