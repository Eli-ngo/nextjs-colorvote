import Head from 'next/head'
import Sidebar from '../../components/Sidebar'
import styled from 'styled-components';

const CreateSession = () => {

    const CreateStyle = styled.div`
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

                &--left{
                    h1{
                        span{
                            font-weight: lighter;
                        }
                    }
                }
            }
        }
    `;

    return(
        <>
            <Head>
                <title>Colorvote ADMIN | Créer une session</title>
            </Head>
            <CreateStyle>
                <Sidebar />
                    <div className="sidebarRight">
                        <div className="sidebarRight__top">
                            <div className="sidebarRight__top--left">
                                <h1>Nouvelle session - <span>13/01/2023</span> </h1>
                            </div>
                            <div className="sidebarRight__top--right">
                                <button className="sidebarRight__top--right__save">Sauvegarder</button>
                                <button className="sidebarRight__top--right__start">Démarrer la session</button>
                            </div>
                        </div>
                    </div>
            </CreateStyle>

        </>
    )
}

export default CreateSession