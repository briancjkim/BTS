import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import EventIcon from '@material-ui/icons/Event';
import HighlightIcon from '@material-ui/icons/Highlight';
import InfoIcon from '@material-ui/icons/Info';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import LocationIcon from '@material-ui/icons/LocationOn';
import { scroller } from 'react-scroll';

const SideDrawer = ({ open, onClose }) => {
  // 1. scroller method을설정하고 onclick에넣는다 2. App에 각각 컴포넌트에 Element로 wrapping하고 name property에 elementname을 string으로넣는다
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1000,
      delay: 500,
      smooth: true,
      offset: -88
    })
    onClose()

  }
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
    >
      <List component="nav">
        <ListItem button onClick={() => scrollToElement('Featured')}>
          <EventIcon></EventIcon>
          Event Starts In
          </ListItem>
        <ListItem button onClick={() => scrollToElement('VenueNfo')}>
          <InfoIcon></InfoIcon> Venue Info</ListItem>
        <ListItem button onClick={() => scrollToElement('Highlights')}>
          <HighlightIcon></HighlightIcon>Highlights</ListItem>
        <ListItem button onClick={() => scrollToElement('Pricing')}><MoneyIcon></MoneyIcon> Pricing</ListItem>
        <ListItem button onClick={() => scrollToElement('Location')}><LocationIcon></LocationIcon>Location</ListItem>
      </List>
    </Drawer>
  )
}
export default SideDrawer