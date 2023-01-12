import Head from 'next/head'
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const SignIn = () => {

    const SigninStyle = styled.main`
        width: 100%;
        height: 100vh;
        display: flex;
        background: #f4f4f4;
        font-family: 'Poppins', sans-serif;

        .containerLeft{
            width: 60%;
            height: 100vh;
            background: #f4f4f4;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;

            &__container{
                background: #ffffff;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 20px;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                border-radius: 20px;

                h1{
                    font-size: 2rem;
                    color: #1363DA;
                    margin-bottom: 20px;
                }

                &--form{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                }

                &--box{
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    label{
                            font-size: 0.8rem;
                            font-weight: bold;
                            text-transform: uppercase;
                    }
                }
                
                &--input{
                        background: #DBDBDB;
                        margin-top: 5px;
                        padding: 20px;
                        border: none;
                        border-radius: 10px;
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

        .containerRight{
            width: 40%;
            height: 100vh;
            background: #f4f4f4;
            background: url('/signin_bg.png') no-repeat 0 100% / cover;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            flex-direction: column;
            padding-bottom: 40px;
        }

        .noAccount{
            span{
                color: #1363DA;
                font-weight: bold;
            }
        }
    `;

    return(
        <>
            <Head>
                <title>Colorvote ADMIN | Connexion</title>
            </Head>
            <SigninStyle>
                <div className="containerLeft">
                    <h1>Admin</h1>
                    <div className="containerLeft__container">
                        <form className="containerLeft__container--form">
                            <div className="containerLeft__container--box">
                                <label>Pseudo</label>
                                <input className='containerLeft__container--input' type="text" placeholder='Votre pseudo'/>
                            </div>
                            <div className="containerLeft__container--box">
                                <label>Mot de passe</label>
                                <input className='containerLeft__container--input' type="text" placeholder='Votre mot de passe'/>
                            </div>
                            <Link href="#">
                                Mot de passe oublié ?
                            </Link>
                            <button type='submit' className='submitButton'>Se connecter</button>
                        </form>
                    </div>
                    <p className="noAccount">Vous n'avez pas encore de compte ? <span>Inscrivez-vous</span></p>
                </div>
                <div className="containerRight">
                    <Image src='/colorvote_logo_admin.png' width={298} height={48} alt='colorvote logo'/>
                </div>
            </SigninStyle>
        </>
    )
}

export default SignIn