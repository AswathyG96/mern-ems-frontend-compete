import React from 'react'
import './Profile.css'
import { Card, Row } from 'react-bootstrap'


function Profile() {
  return (
    <>
    <div className="container">
      <Card className='shadow col-lg-6 mx-auto mt-4'>
        <Card.Body>
          <Row>
               <div className="col mt-5">
                <div className="profile_img d-flex justify-content-center" >
                <img className='rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDymdAdUothXSNXqLLqSDgm3R9PLS1DlVxhmyjFOasdeLfs4tfvpFzynhkSWz8VWANsHk&usqp=CAU" alt="" width={'200px'} height={'200px'} />
                </div>
               </div>
          </Row>
          <div className="text-center mt-2">
            <h3>Max Miller</h3>
            <h4><i className='fa-solid fa-envelope text-primary'></i>:-<span>max@gmail.com</span></h4>
            <h4><i className='fa-solid fa-mobile text-success'></i>:-<span>9876543411</span></h4>
            <h4><i className='fa-solid fa-venus-mars text-info'></i>:-<span>Male</span></h4>
            <h4><i className='fa-solid fa-location-dot text-danger'></i>:-<span>Brooklyn</span></h4>
            <h4><i className='fa-solid fa-chart-line text-warning'></i>:-<span>Active</span></h4>
          </div>
        </Card.Body>
      </Card>
    </div>
    
    </>
  )
}

export default Profile