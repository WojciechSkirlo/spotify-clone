import styled from "styled-components";

function BaseButton() {
    const Button = styled.button`
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
    `;

    return <Button>button compoennt</Button>;
}

export default BaseButton;
