import React from 'react'
import './Register.css'
import { Card, Form,Button, Row } from 'react-bootstrap'
import Select from 'react-select';
function Register() {

  const option =[
    {value:'Active', label:'Active'},
    {value:'Inactive',label:'Inactive'}
  ]

  return (
    <>
    <div className="container mt-5">
      <h2 className='text-center mt-3'>Register Employee Details</h2>
      <Card className='shadow mt-3 p-3'>
        <div className="text-center mb-3">
        <img className=' border p-1 rounded-circle' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDymdAdUothXSNXqLLqSDgm3R9PLS1DlVxhmyjFOasdeLfs4tfvpFzynhkSWz8VWANsHk&usqp=CAU" alt="" width={'50px'} height={'50px'} />

        </div>
        <Form>
          <Row>
            
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicfname">
        <Form.Label>Fist Name</Form.Label>
        <Form.Control type="text" name='fname' placeholder="First Name" />
       </Form.Group>
       <Form.Group className="mb-3 col-lg-6" controlId="formBasiclname">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name='lname' placeholder="Last Name" />
       </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicemail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="text" name='email' placeholder="Email Address" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicmobile">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" name='mobile'    placeholder="Mobile Number" />
       </Form.Group>
       <Form.Group className="mb-3 col-lg-6" controlId="formBasicgender">
        <Form.Label> Selete Gender</Form.Label>
        <Form.Check

            type={'radio'}
            label={`Male`}
            name='gender'
            value={`male`}
          />
        <Form.Check

            type={'radio'}
            label={`Female`}
            name='gender'
            value={`Female`}
          />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicstatus">
        <Form.Label>Select Employee Status</Form.Label>
        <Select options={option}></Select>
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicmobile">
        <Form.Label>Choose Profile Picture</Form.Label>
        <Form.Control type="file" name='user_profile'/>
       </Form.Group>
       <Form.Group className="mb-3 col-lg-6" controlId="formBasicmobile">
        <Form.Label>Enter Employee Location</Form.Label>
        <Form.Control type="text" name='location'    placeholder="Enter Employee Location" />
       </Form.Group>
       <Button className='mt-3' variant='primary'  type='submit'>Submit</Button>
      </Row>
        </Form>
      </Card>

    </div>
    
    
    </>
  )
}

export default Register