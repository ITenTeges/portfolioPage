
import 'cookieconsent';
import browserLocale from 'browser-locale';
import englishContent from './index.md';
import polishContent from './indexPl.md';

function Cookies() {
  const content = browserLocale().replace(/-.+/g, '') === 'pl' ? polishContent : englishContent;
  window.cookieconsent.initialise({
    palette: {
      popup: {
        background: '#edeff5',
        text: '#838391',
      },
      button: {
        background: '#4b81e8',
      },
    },
    position: 'bottom-right',
    content,
  });

  return null;
}

export default Cookies;
