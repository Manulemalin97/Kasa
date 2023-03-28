import React from 'react'
import styled from 'styled-components'

const HostContainer = styled.div`
   display: flex;
   align-items: center;

   flex-direction: row-reverse;
`

const HostImageContainer = styled.div`
   display: flex;
   overflow: hidden;
   margin-right: 1rem;
`

const HostImage = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`

const HostName = styled.div`
   font-size: 1.2rem;
   font-weight: bold;
`

const Host = ({ name, picture }) => {
   return (
      <HostContainer>
         <HostImageContainer>
            <HostImage src={picture} alt={name} />
         </HostImageContainer>
         <HostName>{name}</HostName>
      </HostContainer>
   )
}

export default Host
