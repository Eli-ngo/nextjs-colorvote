import Head from 'next/head'
import styled from 'styled-components'
import PickerButton from '../../components/PickerButton'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'

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

            &__bottom{
                font-weight: 700;
            }
        }
    `
    const router = useRouter()
    const [question, setQuestion] = useState([])
    const [answer, setAnswer] = useState()

    useEffect(() => {
        console.log(answer)
    }, [question])

    useEffect(() => {
        getQuestion()
    }, [])

    const getQuestion = () => {
        return fetch(`http://localhost:3000/api/room/${router.query.id}`, {
            method: 'GET',
        }).then(res => res.json().then(data => {
            if (data.success) {
                setQuestion(data.data.question)
            }
        }))
    }

    const getQuestions = useQuery(['getQuestions'], getQuestion, {
        enabled: true,
        refetchOnWindowFocus: false
    })

    const handleVote = (e) => {
        e.preventDefault()
        setAnswer(e.target.value)
    }

    if (getQuestions.isLoading) {
        return <div>Loading...</div>
    } else {
        return(
            <>
                <Head>
                    <title>Colorvote | Item</title>
                </Head>
                
                <ItemStyle>
                    <div className="container">
                        <div className="container__top">
                            <h1 className="container__top--title">{question && question[1]?.question}</h1>
                        </div>
                        <div className="container__center">
                            {/* <div className="container__center--option">Tout à fait d'accord</div> */}
                            <PickerButton value={0} onClick={handleVote} color="darkGreen">Tout à fait d'accord</PickerButton>
                            <PickerButton value={1} onClick={handleVote} color="green">D'accord</PickerButton>
                            <PickerButton value={2} onClick={handleVote} color="orange">Mitigé</PickerButton>
                            <PickerButton value={3} onClick={handleVote} color="red">Pas d'accord</PickerButton>
                            <PickerButton value={4} onClick={handleVote} color="darkRed">Pas du tout d'accord</PickerButton>
                            <PickerButton value={5} onClick={handleVote} color="white">Je ne sais pas</PickerButton>
                            <PickerButton value={6} onClick={handleVote} color="black">Ne pas répondre</PickerButton>
                        </div>
                        <div className="container__bottom">
                            <p>1/5</p>
                        </div>
                    </div>
                </ItemStyle>
            </>
        )
    }
}

export default ItemDetails