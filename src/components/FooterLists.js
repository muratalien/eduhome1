import React from "react";
import FooterList from "./FooterList";

const FooterLists = () => {
  return (
    <>
    <div className='col-3'>
    <div className='footlist-header'>
          <h4>INFORMATION</h4>
        </div>
    <ul className="foot__list">
      <FooterList content="Addmission" />
      <FooterList content="Academic Calender" />
      <FooterList content="Event List" />
      <FooterList content="Hostel & Dinning" />
      <FooterList content="TimeTable" />
    </ul>
    </div>

    <div className='col-3'>
    <div className='footlist-header'>
          <h4>USEFUL LINKS</h4>
        </div>
    <ul className="foot__list">
      <FooterList content="Our Courses" />
      <FooterList content="About Us" />
      <FooterList content="Teachers & Faculty" />
      <FooterList content="Teams & Conditions" />
      <FooterList content="Our Events" />
    </ul>
    </div>

    <div className='col-3'>
    <div className='footlist-header'>
          <h4>GET IN TOUCH</h4>
        </div>
    <ul className="foot__list">
      <FooterList content="Your address goes here, Street
      City, Roadno 785 New York" />
      <FooterList content="+880 548 986 898 87
      +880 659 785 658 98" />
      <FooterList content="info@eduhome.com
      www.eduhome.com" />
    </ul>
    </div>
    </>
  );
};

export default FooterLists;