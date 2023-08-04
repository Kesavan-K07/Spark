import React from 'react'
import Navbar from './navbar';
import "../components/main.css"
import {MDBCard,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardImage} from 'mdb-react-ui-kit'

const Front = () => {
  return (
    <>
    <Navbar/>

    <div className='container-fluid bg-dark'>
    
    
      <MDBCard className='MDB  mb-3'>
        <MDBCardImage position='top' src='https://mdbootstrap.com/img/new/slides/041.webp' alt='...' />
        <MDBCardBody>
            <img  src='https://nanny.org/wp-content/uploads/2021/11/profile-square.jpeg' alt='' className='profile_pic rounded-circle'/>
          <MDBCardTitle className='mx-2'>Reshmi</MDBCardTitle>
          <MDBCardText className='mx-2'>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className='MDB mb-3'>
        <MDBCardBody>
     <div className='d-flex '>
        <img  src='https://nanny.org/wp-content/uploads/2021/11/profile-square.jpeg' alt='' className=' rounded-circle' style={{width:"6vw"}}/>
          <MDBCardTitle className='text-center'>Card title</MDBCardTitle></div>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            content is a little bit longer.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
        <MDBCardImage position='bottom' src='https://mdbootstrap.com/img/new/slides/042.webp' alt='...' />
      </MDBCard>
    
      <MDBCard className='MDB mb-3'>
        <MDBCardBody>
     <div className='d-flex '>
        <img  src='https://nanny.org/wp-content/uploads/2021/11/profile-square.jpeg' alt='' className=' rounded-circle' style={{width:"6vw"}}/>
          <MDBCardTitle className='text-center'>Card title</MDBCardTitle></div>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            content is a little bit longer.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
        <MDBCardImage position='bottom' src='https://cdn.pixabay.com/photo/2023/05/08/08/41/ai-7977962_1280.png' alt='...' />
      </MDBCard>


      <MDBCard className='MDB mb-3'>
        <MDBCardBody>
     <div className='d-flex'>
        <img  src='https://nanny.org/wp-content/uploads/2021/11/profile-square.jpeg' alt='' className=' rounded-circle' style={{width:"6vw"}}/>
          <MDBCardTitle className='text-center'>Card title</MDBCardTitle></div>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            content is a little bit longer.
          </MDBCardText>
          <MDBCardText>
            <small clas
            sName='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
        <MDBCardImage position='bottom' src='https://e0.pxfuel.com/wallpapers/766/945/desktop-wallpaper-custom-software-development-graphic-design-computer-program.jpg' alt='...' />
      </MDBCard>

      <MDBCard className='MDB mb-3'>
        <MDBCardBody>
     <div className='d-flex '>
        <img  src='https://nanny.org/wp-content/uploads/2021/11/profile-square.jpeg' alt='' className=' rounded-circle' style={{width:"6vw"}}/>
          <MDBCardTitle className='text-center'>Card title</MDBCardTitle></div>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            content is a little bit longer.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
        <MDBCardImage position='bottom' src='https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2150394443.jpg?w=740&t=st=1690891762~exp=1690892362~hmac=fa3ec135f46f1de2ef9e4cff3fb0ebbdf1a6251815eafe608a44ba9cd515d1f8' alt='...' />
      </MDBCard>

      <MDBCard className='MDB mb-3'>
        <MDBCardBody>
     <div className='d-flex '>
        <img  src='https://nanny.org/wp-content/uploads/2021/11/profile-square.jpeg' alt='' className=' rounded-circle' style={{width:"6vw"}}/>
          <MDBCardTitle className='text-center'>Card title</MDBCardTitle></div>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            content is a little bit longer.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
        <MDBCardImage position='bottom' src='https://img.freepik.com/premium-photo/futuristic-human-robot-artificial-intelligence-concept_398492-8794.jpg' alt='...' />
      </MDBCard>

      <MDBCard className='MDB mb-3'>
        <MDBCardBody>
     <div className='d-flex '>
        <img  src='https://nanny.org/wp-content/uploads/2021/11/profile-square.jpeg' alt='' className=' rounded-circle' style={{width:"6vw"}}/>
          <MDBCardTitle className='text-center'>Card title</MDBCardTitle></div>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            content is a little bit longer.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
        <MDBCardImage position='bottom' src='https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1dX1YG.img' alt='...' />
      </MDBCard>



     </div>



    </>
  );
}
export default Front