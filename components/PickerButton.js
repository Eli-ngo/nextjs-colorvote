/*
    <PickerButton color="[colorPicker]">[text]</PickerButton>

    colorPicker : 
        darkGreen: "#055B0E",
        green: "#B5D64E",
        orange: "#FF9900",
        red: "#FF0000",
        darkRed: "#680000",
        white: "#E0E0E0",
        black: "#1E1E1E"
*/

import styled from "styled-components";
import { getContrast } from "polished";
import tinycolor from "tinycolor2";

const PickerButton = styled.button`
    /* Button */
    padding: 16px 32px 16px 12px;
    border-style: solid;
    border-color: ${(props) =>
        props.theme.colors.pickers[props.color] ||
        props.theme.colors.pickers.default};
    border-radius: 20px;
    border-width: 3px 3px 3px 16px;

    /* Text */
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: ${(props) => props.theme.colors.text};

    &:hover, &.active {
        background-color: ${(props) =>
            props.theme.colors.pickers[props.color] ||
            props.theme.colors.pickers.default};
        color: ${(props) => {
            const color = tinycolor(props.color);
            return getContrast(
                color.toRgbString() ||
                    props.theme.colors.pickers.default.toRgbString(),
                props.theme.colors.text
            ) > 3.2
                ? props.theme.colors.text
                : "white";
        }};
        }
    ;
`


const PickButton = ({ children, ...props }) => (
    <PickerButton className={props.active === true ? "active" : ""} {...props}>
        {children}
    </PickerButton>
);

export default PickButton;
