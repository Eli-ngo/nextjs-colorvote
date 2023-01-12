import Head from 'next/head'
import Sidebar from '../../components/Sidebar'
import styled from 'styled-components'

const Dashboard = () => {

    const DashboardStyle = styled.div`
        display: flex;
        font-family: 'Poppins', sans-serif;

        .sidebarRight{
            padding: 40px;
            background: #f4f4f4;
            width: 85%;

            &__top{
                display: flex;
                justify-content: space-between;
                align-items: center;

                &--right{
                    display: flex;
                    gap: 40px;

                    &__display{
                        padding: 10px 40px;
                        background: red; 
                    }
                }
            }
        }
    `

    return(
        <>
            <Head>
                <title>Colorvote | Dashboard Admin</title>
            </Head>
            <DashboardStyle>
                <Sidebar />
                <div className="sidebarRight">
                    <div className="sidebarRight__top">
                        <div className="sidebarRight__top--left">
                            <h1>Session en cours - <span>13/01/2023</span> </h1>
                        </div>
                        <div className="sidebarRight__top--right">
                            <button className="siderbarRight__top--right__display">Afficher les matrices</button>
                            <button className="siderbarRight__top--right__stop">Arrêter la session</button>
                        </div>
                    </div>
                    <div className="sidebarRight__bottom">

                    </div>
                </div>
            </DashboardStyle>

        </>
    )
}

export default Dashboard