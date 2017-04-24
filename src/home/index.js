/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title } from './index.md';

class HomePage extends React.Component {

  static propTypes = {
    webpages: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <h2>My webpages</h2>
        <div className={s.grid}>
          {this.props.webpages.map(webpage =>
            <div className={s.cell} key={webpage.url}>
              <a href={webpage.url} className={s.link} style={{ background: `url(${webpage.image}) #fff no-repeat center center`, backgroundSize: 'cover' }}>
                <h3>{webpage.title}</h3>
                <p>{webpage.description}</p>
              </a>
            </div>,
          )}
        </div>
        <p>
          <br /><br />
        </p>
      </Layout>
    );
  }

}

export default HomePage;
