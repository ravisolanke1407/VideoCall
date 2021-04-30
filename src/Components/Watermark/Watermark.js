import React from 'react'
import callLogo from '../../Icons/call-logo.svg'
import './Watermark.css'

function Watermark(){
    return (
        <div className="watermark">
            <img className="logoImage" src={callLogo} alt="RiYSA Logo"/>
            <span className="logoText">RiYSA</span>
        </div>
    )
}

export default Watermark