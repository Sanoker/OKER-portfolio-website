import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 330px;
    height: 280px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
`

const Image = styled.img`
    width: 100%;
    height: 200px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    margin-bottom: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const ProjectCards = ({project,setOpenModal}) => {
    return (
        <Card onClick={() => setOpenModal({state: true, project: project})}>
            <Image src={project.image}/>
                <Date>{project.date}</Date>
        </Card>
    )
}

export default ProjectCards