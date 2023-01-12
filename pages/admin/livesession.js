import Head from 'next/head'
import Sidebar from '../../components/Sidebar'
import styled from 'styled-components';
import Image from 'next/image';

const LiveSession = () => {

    const SessionStyle = styled.div`
        display: flex;
        font-family: 'Poppins', sans-serif;

        .sidebarRight{
            padding: 40px;
            background: #f4f4f4;
            width: 85%;
            margin-left: 15%;
            height: 100vh;

            &__top{
                display: flex;
                justify-content: space-between;
                align-items: center;

                &--left{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 20px;

                    h1{
                        span{
                            font-weight: lighter;
                        }
                    }

                }

                &--right{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 30px;

                    &__display{
                        background: #EBEBEB;
                        color: #a7a7a7;
                        padding: 10px 60px;
                        text-align: center;
                        border-radius: 10px;
                        font-size: 1rem;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    }

                    &__stop{
                        background: #D11A2A;
                        color: #ffffff;
                        padding: 10px 60px;
                        text-align: center;
                        border-radius: 10px;
                        font-size: 1rem;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    }
                }
            }

            &__bottom{
                margin-top: 30px;
                display: flex;
                gap: 30px;

                &--left{
                    width: 60%;
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                    &__current{
                        padding: 30px 60px;
                        background: #ffffff;
                        border-radius: 20px;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;

                        h2{
                            font-size: 1.7rem;
                            color: #1363DA;
                        }
                    }

                    &__slides{
                        display: flex;
                        justify-content: space-between;
                        gap: 100px;

                    }

                    &__details{
                        padding: 30px 60px;
                        background: #ffffff;
                        border-radius: 20px;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        gap: 20px;

                        h2{
                            font-size: 1.7rem;
                            color: #1363DA;
                        }
                    }
                    
                    &__name{
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        gap: 20px;
                    }

                    &__actions{
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        gap: 20px;
                    }

                    &__item{
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        gap: 200px;
                        padding: 10px 0;
                        border-bottom: solid 1px rgba(30, 30, 30, 0.2);
                    }
                }

                &--right{
                    width: 40%;
                    &__participants{
                        padding: 30px 60px;
                        background: #ffffff;
                        border-radius: 20px;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        gap: 20px;

                        h2{
                            font-size: 1.7rem;
                            color: #1363DA;
                        }
                    }
                }
            }
        }
        .submitButton{
            background: #DCE8F9;
            color: #1363DA;
            padding: 10px 60px;
            text-align: center;
            border-radius: 10px;
            font-size: 1rem;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
    `;

    return(
        <>
            <Head>
                <title>Colorvote ADMIN | Créer une session</title>
            </Head>
            <SessionStyle>
                <Sidebar />
                <div className="sidebarRight">
                    <div className="sidebarRight__top">
                        <div className="sidebarRight__top--left">
                            <h1>Session en cours - <span>Le sport à l'école</span> </h1>
                        </div>
                        <div className="sidebarRight__top--right">
                            <button className="sidebarRight__top--right__display">Afficher les résultats</button>
                            <button className="sidebarRight__top--right__stop">Arrêter la session</button>
                        </div>
                    </div>
                    <div className="sidebarRight__bottom">
                            <div className="sidebarRight__bottom--left">
                                <div className="sidebarRight__bottom--left__current">
                                    <div className="sidebarRight__bottom--left__slides">
                                        <button> ⬅️ </button>
                                            <h2>Item 1/5</h2>
                                        <button> ➡️ </button>
                                    </div>
                                    <p className="sidebarRught__bottom--left__sentence">
                                        Plus de sport à l'école
                                    </p>
                                </div>
                                <div className="sidebarRight__bottom--left__details">
                                    <h2>Items</h2>
                                    <ul>
                                        <li className='sidebarRight__bottom--left__item'>
                                            <div className="sidebarRight__bottom--left__name">
                                                <p>1</p>
                                                <p>Plus de sport à l'école</p>
                                            </div>
                                            <div className="sidebarRight__bottom--left__actions">
                                                <Image src='/disabled_poll.png' width={20} height={20} alt='dashboard poll'/>
                                                <Image src='/disabled_poll.png' width={20} height={20} alt='dashboard poll'/>
                                                <Image src='/disabled_poll.png' width={20} height={20} alt='dashboard poll'/>
                                            </div>
                                        </li>
                                        <li className='sidebarRight__bottom--left__item'>
                                            <div className="sidebarRight__bottom--left__name">
                                                <p>2</p>
                                                <p>La vie à l'école et la sécurité routière</p>
                                            </div>
                                            <div className="sidebarRight__bottom--left__actions">
                                                <Image src='/disabled_poll.png' width={20} height={20} alt='dashboard poll'/>
                                                <Image src='/disabled_poll.png' width={20} height={20} alt='dashboard poll'/>
                                                <Image src='/disabled_poll.png' width={20} height={20} alt='dashboard poll'/>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebarRight__bottom--right">
                                <div className="sidebarRight__bottom--right__participants">
                                    <h2>Participants</h2>
                                    <p>Aucun participant pour le moment. Affichez le code pour que des participants rejoignent la session.</p>
                                    <button className="submitButton">Afficher le code</button>
                                </div>
                            </div>
                        </div>
                </div>
            </SessionStyle>

        </>
    )
}

export default LiveSession