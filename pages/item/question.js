import Head from 'next/head'
import styled from 'styled-components'
import PickerButton from '../../components/PickerButton'

const ItemDetails = () => {

    const ItemStyle = styled.main`
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
            gap: 40px;

            &__top{
                text-align: center;
                &--title{
                    font-size: 1.25rem;
                }
            }

            &__center{
                background: #ffffff;
                padding: 20px;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                border-radius: 20px;
                display: flex;
                flex-direction: column;
                gap: 10px;

                &--option{
                    border: 3px solid black;
                    border-left: 20px solid black;
                    padding: 14px 60px;
                    border-radius: 20px;
                }
            }
        }
    `

    return(
        <>
            <Head>
                <title>Colorvote | Item</title>
            </Head>
            
            <ItemStyle>
                <div className="container">
                    <div className="container__top">
                        <h1 className="container__top--title">Manger des ananas sur une pizza est un crime.</h1>
                    </div>
                    <div className="container__center">
                        {/* <div className="container__center--option">Tout à fait d'accord</div> */}
                        <PickerButton color="darkGreen">Tout à fait d'accord</PickerButton>
                        <PickerButton color="green">D'accord</PickerButton>
                        <PickerButton color="orange">Mitigé</PickerButton>
                        <PickerButton color="red">Pas d'accord</PickerButton>
                        <PickerButton color="darkRed">Pas du tout d'accord</PickerButton>
                        <PickerButton color="white">Je ne sais pas</PickerButton>
                        <PickerButton color="black">Ne pas répondre</PickerButton>
                    </div>
                    <div className="container__bottom">
                        <p>1/5</p>
                    </div>
                </div>
            </ItemStyle>
        </>
    )
}

export default ItemDetails