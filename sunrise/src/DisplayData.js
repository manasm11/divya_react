import React from 'react'

function DisplayData({data}) {
    if (!data) {
        return <h3>Please select a date to show astronomy data.</h3>
    }
    return (
        <div>
            <h1>SUNRISE</h1>
            {data.sunrise}
            <h1>SUNSET</h1>
            {data.sunset}
            <h1>MOONRISE</h1>
            {data.moonrise}
            <h1>MOONSET</h1>
            {data.moonset}
        </div>
    )
}

export default DisplayData
