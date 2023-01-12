import Head from 'next/head'
import styled from 'styled-components'

const Instructions = () => {

    const InstructionsStyle = styled.main`
        width: 100%;
        height: 100vh;
        background: #F4F4F4;
        color: #000000;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        font-family: 'Poppins', sans-serif;

        .container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 30px;

            &__top{
                display: flex;
                flex-direction: column;

                &--title{
                    font-size: 1.6rem;
                    text-align: center;
                }

                &--guide{
                    font-size: 1rem;
                }
            }

            &__center{
                width: 100%;
                height: 100%;
                background: #ffffff;
                border: 3px dashed #1363DA;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                border-radius: 20px;
                padding: 18px;
                display: flex;
                flex-direction: column;
                gap: 10px;

                &--label{
                    display: flex;
                    align-items: center;
                    font-weight: 700;
                    font-size: 0.8rem;
                    gap: 12px;

                    &:nth-child(2){
                        .container__center--label__color{
                            background: #B5D64E;
                        }
                    }
                    &:nth-child(3){
                        .container__center--label__color{
                            background: #FF9900;
                        }
                    }
                    &:nth-child(4){
                        .container__center--label__color{
                            background: #FF0000;
                        }
                    }
                    &:nth-child(5){
                        .container__center--label__color{
                            background: #680000;
                        }
                    }
                    &:nth-child(6){
                        .container__center--label__color{
                            background: #E0E0E0;
                        }
                    }
                    &:nth-child(7){
                        .container__center--label__color{
                            background: #000000;
                        }
                    }

                    &__color{
                        background: #055B0E;
                        width: 55px;
                        height: 55px;
                        border-radius: 20px;
                    }
                }
            }

            &__bottom{
                display: flex;
            }
        }

        .submitButton{
            background: #1363DA;
            color: #ffffff;
            padding: 10px 20px;
            width: 100%;
            text-align: center;
            border-radius: 10px;
            font-size: 0.8rem;
        }
    `


    return(
        <>
            <Head>
                <title>Colorvote | Instructions</title>
            </Head>
            <InstructionsStyle>
                <div className="container">
                    <div className="container__top">
                        <h1 className="container__top--title">
                            Comment ça marche ?
                        </h1>
                        <p className="container__top--guide">C’est très simple ! Donnez votre avis à l’aide du code couleur ci-dessous.</p>
                    </div>
                    <div className="container__center">
                        <div className="container__center--label">
                            <div className="container__center--label__color"></div>
                            <div className="container__center--label__name">Tout à fait d'accord</div>
                        </div>
                        <div className="container__center--label">
                            <div className="container__center--label__color"></div>
                            <div className="container__center--label__name">D'accord</div>
                        </div>
                        <div className="container__center--label">
                            <div className="container__center--label__color"></div>
                            <div className="container__center--label__name">Mitigé</div>
                        </div>
                        <div className="container__center--label">
                            <div className="container__center--label__color"></div>
                            <div className="container__center--label__name">Pas d'accord</div>
                        </div>
                        <div className="container__center--label">
                            <div className="container__center--label__color"></div>
                            <div className="container__center--label__name">Pas du tout d'accord</div>
                        </div>
                        <div className="container__center--label">
                            <div className="container__center--label__color"></div>
                            <div className="container__center--label__name">Je ne sais pas</div>
                        </div>
                        <div className="container__center--label">
                            <div className="container__center--label__color"></div>
                            <div className="container__center--label__name">Ne pas répondre</div>
                        </div>
                    </div>
                    <div className="container__bottom">
                        <button type='submit' className='submitButton'>J'ai compris</button>
                    </div>
                </div>
            </InstructionsStyle>
        </>
    )
}

export default Instructions