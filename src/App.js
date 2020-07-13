import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import DataScreen from './DataScreen'
import PaginationBasic from './Pagination'

const App = () => {
 const[results,setResults] = useState(0);
 const[pageNumber,setPageNumber] = useState(1);

 const readResults =  (resultsCount) => {
   setResults(resultsCount)
 }

 const setPage = (number) =>{
  if(localStorage.getItem("PageNumber")){
    if(localStorage.getItem("PageNumber")!==number){
        localStorage.setItem("PageNumber", number);
        setPageNumber(number)
        }
        else{
            setPageNumber(number)
        }
   }
   else{

     setPageNumber(number)
     localStorage.setItem("PageNumber", number);

   }
 }

 useEffect(() => {
 if(localStorage.getItem("PageNumber")){
   setPageNumber(localStorage.getItem("PageNumber"));
   }

 });

  return (
    <Container className="p-3">
    <Jumbotron className="pb-1">
    <h1><Badge variant="secondary">Sriram Angajala</Badge></h1>
    <PaginationBasic results={results} setPage={setPage}/>
    <DataScreen pageNumber={pageNumber} readResults={readResults} />
    </Jumbotron>
  </Container>
    
  )
  };

export default App;
