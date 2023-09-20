import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From photos to paintings. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>ALL</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>ALL</ToggleButton>
          }
          <Divider />
          {toggle === 'photo' ?
            <ToggleButton active value="photo" onClick={() => setToggle('photo')}>PHOTOS</ToggleButton>
            :
            <ToggleButton value="photo" onClick={() => setToggle('photo')}>PHOTOS</ToggleButton>
          }
          <Divider />
          {toggle === 'design' ?
            <ToggleButton active value="design" onClick={() => setToggle('design')}>DESIGNS</ToggleButton>
            :
            <ToggleButton value="design" onClick={() => setToggle('design')}>DESIGNS</ToggleButton>
          }
          <Divider />
          {toggle === 'paint' ?
            <ToggleButton active value="paint" onClick={() => setToggle('paint')}>PAINTINGS</ToggleButton>
            :
            <ToggleButton value="paint" onClick={() => setToggle('paint')}>PAINTINGS</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects