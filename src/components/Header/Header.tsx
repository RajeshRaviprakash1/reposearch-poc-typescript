import React from 'react'
import githubLogo from './github_logo.png'

export const Header = () =>
{
    return (
        <div style={{display:'inline-flex', width:'100vw', height:'65px', alignContent: 'center', justifyContent: 'center', backgroundColor:'#f7f5f5'}}>
            <img src={githubLogo} height={35} width = {35} alt="GithubLogo" style={{marginTop: '20px'}}/>
            <label style={{marginTop: '28px', marginLeft: '10px'}}><b>GitHub</b></label>
        </div>
    )
}