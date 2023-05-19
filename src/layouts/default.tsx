import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";

const Wrapper = styled.div`
    flex-grow: 1;
    background: #000000;
    padding: var(--sp-panel-gap);
    display: grid;
    grid-template-columns: 420px 1fr;
    grid-template-rows: 1fr;
    gap: var(--sp-panel-gap);
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: var(--sp-panel-gap);
`;

const NavTop = styled.div`
    background: #121212;
    padding: 8px 12px;
    border-radius: var(--sp-tile-border-radius);
    height: 112px;
    display: flex;
    flex-direction: column;
`;

const NavBottom = styled.div`
    background: #121212;
    padding: 8px 12px;
    border-radius: var(--sp-tile-border-radius);
    flex-grow: 1;
`;

const Main = styled.main`
    background: #121212;
    border-radius: var(--sp-tile-border-radius);
    flex-grow: 1;
`;

const Footer = styled.footer`
    height: 72px;
`;

export default function Root() {
    return (
        <>
            <Wrapper>
                <Nav>
                    <NavTop>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/search">Szukaj</Link>
                            </li>
                        </ul>
                    </NavTop>
                    <NavBottom></NavBottom>
                </Nav>
                <Main>
                    <Outlet />
                </Main>
            </Wrapper>
            <Footer></Footer>
        </>
    );
}
