/*
    <Button color="[color]">[text]</Button>

    color:
        primary
        secondary
        validate
        cancel
*/

import styled from "styled-components";

const Button = styled.button`
    /* Button */
    position: relative;
    background-color: ${(props) =>
        props.theme.colors.buttons.default[props.color] ||
        props.theme.colors.buttons.default.primary};
    padding: 10px 64px;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    /* Text */
    ${(props) => {
        switch (props.color) {
            case "secondary":
                return `color: ${props.theme.colors.buttons.default.primary};`;
            default:
                return "color: #ffffff;";
        }
    }}
    font-family: "Poppins";
    font-size: 16px;

    &:hover {
        ${(props) => {
            switch (props.color) {
                case "secondary":
                    return `background-color: ${props.theme.colors.buttons.default.primary}; color: #fff}`;
                default:
                    return `background-color: ${
                        props.theme.colors.buttons.hover[props.color] ||
                        props.theme.colors.buttons.hover.primary
                    };`;
            }
        }}
    }
`;

export default Button;
