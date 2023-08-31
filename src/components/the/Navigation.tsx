import styled from "styled-components";
import NavigationTop from "../navigation/Top";
import NavigationBottom from "../navigation/Bottom";

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: var(--sp-panel-gap);
`;


export default function TheNavigation() {
    return (
        <Nav>
            <NavigationTop />
            <NavigationBottom />
        </Nav>
    );
}
