import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavigationTop = styled.div`
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

                &.active {
                    color: #ffffff;
                }

                &:hover {
                    color: #ffffff;
                }

                i {
                    font-size: 1.25rem;
                }
            }
        }
    }
`;

export default function NavigationTop() {
    return (
        <StyledNavigationTop>
            <ul>
                <li>
                    <NavLink to="/">
                        {({ isActive }) => (
                            <>
                                <i className={isActive ? "sp-home-icon" : "sp-home-outline-icon"}></i>
                                <span>Home</span>
                            </>
                        )}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/search">
                        {({ isActive }) => (
                            <>
                                <i className={isActive ? "sp-search-icon" : "sp-search-outline-icon"}></i>
                                <span>Szukaj</span>
                            </>
                        )}
                    </NavLink>
                </li>
            </ul>
        </StyledNavigationTop>
    );
}
