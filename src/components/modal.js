import React from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css" 
import{Modal,Button} from "react-bootstrap"
function ModalDialog(){
    const [isShow,invokeModel] = React.useState(false)
    const initModal = ( ) =>{
        return invokeModel(!false)
    }
 


 return (
    <>
      <Button variant="success" onClick={initModal}>
        Open Modal
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>React Modal Popover Example</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={initModal}>
            Close
          </Button>
          <Button variant="dark" onClick={initModal}>
            Store
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalDialog







// const Modal=()=>{
// return(  
// <div className='modalBackground'>
//     <div className='modalContainer'>
//         <button>X</button>
//     <div className='tittle'>
//         <h1>Are You Sure You Want To Continue?</h1>
         
//     </div>
//     <div className='body'>
//         <p></p>
//     </div>
//     <div className='footer'>
//         <button className=''>Cancel</button>
//         <button>Continue</button>
//     </div>
//     </div>
// </div>



// );

// }

//  export default Modal









