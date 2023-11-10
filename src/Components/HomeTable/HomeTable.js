import React from 'react'
import { Card, Col, Dropdown, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function HomeTable() {
  return (
    <>
    <div className="container  mt-5">
        <Row>
            <div className="col">
       <Card className='shadow'>
    <Table className='align-items-center' responsive="sm">
        <thead className='thead-dark'>
         <tr className='table-dark'>
           <th>ID</th>
           <th>Full Name</th>
           <th>Email</th>
           <th>Gender</th>
           <th>Status</th>
           <th>Profile</th>
           <th>Action</th>
        </tr>
      </thead>
      <tr>
        <td>1</td>
        <td>Max Miller</td>
        <td>max@gmail.com</td>
        <td>M</td>
        <td>  <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
       Active
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >Active</Dropdown.Item>
        <Dropdown.Item>InActive</Dropdown.Item>
        
      
      </Dropdown.Menu>
    </Dropdown></td>
    <td><img className='rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDymdAdUothXSNXqLLqSDgm3R9PLS1DlVxhmyjFOasdeLfs4tfvpFzynhkSWz8VWANsHk&usqp=CAU" alt="" width={'50px'} height={'50px'} />
    </td>
    <td>  <Dropdown>
      <Dropdown.Toggle variant='light'  id="dropdown-basic1">
     <i class="fa-solid fa-ellipsis-vertical fs-4"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >
            <Link to={'/profile/1'} className='text-decoration-none'> <i className="fa-solid fa-eye text-success me-2 fs-5"></i>
            <span className='fs-5 text-dark'>View</span></Link>
            </Dropdown.Item>
        <Dropdown.Item>
        <Link to={'/edit/1'} className='text-decoration-none'> <i className="fa-solid fa-pen text-priamry me-2 fs-5"></i>
            <span className='fs-5 text-dark'>Edit</span></Link>
            </Dropdown.Item>
       
            <Dropdown.Item>
       <i className="fa-solid fa-trash text-dark me-2 fs-5"></i>
            <span className='fs-5 text-dark'>Delete</span>
            </Dropdown.Item>
       
      
      </Dropdown.Menu>
    </Dropdown></td>
      </tr>
    </Table>
        </Card>
            </div>
        </Row>
        
        </div></>
  )
}

export default HomeTable