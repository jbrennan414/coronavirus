import useStats from '../utils/useStats';

function Stats(){

    const stats = useStats("https://covid19.mathdro.id/api");
    if (!stats){return <p>Loading...</p>}
    console.log(stats)
    return (
        <div>
            <div className="statBlock">
                <h3>Confirmed:</h3>
                <span>{stats.confirmed.value}</span>
            </div>
            <div className="statBlock">
                <h3>deaths:</h3>
                <span>{stats.deaths.value}</span>
            </div>
            <div className="statBlock">
                <h3>recovered:</h3>
                <span>{stats.recovered.value}</span>
            </div>
        </div>
    );
}

export default function IndexPage(){
    return (
        <Stats></Stats>
    )
}