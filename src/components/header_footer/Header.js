import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './SideDrawer';
export default class Header extends Component {
  state = {
    isDrawerOpen: false
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll');
  }
  toggleDrawer = () => {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen
    })
  }
  handleScroll = (event) => {
    // innerheight은 스크린높이
    if (window.scrollY >= window.innerHeight) {
      this.setState({ isHeaderShow: true })
    } else {
      this.setState({ isHeaderShow: false })
    }
  }
  render() {
    const { isDrawerOpen, isHeaderShow } = this.state;
    return (
      <header className="header">
        <AppBar
          position={isHeaderShow ? "fixed" : "absolute"}
          style={{
            backgroundColor: isHeaderShow ? "#833471d2" : 'transparent',
            color: isHeaderShow ? "#ffa800" : 'white',
            boxShadow: 'none',
            padding: '10px 0px',
            transition: 'background .5s linear'
          }}>
          <Toolbar>
            <div className="header_logo">
              <div className="font_righteous header_logo_venue">The BTS</div>
              <div className="header_logo_title">Musical Events</div>
            </div>
            <IconButton
              aria-label="Menu"
              color='inherit'
              onClick={this.toggleDrawer}

            >
              <MenuIcon style={{ fontSize: '44px' }}></MenuIcon>
            </IconButton>
            <SideDrawer open={isDrawerOpen} onClose={this.toggleDrawer} />
          </Toolbar>
        </AppBar>
      </header >
    )
  }
}
