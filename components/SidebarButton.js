/*
    <SidebarButton
        icon="[icon]"
        active={props.active === "[SidebarLabel]" ? true : false}
    >
        [text]
    </SidebarButton>

    ** À relier dans les pages avec :
    <Sidebar active="[SidebarLabel]" />

    icon:
        Tableau de bord: home
        Mes sessions: square-poll-vertical
        Paramètres: gear
    
    SidebarLabel:
        home
        session
        settings
*/

import styled from "styled-components";

const Icon = styled.i`
    color: ${(props) => props.theme.colors.buttons.sidebar.disabled};
`;

const Button = styled.button`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 12px 16px;
    gap: 12px;
    border-radius: 20px;

    /* TEXT */
    font-family: "Poppins";
    font-size: 13px;
    color: #fff;

    &.active-link,
    &:hover {
        background: ${(props) => props.theme.colors.buttons.sidebar.background};
        ${Icon} {
            color: ${(props) => props.theme.colors.buttons.sidebar.primary};
        }
    }
`;

const SidebarButton = ({ icon, children, ...props }) => (
    <Button className={props.active === true ? "active-link" : ""} {...props}>
        <Icon className={`fas fa-${icon}`} />
        {children}
    </Button>
);

export default SidebarButton;
