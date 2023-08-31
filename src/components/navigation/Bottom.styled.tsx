import styled from "styled-components";

const StyledNavigationBottom = styled.div`
    background: #121212;
    padding: 8px 12px;
    border-radius: var(--sp-tile-border-radius);
    flex-grow: 1;

    div > button {
        padding: 4px 12px;
        display: flex;
        align-items: center;
        border: none;
        background: none;
        text-decoration: none;
        color: #b3b3b3;
        font-weight: 700;
        gap: 12px;
        font-size: 1rem;
        height: 40px;
        transition: color 0.2s linear;
        cursor: pointer;

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
`;

export default StyledNavigationBottom;
