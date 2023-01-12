import styled from "styled-components";
import Image from "next/image";
import SidebarButton from "./SidebarButton";

const Sidebar = ({ ...props }) => {
    const SidebarStyle = styled.div`
        font-family: "Poppins", sans-serif;
        color: #ffffff;
        width: 15%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9;

        .container {
            height: 100vh;
            background: #252525;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 40px;

            &__top {
                display: flex;
                flex-direction: column;
                gap: 32px;
                &--logo {
                    width: 80%;
                    height: auto;
                }
                &--title {
                    font-size: 28px;
                    text-align: center;
                }
                &--header {
                    display: flex;
                    flex-direction: column;
                }
                &--navlinks {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    padding: 0 12px;
                }
            }

            &__bottom {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 40px;

                &--signout {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;

                    p {
                        font-size: 13px;
                        color: #595959;

                        &:hover {
                            color: #fff;
                        }
                    }
                }

                &--admin {
                    p {
                        span {
                            font-weight: 700;
                        }
                    }
                }
            }
        }
    `;

    return (
        <SidebarStyle>
            <div className="container">
                <div className="container__top">
                    <div className="container__top--header">
                        <Image
                            src="/bg_sidebar.png"
                            width={260}
                            height={170}
                            alt="colorvote logo"
                            className="container__top--logo"
                        />
                        <h1 className="container__top--title">ColorVote</h1>
                    </div>
                    <div className="container__top--navlinks">
                        <SidebarButton
                            icon="house"
                            active={props.active === "home" ? true : false}
                        >
                            Tableau de bord
                        </SidebarButton>
                        <SidebarButton
                            icon="square-poll-vertical"
                            active={props.active === "session" ? true : false}
                        >
                            Mes sessions
                        </SidebarButton>
                        <SidebarButton
                            icon="gear"
                            active={props.active === "settings" ? true : false}
                        >
                            Paramètres
                        </SidebarButton>
                    </div>
                </div>
                <div className="container__bottom">
                    <div className="container__bottom--admin">
                        <p>
                            Bonjour <span>Hugo </span>!
                        </p>
                    </div>
                    <div className="container__bottom--signout">
                        <Image
                            src="/disabled_signout.png"
                            width={20}
                            height={20}
                            alt="dashboard signout"
                        />
                        <p>Déconnexion</p>
                    </div>
                </div>
            </div>
        </SidebarStyle>
    );
};

export default Sidebar;
