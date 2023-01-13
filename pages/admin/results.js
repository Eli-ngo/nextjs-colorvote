import { useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery } from '@tanstack/react-query';
import { useState } from "react";

const Results = () => {

    const router = useRouter()
    const [results, setResults] = useState([])

    useEffect(() => {
        console.log(router.query)
    }, [])

    const getResults = () => {
        return fetch(`../../api/room/${router.query.id}`, {
            method: 'GET',
        }).then(res => res.json().then(data => {
            if (data.success) {
                setResults(data.data.question)
            }
        }))
    }

    const get = () => {
        console.log('get', router.query)
    }

    const _getResults = useQuery(['getResults'], getResults, {
        enabled: true,
        refetchOnWindowFocus: false,
    });

    if (_getResults.isLoading) {
        return <div>Chargement...</div>
    } else {
        return (
            <div>
                {results.length > 0 ? results.map((result, index) => {
                    return (
                        <div key={index}>
                            <div>
                                {result.answer.map((answer, index) => {
                                    return (
                                        <div key={index}>
                                            <h2>{answer.answer}</h2>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                }): <div>Pas de données...</div>}
            </div>
        )
    }
}

export default Results;