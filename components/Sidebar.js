import styled from "styled-components"
import Image from "next/image"

const Sidebar = () => {
    const SidebarStyle = styled.div`
        color: #ffffff;
        width: 15%;
        
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
                justify-content: center;
                align-items: center;
                gap: 8px;
            }
        }
    `

    return(
        <SidebarStyle>
            <div className="container">
                <div className="container__top">
                    <div className="container__top--header">
                        <Image src='/bg_sidebar.png' width={240} height={190} alt='colorvote logo' className='container__top--logo'/>
                        <h1 className="container__top--title">ColorVote</h1>
                    </div>
                    <div className="container__top--navlinks">
                        <ul>
                            <li className="container__top--navlinks__button">
                                <Image src='/active_home.png' width={20} height={20} alt='dashboard home'/>
                                <a href="#">Tableau de bord</a>
                            </li>
                            <li className="container__top--navlinks__button">
                                <Image src='/active_poll.png' width={20} height={20} alt='dashboard poll'/>
                                <a href="#">Mes sessions</a>
                            </li>
                            <li>
                                <a href="#">Paramètres</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container__bottom">
                    <Image src='/disabled_signout.png' width={20} height={20} alt='dashboard signout'/>
                    <p>Déconnexion</p>
                </div>
            </div>
        </SidebarStyle>
    )
}

export default Sidebar