import useStats from '../utils/useStats';

export default function CountrySelector(){
    const countries = useStats("https://covid19.mathdro.id/api/countries");
    if (!countries){return <p>Loading...</p>}
    console.log(countries)
    return (
        <div>
            <select>
                {Object.entries(countries.countries).map(( 
                    [country, code]) => {
                        return <option key={code} value={code}>
                            {country}
                        </option>
                    })}
                )}    
            </select>            
        </div>
    );
}