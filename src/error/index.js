/* eslint max-len: ["error", 180]*/
/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import browserLocale from 'browser-locale';
import history from '../history';
import Link from '../../components/Link';
import s from './styles.css';
import englishContent from './index.md';
import polishContent from './indexPl.md';

class ErrorPage extends React.Component {

  static propTypes = {
    error: React.PropTypes.object,  // eslint-disable-line react/forbid-prop-types
  };

  constructor(props) {
    super(props);
    const locale = browserLocale().replace(/-.+/g, '') || 'en';
    this.state = {
      content: locale === 'pl' ? polishContent : englishContent,
    };
  }

  componentDidMount() {
    document.title = this.props.error && this.props.error.status === 404 ?
      this.state.content.pageNotFound : this.state.content.error;
  }

  goBack = (event) => {
    event.preventDefault();
    history.goBack();
  };

  render() {
    if (this.props.error) console.error(this.props.error); // eslint-disable-line no-console

    const [code, title] = this.props.error && this.props.error.status === 404 ?
      ['404', this.state.content.pageNotFound] :
      [this.state.content.error, this.state.content.somethingWentWrong];

    return (
      <div className={s.container}>
        <main className={s.content}>
          <h1 className={s.code}>{code}</h1>
          <p className={s.title}>{title}</p>
          {code === '404' &&
            <p className={s.text}>
              {this.state.content.pageDoesntExist}
            </p>
          }
          <p className={s.text}>
            <a href="/" onClick={this.goBack}>{this.state.content.goBack}</a>            &nbsp;
            {this.state.content.goBackText}            &nbsp;
            <Link to="/">{this.state.content.homePage}</Link>            &nbsp;
            {this.state.content.goBackTextCdn}
          </p>
        </main>
      </div>
    );
  }

}

export default ErrorPage;
