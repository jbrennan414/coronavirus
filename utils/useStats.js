import { useState, useEffect } from 'react';

export default function useStats(url){

    const [stats, setStats] = useState();
    useEffect(()=> {
        console.log("Fetching Data")
        async function fetchData(){
            const data = await fetch(url).then(res => 
                res.json()
            );
            setStats(data);
        }
        fetchData();
    }, []);

    return stats;
}