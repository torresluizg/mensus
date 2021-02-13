import React, { useState } from 'react'
import './pendency.css'

function Pendency(){
    const [pendencies, setPendencies] = useState([{
        "check": false,
        "name": "Luiz Torres",
        "coordinator": "Candido Canaan de Carvalho Rocha",
        "date": "12/02/2021",
        "hour": "12:20",
    }])

    return(
        <div className="pendency">
            {pendencies.map( pendency => (
                <div className="pendency-item">
                    <div className="pendency-check">{pendency.check}aa</div>
                    <div className="pendency-name">{pendency.name}</div>
                    <div className="pendency-coordinator">{pendency.coordinator}</div>
                    <div className="pendency-date">{pendency.date}</div>
                    <div className="pendency-hour">{pendency.hour}</div>
                    <div className="pendency-aproval">
                        <button className="pendency-positive">S</button>
                        <button className="pendency-negative">N</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Pendency