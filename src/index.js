import _ from 'lodash';
import webpack from 'webpack';

function component() {
  const element = document.createElement('div');

  const handler = (percentage, message, ...args) => {
    // e.g. Output each progress message directly to the console:
    console.info(percentage, message, ...args);
  };

  new webpack.ProgressPlugin(handler);

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
