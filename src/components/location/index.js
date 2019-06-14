import React from 'react'

// jsx 에서는 html이아니니까 frameborder를 frameBorder라고써야한다 style도 {{}}로 감싸야
const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.467343931299!2d153.03589661505725!3d-27.48583758288415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a159e4be2a9%3A0x290ed842c4330245!2sThe+Gabba!5e0!3m2!1sen!2sau!4v1560426979477!5m2!1sen!2sau"
        title="googlemap"
        width="100%"
        height="600"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
      ></iframe>
      <div className="location_tag">
        <div >Location</div>
      </div>
    </div>
  )
}

export default Location
