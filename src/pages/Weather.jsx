import { useEffect } from 'react'

const Weather = ({ setGradient }) => {

    const url = import.meta.env.VITE_WEATHER_URL;

    const gradient = "bg-linear-to-r to-blue-300 from-cyan-600";
    useEffect(() => {
        setGradient(gradient);
    }, [setGradient]);

    return (
        <iframe
            src={url}
            title="Embedded Content"
            width="100%"
            style={{
                height: "100vh",
            }}
        />
    )
}

export default Weather