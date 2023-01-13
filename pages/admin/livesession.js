import Head from 'next/head'
import Sidebar from '../../components/Sidebar'
import styled from 'styled-components';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import io from 'Socket.IO-client'

let socket;

const LiveSession = () => {
    const SessionStyle = styled.div`
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

                    &__display {
                        background: #ebebeb;
                        color: #a7a7a7;
                        padding: 10px 60px;
                        text-align: center;
                        border-radius: 10px;
                        font-size: 1rem;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    }

                    &__stop {
                        background: #d11a2a;
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
                gap: 30px;

                &--left {
                    width: 60%;
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                    &__current {
                        padding: 30px 60px;
                        background: #ffffff;
                        border-radius: 20px;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;

                        h2 {
                            font-size: 1.7rem;
                            color: #1363da;
                        }
                    }

                    &__slides {
                        display: flex;
                        justify-content: space-between;
                        gap: 100px;
                    }

                    &__details {
                        padding: 30px 60px;
                        background: #ffffff;
                        border-radius: 20px;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        gap: 20px;

                        h2 {
                            font-size: 1.7rem;
                            color: #1363da;
                        }
                    }

                    &__name {
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        gap: 20px;
                    }

                    &__actions {
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        gap: 20px;
                    }

                    &__item {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        gap: 200px;
                        padding: 10px 0;
                        border-bottom: solid 1px rgba(30, 30, 30, 0.2);
                    }
                }

                &--right {
                    width: 40%;
                    &__participants {
                        padding: 30px 60px;
                        background: #ffffff;
                        border-radius: 20px;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        gap: 20px;

                        h2 {
                            font-size: 1.7rem;
                            color: #1363da;
                        }
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

    const router = useRouter()
    const [room, setRoom] = useState()
    const [currentSlide, setCurrentSlide] = useState(1)
    const [display, setDisplay] = useState(false)

    const getRoom = () => {
        return fetch(`../../api/room/63bdef8c2461af1e8aac42c0`)
        .then(res => res.json().then(data => {
            setRoom(data.data)
        }))
    }

    useEffect(() => {
        socketInitializer()
        return () => {
            console.log("This will be logged on unmount");
          }
    }, [])

    const socketInitializer = async () => {
        await fetch('../../api/socket')
        socket = io()
      }

    useEffect(() => {
        getRoom()
    }, [])

    const _getRoom = useQuery(['getRoom'], getRoom, {
        enabled: true,
        refetchOnWindowFocus: false,
    })

    const renderItems = () => {
        return room.question.map((item, index) => {
            return(
                <li className='sidebarRight__bottom--left__item'>
                    <div className="sidebarRight__bottom--left__name">
                        <p>{index + 1}</p>
                        <p>{item.question}</p>
                    </div>
                    {/* <div className="sidebarRight__bottom--left__actions">
                        <Image src='/disabled_poll.png' width={20} height={20} alt='dashboard poll'/>
                        <Image src='/disabled_poll.png' width={20} height={20} alt='dashboard poll'/>
                        <Image src='/disabled_poll.png' width={20} height={20} alt='dashboard poll'/>
                    </div> */}
                </li>
            )
        })
    }

    const renderParticipants = () => {
        if (room.users.length === 0) {
            return <p>Aucun participant pour le moment. Affichez le code pour que des participants rejoignent la session.</p>
        } else {
            return room.users.map((item, index) => {
                return(
                    <p>{item.name}</p>
                )
            })
        }
    }

    // const prevItem = () => {
    //     if (currentSlide === 1) {
    //         setCurrentSlide(1)
    //     } else {
    //         setCurrentSlide(currentSlide - 1)
    //         socket.emit('itemSlide', currentSlide)
    //     }
    // }

    const goToResult = () => {
        console.log('go to result', room)
        router.push({
            pathname: '/admin/results',
            query: { id: room._id },
        })
    }

    const nextItem = () => {
        if (currentSlide === room.question.length) {
            setCurrentSlide(room.question.length)
        } else {
            setCurrentSlide(currentSlide + 1)
            socket.emit('itemSlide', currentSlide)
        }
    }

    const displayCode = () => {
        setDisplay(!display)
    }

    if (_getRoom.isLoading) {
        return <div>Loading...</div>
    } else {
        return(
            <>
                <Head>
                    <title>Colorvote ADMIN | Session en cours</title>
                </Head>
                <SessionStyle>
                    <Sidebar active="session"/>
                    <div className="sidebarRight">
                        <div className="sidebarRight__top">
                            <div className="sidebarRight__top--left">
                                <h1>Session en cours - <span>{room.name}</span> </h1>
                            </div>
                            <div className="sidebarRight__top--right">
                                <button onClick={goToResult} className="sidebarRight__top--right__display">Afficher les résultats</button>
                                <button className="sidebarRight__top--right__stop">Arrêter la session</button>
                            </div>
                        </div>
                        <div className="sidebarRight__bottom">
                                <div className="sidebarRight__bottom--left">
                                    <div className="sidebarRight__bottom--left__current">
                                        <div className="sidebarRight__bottom--left__slides">
                                            {/* <button onClick={prevItem}> ⬅️ </button> */}
                                                <h2>Question {currentSlide}/{room.question.length}</h2>
                                            <button onClick={nextItem}> ➡️ </button>
                                        </div>
                                        <p className="sidebarRught__bottom--left__sentence">
                                            {room.question[currentSlide - 1].question}
                                        </p>
                                    </div>
                                    <div className="sidebarRight__bottom--left__details">
                                        <h2>Items</h2>
                                        <ul>
                                            {renderItems()}
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebarRight__bottom--right">
                                    <div className="sidebarRight__bottom--right__participants">
                                        {renderParticipants()}
                                        {
                                            display ? <b>{room.code}</b> : <button onClick={displayCode} className="submitButton">Afficher le code</button>
                                        }
                                    </div>
                                </div>
                            </div>
                    </div>
                </SessionStyle>
    
            </>
        )
    }
}

export default LiveSession;
