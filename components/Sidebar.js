import styled from "styled-components"
import Image from "next/image"

const Sidebar = () => {
    const SidebarStyle = styled.div`
        font-family: 'Poppins', sans-serif;
        color: #ffffff;
        width: 15%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9;
        
        .container{
            height: 100vh;
            background: #252525; 
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding-bottom:40px;

            &__top{
                &--title{
                    font-size: 28px;
                }
                &--header{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
                &--navlinks{
                    margin-top: 60px;
                    ul{
                        display: flex;
                        flex-direction: column;
                        gap: 30px;
                    }
                    li{
                        background: #363636;
                        padding: 16px 46px;
                        border-radius: 20px;

                        &:nth-child(2){
                            background: none;
                        }

                        &:last-child{
                            background: none;
                        }
                    }
                    &__button{
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        gap: 10px;
                    }
                }
            }

            &__bottom{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 40px;

                &--signout{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;

                    p{
                        color: #595959;
                    }
                }

                &--admin{
                    p{
                        font-size: 1.2rem;
                        span{
                            font-weight: 700;
                        }
                    }
                }
            }
        }
    `

    return(
        <SidebarStyle>
            <div className="container">
                <div className="container__top">
                    <div className="container__top--header">
                        <Image src='/bg_sidebar.png' width={260} height={170} alt='colorvote logo' className='container__top--logo'/>
                        <h1 className="container__top--title">ColorVote</h1>
                    </div>
                    <div className="container__top--navlinks">
                        <ul>
                            <li className="container__top--navlinks__button">
                                <Image src='/active_home.png' width={20} height={20} alt='dashboard home'/>
                                <a href="#">Tableau de bord</a>
                            </li>
                            <li className="container__top--navlinks__button">
                                <Image src='/disabled_poll.png' width={20} height={20} alt='dashboard poll'/>
                                <a href="#">Mes sessions</a>
                            </li>
                            <li className="container__top--navlinks__button">
                                <Image src='/disabled_settings.png' width={20} height={20} alt='dashboard settings'/>
                                <a href="#">Paramètres</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container__bottom">
                    <div className="container__bottom--admin">
                        <p>Bonjour <span>Hugo </span>!</p>
                    </div>
                    <div className="container__bottom--signout">
                        <Image src='/disabled_signout.png' width={20} height={20} alt='dashboard signout'/>
                        <p>Déconnexion</p>
                    </div>
                </div>
            </div>
        </SidebarStyle>
    )
}

export default Sidebar