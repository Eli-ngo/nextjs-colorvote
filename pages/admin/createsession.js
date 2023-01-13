import Head from 'next/head'
import Sidebar from '../../components/Sidebar'
import styled from 'styled-components';
import Image from 'next/image';
import ModalRenamesession from '../../components/ModalRenamesession';
import ModalItem from '../../components/ModalItem';
import { useState } from 'react';

const CreateSession = () => {

    const [ openModal, setOpenModal ] = useState(false);
    const [ openItem, setOpenItem ] = useState(false);

    const CreateStyle = styled.div`
        display: flex;
        font-family: "Poppins", sans-serif;

        .sidebarRight {
            padding: 40px;
            background: #f4f4f4;
            width: 85%;
            margin-left: 15%;
            height: 100vh;

            &__top {
                display: flex;
                justify-content: space-between;
                align-items: center;

                &--left {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 20px;

                    h1 {
                        span {
                            font-weight: lighter;
                        }
                    }
                }

                &--right {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 30px;

                    &__save {
                        background: #ebebeb;
                        color: #a7a7a7;
                        padding: 10px 60px;
                        text-align: center;
                        border-radius: 10px;
                        font-size: 1rem;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    }

                    &__start {
                        background: #57b257;
                        color: #ffffff;
                        padding: 10px 60px;
                        text-align: center;
                        border-radius: 10px;
                        font-size: 1rem;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    }
                }
            }

            &__bottom {
                margin-top: 30px;
                display: flex;
                align-items: flex-start;
                gap: 30px;

                &--items {
                    width: 60%;
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
                &--participants {
                    width: 40%;
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
        }
        .submitButton {
            background: #dce8f9;
            color: #1363da;
            padding: 10px 60px;
            text-align: center;
            border-radius: 10px;
            font-size: 1rem;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
    `;

    return (
        <>
            <Head>
                <title>Colorvote ADMIN | Créer une session</title>
            </Head>
            <CreateStyle>
                {openModal && <ModalRenamesession closeModal={setOpenModal}/>}
                {openItem && <ModalItem closeItem={setOpenItem}/>}
                <Sidebar />
                <div className="sidebarRight">
                    <div className="sidebarRight__top">
                        <div className="sidebarRight__top--left">
                            <h1>Nouvelle session - <span>Ma session du 13/01</span> </h1>
                            <button className="openModalBtn" onClick={() => {setOpenModal(true)}}>
                                <Image src='/edit.png' width={24} height={24} alt='modifier le nom de la session'/>
                            </button>
                            
                        </div>
                        <div className="sidebarRight__top--right">
                            <button className="sidebarRight__top--right__save">
                                Sauvegarder
                            </button>
                            <button className="sidebarRight__top--right__start">
                                Démarrer la session
                            </button>
                        </div>
                    </div>
                    <div className="sidebarRight__bottom">
                        <div className="sidebarRight__bottom--items">
                            <h1>Items</h1>
                            <p>Aucun item pour le moment. Vous pouvez créer les items avant de démarrer une session ou pendant celle-ci.</p>
                            <button className="submitButton" onClick={() => {setOpenItem(true)}}>Ajouter des items</button>
                        </div>
                        <div className="sidebarRight__bottom--participants">
                            <h1>Participants</h1>
                            <p>
                                Démarrez la session pour que les participants
                                puissent la rejoindre.
                            </p>
                            <button className="submitButton">
                                Afficher le code
                            </button>
                        </div>
                    </div>
                </div>
            </CreateStyle>
        </>
    );
};

export default CreateSession;
