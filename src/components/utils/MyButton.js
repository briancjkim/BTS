import React from 'react'
import Button from '@material-ui/core/Button';
import TicketIcon from '../../resources/images/icons/ticket.png';

const MyButton = ({ link, text, color, bgColor }) => {
  return (
    <div>
      <Button
        href={link}
        variant="contained"
        size="small"
        style={{
          background: bgColor,
          color
        }}>
        <img src={TicketIcon} alt="icon_button" className="iconImage" />{text}
      </Button>
    </div >
  )
}

export default MyButton
