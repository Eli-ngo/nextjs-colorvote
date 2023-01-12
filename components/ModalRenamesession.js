import styled from "styled-components";
import Image from "next/image";

const ModalRenamesession = ({ closeModal }) => {

    const AdditemStyle = styled.div`
        width: 100%;
        height: 100vh;
        background: #000000cc;
        position: absolute;
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Poppins', sans-serif;

        .modalContainer{
            background: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 40px;
            border-radius: 20px;
            gap: 20px;

            &__close{
                display: flex;
                width: 100%;
                justify-content: flex-end;
            }

            form{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 20px;

                input{
                    width: 400px;
                    padding: 10px;
                    border-radius: 10px;
                    border: solid 1px #a7a7a7;
                }
            }

            h1{
                font-size: 1.7rem;
                color: #1363DA;
            }

            .submitButton{
                background: #1363DA;
                color: #ffffff;
                padding: 10px 60px;
                text-align: center;
                border-radius: 10px;
                font-size: 1rem;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            }
        }
    `;

    return(
        <AdditemStyle>
            <div className="modalContainer">
                <div className="modalContainer__close">
                    <button onClick={() => closeModal(false)}> 
                        <Image src='/Cross.png' width={16} height={16} alt='fermer la modal'/>
                    </button>
                </div>
                <h1>Nom de la session</h1>
                <form>
                    <input type="text" placeholder="Le sport à l'école"/>
                    <button type="submit" className="submitButton">Sauvegarder</button>
                </form>
            </div>
        </AdditemStyle>
    )

}

export default ModalRenamesession;