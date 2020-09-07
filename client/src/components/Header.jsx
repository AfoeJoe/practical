import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Header extends Component {
  render() {
    return (
      <div>
        {' '}
        <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top'>
          <Link to='/' className='navbar-brand'>
            Home <span className='sr-only'>(current)</span>
          </Link>

          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarsExampleDefault'
            aria-controls='navbarsExampleDefault'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarsExampleDefault'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link to='/temperature' className='nav-link'>
                  Temperature
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/humidity' className='nav-link'>
                  Humidity
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
