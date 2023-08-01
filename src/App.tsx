import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { Grid } from './components/Grid/Grid';
import {Form} from './components/Form/Form'
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { Details } from './components/Details/Details';
import { IRepoModel } from './models/IRepoModel';

function App() {
  const [repositories, setRepositories] = useState([] as IRepoModel[]);
  const getRepositiries = async (name: string):Promise<void> => {
    try{
    const response = await fetch(`${process.env.REACT_APP_GITHUB_BASE_URL}users/${name}/repos`);
    const responseData = await response.json();
    const jsonData1: IRepoModel[] = responseData;
    if(responseData === null || responseData === '' || responseData?.message === 'Not Found')
    {
      setRepositories([] as IRepoModel[]);
    }
    else{
      setRepositories(jsonData1);

    }
  }
  catch(ex)
  {
    console.log('Exception : ',ex);
  }
}
  return (

    <Routes>

      <Route path='/' element = {
        <div>
        <Header/>
        <div style={{marginTop:'20px', marginBottom:'20px', textAlign: 'center'}}><b>Search Repositories by Language, User or Name</b></div>

        <Form updateRepositories={getRepositiries} />
        <h1 style={{textAlign: 'center'}}>Github Repositories </h1>

        <Grid repos={repositories}/>
        </div>
      }>
      </Route>
      <Route path='/details' element = {
        <Details/>
      }>
      </Route>
    </Routes>
    )
}

export default App;