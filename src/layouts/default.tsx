import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";
import TheFooter from "../components/the/Footer";

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
    display: flex;
    flex-direction: column;

    ul {
        list-style: none;

        li {
            padding: 4px 12px;

            a {
                text-decoration: none;
                color: #b3b3b3;
                font-weight: 700;
                display: flex;
                align-items: center;
                gap: 20px;
                height: 40px;
                transition: color 0.2s linear;

                &:hover {
                    color: #ffffff;
                }
            }
        }
    }
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

const NavItem = styled.li``;

export default function Root() {
    return (
        <>
            <Wrapper>
                <Nav>
                    <NavTop>
                        <ul>
                            <li>
                                <Link to="/">
                                    <i style={{ fontSize: "1.25rem" }} className="sp-home-outline-icon"></i>
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/search">
                                    <i style={{ fontSize: "1.25rem" }} className="sp-search-outline-icon"></i>
                                    <span>Szukaj</span>
                                </Link>
                            </li>
                        </ul>
                    </NavTop>
                    <NavBottom></NavBottom>
                </Nav>
                <Main>
                    <Outlet />
                </Main>
            </Wrapper>
            <TheFooter />
        </>
    );
}
