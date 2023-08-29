import styled from "styled-components";

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

export default StyledNavigationTop;
