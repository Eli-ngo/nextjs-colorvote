import React, {useState} from 'react'
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query'

export const StartForm = () => {
    const router = useRouter()
    const [pseudo, setPseudo] = useState('')
    const [code, setCode] = useState('')

    const validRoom = (e) => {
        e.preventDefault()

        if (pseudo.trim() === '' || code.trim() === '') {
            alert('Veuillez remplir tous les champs')
        } else  {
            createUser()
        }
    }

    const createUser = () => {
        return fetch("../../api/user", {
            method: 'POST',
            body: JSON.stringify({
                name: pseudo,
                token: "60e1f1b1b1b1b1b1b1b1b1b1"
            })
        }).then(res => res.json().then(data => {
            if (data.success) {
                goToRoom(data.data._id)
            }
        }))
    }

    const goToRoom = (id) => {
        return fetch("../../api/user/add_room", {
            method: 'POST',
            body: JSON.stringify({
                code: code,
                userId: id
            })
        }).then(res => res.json().then(data => {
            if (data.success) {
                router.push({
                    pathname: '/item/question',
                    query: { id: data.data._id, userId: id },
                })
            } else if (data.message === "Le code est incorrect") {
                alert('Code pin incorrect')
            }
        }))
    }

    const _goRoom = useQuery(['enterRoom'], goToRoom, {
        enabled: false
    });
    const _addUser = useQuery(['createUser'], createUser, {
        enabled: false
    });

    const handlePseudo = (e) => {
        e.preventDefault()
        setPseudo(e.target.value)
    }

    const handleCode = (e) => {
        e.preventDefault()
        setCode(e.target.value)
    }
    return (
        <form className="container__center--form">
            <div className="container__center--form__box">
                <label>Prénom</label>
                <input onChange={handlePseudo} className='container__center--form__input' type="text" placeholder='Votre prénom'/>
            </div>
            <div className="container__center--form__box">
                <label>Code PIN</label>
                <input onChange={handleCode} className='container__center--form__input' type="text" placeholder='Code pin'/>
            </div>
            <button type='submit' onClick={validRoom} className='submitButton'>Commencer</button>
        </form>
    )
}