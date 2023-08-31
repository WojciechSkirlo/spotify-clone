import styled from "styled-components";
import { Outlet } from "react-router-dom";
import TheFooter from "../components/the/Footer";
import TheNavigation from "../components/the/Navigation";

const Wrapper = styled.div`
    flex-grow: 1;
    background: #000000;
    padding: var(--sp-panel-gap);
    display: grid;
    grid-template-columns: 420px 1fr;
    grid-template-rows: 1fr;
    gap: var(--sp-panel-gap);
`;

const Main = styled.main`
    background: #121212;
    border-radius: var(--sp-tile-border-radius);
    flex-grow: 1;
`;


export default function Root() {
    return (
        <>
            <Wrapper>
                <TheNavigation />
                <Main>
                    <Outlet />
                </Main>
            </Wrapper>
            <TheFooter />
        </>
    );
}
