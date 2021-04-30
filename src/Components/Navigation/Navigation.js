import React from 'react'
import callLogo from '../../Icons/call-logo.svg'
import GitHubButton from 'react-github-btn'
import '../Navigation/Navigation.css'

const Navigation = () => {
    return (
       
            <header className="dropShadow">
            <div className="headerWrapper">
                <div className="headerContainer flex">
                    <div className="headerLogoLinkWrapper">
                        <div className="headerLogoLink">
                        <a href='/'>
                            <div className="headerLogo flex flex-row">
                                <div className="logoImg">
                                    <img src={callLogo} alt="Cuckoo Logo"/>
                                </div>
                                <div className="logoText">
                                   RiYSA
                                </div>
                            </div>
                        </a>
                        </div>
                    </div>
                   
                </div>
            </div>
        </header>
   
       )
}
export default Navigation