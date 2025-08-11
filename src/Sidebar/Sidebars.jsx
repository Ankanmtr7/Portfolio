import React, { useState } from 'react';
import { ThreeBarsIcon } from "@primer/octicons-react";
import Offcanvas from 'react-bootstrap/Offcanvas';

const Sidebars = (props) => {
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const section = [
    {
        id: 1,
        title: 'Home',
        link: '#Section-hero',
        scrollTo: props.AllRef.HeroRef,
        active: true
    },
    {
        id: 2,
        title: 'About',
        link: '#Section-about',
        scrollTo: props.AllRef.AboutRef,
        active: false
    },
    {
        id: 3,
        title: 'Experience',
        link: '#Section-experience',
        scrollTo: props.AllRef.ExperienceRef,
        active: false
    },
    {
        id: 4,
        title: 'Skills',
        link: '#Section-skills',
        scrollTo: props.AllRef.SkillsRef,
        active: false
    },
    {
        id: 5,
        title: 'Projects',
        link: '#Section-projects',
        scrollTo: props.AllRef.ProjectRef,
        active: false
    },
    {   id: 6,
        title: 'Education',
        link: '#Section-education',
        scrollTo: props.AllRef.EducationRef,
        active: false
    },
    {
        id: 7,
        title: 'Contact',
        link: '#Section-contact',
        scrollTo: props.AllRef.ContactRef,
        active: false
    }
  ]
  return (
    <>
      <ThreeBarsIcon
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        onClick={handleShow}
        className='sidebar-icon'
        size={'medium'}
      />

      <Offcanvas show={show} onHide={handleClose} placement={'end'} className="sidebar-offcanvas">
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <div className="sidebar">
                <ul className="sidebar-list">
                {section.map((item) => (
                    <li key={item.id} className={`sidebar-item ${item.active ? 'active' : ''}`}>
                    <a href={item.link} onClick={() => { props.scrollToSection(item.scrollTo); handleClose(); }}>{item.title} </a>
                    </li>
                ))}
                </ul>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebars;
