import React, { useState } from 'react'
import styled from 'styled-components'
import flecheHaut from '../../assets/flechehaut.png'
import flecheBas from '../../assets/flechebas.png'

const Wrapper = styled.div`
   margin-bottom: 10px;
`

const Content = styled.div`
   padding: 10px;
`

const Title = styled.span`
   font-size: 16px;
   font-weight: 500;
   margin-right: 10px;
   display: inline-flex;
   align-items: center;
`

const Arrow = styled.img`
   height: 12px;
   margin-left: 5px;
   color: black;
`

function Collapse(props) {
   const [isOpen, setIsOpen] = useState(false)

   const handleToggle = () => {
      setIsOpen(!isOpen)
   }

   return (
      <Wrapper>
         <Title onClick={handleToggle}>
            {props.title}
            <Arrow src={isOpen ? flecheHaut : flecheBas} />
         </Title>
         {isOpen && <Content>{props.children}</Content>}
      </Wrapper>
   )
}
export default Collapse
