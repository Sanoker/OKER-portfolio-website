import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`
const Text = styled.div`
  font-size: 25px;
  line-height: 42px;
  margin-bottom: 62px;
  font-weight: 550;
  text-align: center;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;


const Contact = () => {
  return (
    <Container id="contact">

        <Text>“With just an internet connection and <br/>
        some design skills, creators can make a <br/>
         living from anywhere in the world, no <br/>
         matter their race, gender, or <br/>
         background."</Text>

    </Container>
  )
}

export default Contact