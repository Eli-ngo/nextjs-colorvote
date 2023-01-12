import { useState, useEffect } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Image from 'next/image'
import { StartForm } from '../../components/form/startForm'

const Index = () => {

    const IndexStyle = styled.main`
        width: 100%;
        height: 100vh;
        background: #F4F4F4;
        color: #000000;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 60px 20px 20px 20px;
        font-family: 'Poppins', sans-serif;

        .container{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 50px;

            &__top{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                &--title{
                    font-size: 2rem;
                }
                &--guide{
                    font-size: 1rem;
                }
            }

            &__center{
                display: flex;
                justify-content: space-between;
                gap: 10px;
                align-items: center;
                flex-direction: column;
                
                &--form{
                    padding: 20px;
                    border-radius: 20px;
                    background: #ffffff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

                    &__box{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        margin-bottom: 20px;

                        label{
                            font-size: 0.8rem;
                            font-weight: bold;
                            text-transform: uppercase;
                        }
                        
                    }

                    &__input{
                        background: #DBDBDB;
                        margin-top: 5px;
                        padding: 20px;
                        border: none;
                        width: 100%;
                        border-radius: 10px;
                    }
                }
            }
        }
        .submitButton{
            background: #1363DA;
            color: #ffffff;
            padding: 20px 0;
            width: 100%;
            text-align: center;
            border-radius: 10px;
            font-weight: 700;
            font-size: 0.8rem;
        }
    `

    return(
        <>
            <Head>
                <title>Colorvote | Portail invité</title>
            </Head>
            <IndexStyle>
                <div class="container">
                    <div className="container__top">
                        <h1 className="container__top--title">
                            Invité(e)
                        </h1>
                        <p className="container__top--guide">Pour entrer dans la salle, inscrivez votre pseudo et le code PIN qui vous a été communiqué.</p>
                    </div>

                    <div className="container__center">
                        <StartForm />
                        <p>Vous êtes l&apos;admin ?</p>
                        {/* <Link href="/auth/signup"><a className='desktopRight__form--suggestion__action'>Par ici</a></Link> */}
                    </div>

                    <div className="container__bottom">
                        <Image src='/logo_mobile.svg' width={120} height={120} alt='colorvote logo' className='container__bottom--logo'/>
                    </div>
                </div>
            </IndexStyle>
        </>
    )
}

export default Index