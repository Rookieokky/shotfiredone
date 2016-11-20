import React from 'react';
import {Link} from 'react-router';


class Footer extends React.Component {
  render() {
    return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-5'>
            <h3 className='lead'><strong>ShotFired</strong> and <strong>Copyright</strong></h3>
            <p>Powered by <strong>Node.js</strong>, <strong>MongoDB</strong> and <strong>React</strong> with Flux architecture and server-side rendering.</p>

            <p>©Clearlance Powered</p>
          </div>
          <div className='col-sm-7 hidden-xs'>
            <h3 className='lead'><strong>ShotsFired</strong> Top Videos</h3>
          </div>
        </div>
      </div>
    </footer>
  );
  }

}

export default Footer;
