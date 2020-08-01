import styled from "styled-components"
import Img from "gatsby-image"
const FakeBgImage = styled(Img)`
position:absolute;
top:0;
left:0;
width:100%
height: ${({ mobileHeight, height }) => (mobileHeight ? mobileHeight : height)};
z-index:0;
border-radius:10px
@media screen and(min-width: 768px){
    height:${({ height }) => height || "auto"}
}
`
export default FakeBgImage
