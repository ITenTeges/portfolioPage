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
import Layout from '../../components/Layout';
import s from './styles.css';
import englishContent from './index.md';
import polishContent from './indexPl.md';

class AboutPage extends React.Component {
  constructor() {
    super();
    const locale = browserLocale().replace(/-.+/g, '') || 'en';
    this.state = {
      content: locale === 'pl' ? polishContent : englishContent,
    };
  }

  componentDidMount() {
    document.title = this.state.content.title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <h1>{this.state.content.title}</h1>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: this.state.content.html }}
        />
      </Layout>
    );
  }

}

export default AboutPage;
