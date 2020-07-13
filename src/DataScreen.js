import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';

const DataScreen = ({pageNumber,readResults}) => {
  const url = 'http://nyx.vima.ekt.gr:3000/api/books'
  const [data, setData] = useState([])

  const headers = {
    'Content-Type': 'application/json'
  }

  const apiData = {
    'page':parseInt(pageNumber),
    'itemsPerPage':200,
    "filters":[]
  }

  
  useEffect(() => {
   axios.post(url,{data:apiData},{
    headers: headers
  }).then(json => {
   readResults(json.data.count)
    setData(json.data.books)
   })
    // axios.get('https://jsonplaceholder.typicode.com/todos').then(json => setData(json.data))
  }, [pageNumber])

  return (
    <Container className="p-3">
    <Jumbotron className="pb-1">
    <div>
      <h1 id="title">Books</h1>
      <Table striped bordered hover variant="dark" responsive id="users">
        <thead>
          <tr>
            <th>Author</th>
            <th>City</th>
            <th>Country</th>
            <th>Year</th>
            <th>Pages</th>
            <th>Title</th>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>{
          
        data.map(list => 
        <tr key={list.id}>
          
           <td>{list.book_author}</td>
           <td>{list.book_publication_city}</td>
           <td>{list.book_publication_country}</td>
          <td>{list.book_publication_year}</td>
          <td>{list.pages}</td>
          <td>{list.book_title}</td>
          <td>{list.id}</td>
        </tr>
        
        )
        }</tbody>
      </Table>
    </div>
      
    </Jumbotron>
  </Container>
    
  )




  
  };

export default DataScreen;
