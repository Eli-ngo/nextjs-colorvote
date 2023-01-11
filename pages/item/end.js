import Head from 'next/head'
import styled from 'styled-components'
import Image from 'next/image'

const End = () => {

    const EndStyle = styled.main`
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
            justify-content: space-between;
            align-items: center;
            gap: 100px;
        }
    `

    return(
        <>
            <Head>
                <title>Colorvote | Fin de la session</title>
            </Head>
            <EndStyle>
                <div className="container">
                    <div className="container__top">
                        <p className="container__center--sentence">
                        Bravo vous êtes arrivé(e) à la fin ! <br />
                        Merci d&apos;avoir répondu.
                        </p>
                    </div>
                    <div className="container__center">
                        <h1 className="container__center--over">
                            C'est fini !
                        </h1>
                        <Image src='/balloons.png' width={140} height={140} alt='balloons' className='container__center--balloons'/>
                    </div>
                    <div className="container__bottom">
                        <Image src='/logo_mobile.svg' width={120} height={120} alt='colorvote logo' className='container__bottom--logo'/>
                    </div>
                </div>
            </EndStyle>
        </>
    )
}

export default End