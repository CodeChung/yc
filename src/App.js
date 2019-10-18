import React from 'react';
import Home from './routes/Home/Home';
import Video from './routes/Video/Video';
import About from './routes/About/About';
import Blog from './routes/Blog/Blog';
import Contact from './routes/Contact/Contact';
import { Link, Route, Switch } from 'react-router-dom';
import { IoLogoFacebook, IoMdMail, IoLogoYoutube } from 'react-icons/io'
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import './App.css';

class App extends React.Component {
  state = {
    currentView: '/',
    hamburgerActive: false,
  }
  setView = view => {
    this.setState({ currentView: view })
  }
  toggleHamburger = () => {
    const { hamburgerActive } = this.state
    this.setState({ hamburgerActive: !hamburgerActive })
  }
  render() {
    const { currentView, hamburgerActive } = this.state
    const hamburgerClass = hamburgerActive ? 'hamburger hamburger--collapse is-active' : 'hamburger hamburger--collapse'
    const sidebarClass = hamburgerActive ? 'side-nav active-side-nav' : 'side-nav'
    return (
      <div className="App">
        <nav className={sidebarClass}>
          <div className='side-nav-block'>
            <div className='side-nav-links'>
              <div className='side-links'>
                <Link onClick={this.toggleHamburger}
                  to='/blog'>Blog</Link>
                <Link onClick={this.toggleHamburger}
                  to='/about'>About</Link>
                <Link onClick={this.toggleHamburger}
                  to='/'>Book</Link>
                <Link onClick={this.toggleHamburger}
                  to='/'>Link 7</Link>
              </div>
              <div className='side-links'>
                <Link onClick={this.toggleHamburger}
                  to='/video'>Video</Link>
                <Link onClick={this.toggleHamburger}
                  to='/contact'>Reach Out</Link>
                <Link onClick={this.toggleHamburger}
                  to='/'>Link 6</Link>
                <Link onClick={this.toggleHamburger}
                  to='/'>Link 8</Link>
              </div>
            </div>
            <div className='side-nav-icons'>
              <div className='sidecon'>
                <FaFacebookF />
              </div>
              <div className='sidecon'>
                <FaLinkedinIn />
              </div>
              <div className='sidecon'>
                <IoLogoYoutube />
              </div>
              <div className='sidecon'>
                <FiMail />
              </div>
            </div>
          </div>
        </nav>
        <nav className='navbar'>
          <Link 
            className={currentView === '/blog' ? 'nav-active' : ''}
            onClick={() => this.setView('/blog')}
            to='/blog'>
            Blog
          </Link>
          <Link 
            className={currentView === '/video' ? 'nav-active' : ''}
            onClick={() => this.setView('/video')}
            to='/video'>
            Video Series
          </Link>
          <Link 
            className={currentView === '/' ? 'name nav-active' : 'name'}
            onClick={() => this.setView('/')}
            to='/'>
            <span className='name'>Young Chung</span>
          </Link>
          <Link 
            className={currentView === '/about' ? 'nav-active' : ''}
            onClick={() => this.setView('/about')}
            to='/about'>
            About
          </Link>
          <Link 
            className={currentView === '/contact' ? 'nav-active' : ''}
            onClick={() => this.setView('/contact')}
            to='/contact'>
            Work With Me
          </Link>
          <button 
            onClick={this.toggleHamburger}
            class={hamburgerClass} 
            type="button">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </nav>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/blog' component={Blog} />
            <Route path='/video' component={Video} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
