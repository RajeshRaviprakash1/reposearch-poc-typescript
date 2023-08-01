import { Link, useLocation } from "react-router-dom"
import { Header } from "../Header/Header";
import { IRepoModel } from "../../models/IRepoModel";
import './DetailsStyle.css'; 

export function Details()
{
    const location = useLocation();

    const jsonContent = JSON.stringify(location.state.repoItem);
    const repoContent = JSON.parse(jsonContent);

    const c_date = new Date(repoContent.created_at).toISOString().split('T')[0];
    const u_date = new Date(repoContent.updated_at).toISOString().split('T')[0];


    return(
        <div style={{marginLeft:'20px'}}>
            <Header/>
            <div style={{display:"flex",justifyContent:'center'}}>
            
            <div className="detailsFlex">
            <div style={{fontSize:'25px',padding:'10px'}}>Repository details</div>
                <div className="circular-image">
                    <img src={repoContent.owner.avatar_url} alt="BigCo"/>
                </div>
                <div style={{marginTop:'20px'}}>
                <div>
                {repoContent.full_name}
                </div>
                <div >
                {repoContent.owner.login}
                </div>
                <div style={{fontWeight:'bold', marginTop:'20px', marginBottom:'20px'}}>
                {repoContent.description}
                </div>
                <div>
                Created on  {c_date}
                </div>
                <div>
                Updated on {u_date}
                </div>

                <a href={repoContent.owner.html_url} target="_blank" rel="noreferrer">
                {repoContent.owner.html_url} </a>
                </div>
            </div>
            </div>
        </div>
    )
}
