import './footer.css'
import styled from 'styled-components'
import footerImage from '../../assets/footer.png'
import logoWhite from '../../assets/logoblanc.png'

const FooterContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   position: relative;
   height: 100%;
`

const LogoImage = styled.img`
   max-width: 30%;
   height: 3vw;
   width: 20vw;
   padding: 10px;
`

const Text = styled.p`
   color: #fff;
   font-size: 1.8vw;
`

const FooterImage = styled.img`
   max-width: 100%;
   height: auto;
`
const LogoContainer = styled.div`
   position: absolute;
   bottom: 1em;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`
function Footer() {
   return (
      <FooterContainer>
         <FooterImage src={footerImage} />
         <LogoContainer>
            <LogoImage src={logoWhite} alt="Logo blanc de Kasa" />
            <Text>© 2020 Kasa. All rights reserved</Text>
         </LogoContainer>
      </FooterContainer>
   )
}
export default Footer
