import styled from "styled-components";

const Footer = styled.footer`
    display: flex;
    height: 80px;
    padding: 8px;
`;

const Info = styled.div`

`

const Player = styled.div`
    
`

const Options = styled.div`
    
`


export default function TheFooter() {
    return (
        <Footer>
            <Info></Info>
            <Player></Player>
            <Options></Options>
        </Footer>
    )

}