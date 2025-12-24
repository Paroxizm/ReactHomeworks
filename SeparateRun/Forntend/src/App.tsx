import {useEffect, useState} from 'react'
import './App.css'
import axios from "axios";

interface IWeatherItem {

    date: string,
    temperatureC: number,
    summary: string | undefined,
    temperatureF: number
}

function App() {

    const [weather, setWeather] = useState<IWeatherItem[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        setError("");

        axios.get('http://localhost:5225/weatherforecast')
            .then(response => {
                console.log(response);
                return response.data as IWeatherItem[]
            })
            .then(data => setWeather(data))
            .catch(err => {
                setWeather([])
                setError(err.message)
            });
    }, []);

    return (
        <>
            <p className={"title"}>Прогноз погоды в городе N</p>
            
            <div className={"frame"}>
        <table>
            <thead>
            <tr>
                <th>Дата</th>
                <th>Описание</th>
                <th>Температура (°C)</th>
                <th>Температура (°F)</th>
            </tr>
            </thead>
            <tbody>
                {weather.map((item) => (
                    <tr key={item.date}>
                        <td>{item.date}</td>
                        <td>{item.summary}</td>
                        <td>{item.temperatureC}</td>
                        <td>{item.temperatureF}</td>
                    </tr>
                ))}
            </tbody>
        </table>
            </div>

            <p className={"comment"}>
                Посмотрев прогноз, Остап Сулейман Берта Мария Бендер бей, известный также как Бендер Ибрагимович Задунайский,
                в турне по городу N взял плавки, шубу и скафандр.
            </p>
            
            {error && <p className={"error"}>{error}</p>}
        </>
    )
}

export default App
