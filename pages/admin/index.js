import Head from "next/head";
import Sidebar from "../../components/Sidebar";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const Dashboard = () => {
    const DashboardStyle = styled.div`
        display: flex;
        font-family: "Poppins", sans-serif;

        .sidebarRight {
            background: #f4f4f4;
            padding: 40px;
            width: 85%;
            margin-left: 15%;
            height: 100vh;

            /* TOP PART */
            &__top {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;

                &--right {
                    display: flex;
                    gap: 40px;

                    &__display {
                        padding: 10px 40px;
                    }
                }

                &--left {
                    h1 {
                        span {
                            font-weight: lighter;
                        }
                    }
                }
            }

            /* BOTTOM PART */
            &__bottom {
                display: flex;
                flex-direction: column;
                gap: 30px;

                &--bottom1 {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 30px;

                    &__startsession {
                        width: 50%;
                        padding: 30px 60px;
                        background: #ffffff;
                        border-radius: 20px;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        gap: 20px;

                        h1 {
                            font-size: 1.7rem;
                            color: #1363da;
                        }
                    }
                    &__inprogress {
                        width: 50%;
                        padding: 30px 60px;
                        background: #ffffff;
                        border-radius: 20px;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        gap: 20px;

                        h1 {
                            font-size: 1.7rem;
                            color: #1363da;
                        }
                    }
                }
                &--bottom2 {
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    gap: 30px;

                    &__lastsessions {
                        width: 50%;
                        padding: 30px 60px;
                        background: #ffffff;
                        border-radius: 20px;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        gap: 30px;

                        h1 {
                            font-size: 1.7rem;
                            color: #1363da;
                        }
                    }

                    &__session {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        gap: 160px;

                        h2 {
                            font-size: 1rem;
                            color: #1363da;
                        }
                    }

                    &__graph {
                        width: 50%;
                        padding: 30px 60px;
                        background: #ffffff;
                        border-radius: 20px;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        gap: 30px;

                        h1 {
                            text-align: center;
                            font-size: 1.7rem;
                            color: #1363da;
                        }
                    }
                }
            }
        }
        .submitButton {
            background: #1363da;
            color: #ffffff;
            padding: 10px 60px;
            text-align: center;
            border-radius: 10px;
            font-size: 1rem;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

            &__secondary {
                background: #dce8f9;
                color: #1363da;
                padding: 10px 60px;
                text-align: center;
                border-radius: 10px;
                font-size: 1rem;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            }
        }
    `;

    const router = useRouter();

    const goToCreate = () => {
        router.push('/admin/createsession');
    }

    return (
        <>
            <Head>
                <title>ColorVote ADMIN | Dashboard</title>
            </Head>
            <DashboardStyle>
                <Sidebar active="home" />
                <div className="sidebarRight">
                    <div className="sidebarRight__top">
                        <div className="sidebarRight__top--left">
                            <h1>
                                Tableau de bord - <span>13/01/2023</span>{" "}
                            </h1>
                        </div>
                    </div>
                    <div className="sidebarRight__bottom">
                        <div className="sidebarRight__bottom--bottom1">
                            <div className="sidebarRight__bottom--bottom1__startsession">
                                <h1>Démarrer une session</h1>
                                <p>
                                    Créez une nouvelle session en 2 minutes
                                    chrono !
                                </p>
                                <button onClick={goToCreate} className="submitButton">
                                    Commencer
                                </button>
                            </div>
                            <div className="sidebarRight__bottom--bottom1__inprogress">
                                <h1>Session en cours</h1>
                                <p>Aucune session en cours pour le moment.</p>
                                <button className="submitButton">
                                    Reprendre
                                </button>
                            </div>
                        </div>
                        <div className="sidebarRight__bottom--bottom2">
                            <div className="sidebarRight__bottom--bottom2__lastsessions">
                                <h1>Mes dernières sessions</h1>
                                <div className="sidebarRight__bottom--bottom2__allsessions">
                                    <div className="sidebarRight__bottom--bottom2__session">
                                        <h2>Concerts</h2>
                                        <p>06/01/2023</p>
                                    </div>
                                    <div className="sidebarRight__bottom--bottom2__session">
                                        <h2>Concerts</h2>
                                        <p>06/01/2023</p>
                                    </div>
                                    <div className="sidebarRight__bottom--bottom2__session">
                                        <h2>Restaurants</h2>
                                        <p>03/12/2022</p>
                                    </div>
                                    <div className="sidebarRight__bottom--bottom2__session">
                                        <h2>Animaux</h2>
                                        <p>22/11/2022</p>
                                    </div>
                                </div>
                                <button className="submitButton__secondary">
                                    Voir toutes les sessions
                                </button>
                            </div>
                            <div className="sidebarRight__bottom--bottom2__graph">
                                <h1>
                                    Votes de la dernière session - "Concerts"
                                </h1>
                                <Image
                                    src="/piechart.png"
                                    width={400}
                                    height={280}
                                    alt="votes"
                                />
                                <button className="submitButton__secondary">
                                    Accéder aux résultats
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardStyle>
        </>
    );
};

export default Dashboard;
