import Icon from './icon';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const fn: React.MouseEventHandler = (e) => {
  console.log(e.target);
};
ReactDOM.render(<div>
  <Icon name="alipay" onClick={fn} onMouseEnter={() => {console.log('enter');}} />
</div>, document.querySelector('#root'));
