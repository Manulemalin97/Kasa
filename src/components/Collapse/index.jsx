import React, { useState } from 'react'
import styled from 'styled-components'
import flecheHaut from '../../assets/flechehaut.png'
import flecheBas from '../../assets/flechebas.png'
import colors from '../../utils/style/colors'

const Wrapper = styled.div`
   margin-bottom: 25px;
   border-radius: 10px;
   background-color: ${colors.secondary};
`

const Content = styled.div`
   padding: 10px;
   background-color: ${colors.secondary};
   border-radius: 5px 5px 10px 10px;
   font-family: 'Montserrat', sans-serif;
   font-weight: 400;
   font-size: 1rem;
   color: ${colors.red};
`

const Title = styled.span`
   font-size: 16px;
   font-weight: 500;

   display: inline-flex;
   align-items: center;
   width: 100%;
   justify-content: space-between;
   background-color: ${colors.red};
   border-radius: 7px;
   font-family: 'Montserrat', sans-serif;
   font-weight: 500;
   font-size: 1rem;

   .title-text {
      margin-left: 10px;
      color: #ffffff;
   }
`

const Arrow = styled.img`
   height: 12px;
   margin-left: 5px;
   margin-right: 10px;
   box-sizing: border-box;
   cursor: pointer;
`

const Button = styled.button`
   background-color: ${colors.red};
   padding: 10px;
   border: none;
   border-radius: 20px;
`

function Collapse(props) {
   const [isOpen, setIsOpen] = useState(false)

   const handleToggle = () => {
      setIsOpen(!isOpen)
   }

   return (
      <Wrapper>
         <Title>
            <span className="title-text">{props.title}</span>
            <Button onClick={handleToggle}>
               <Arrow src={isOpen ? flecheHaut : flecheBas} />
            </Button>
         </Title>
         {isOpen && <Content>{props.children}</Content>}
      </Wrapper>
   )
}

export default Collapse
