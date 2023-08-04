import React from 'react'
import './Post.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faEllipsis, faHome, faSearch, faShareSquare, faSquare, faSquarePlus, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const Post = () => {
  return (
    <>
<Card id='over_all' className='bg-dark text-light my-4 p-2'>
<div className='card_top' style={{display:'flex', justifyContent:'space-between'}}>
<div className='card_top_left mx-3 my-3' style={{display:'flex'}}>
  <div className='profile_pic'>
    <img id='profile_pic' style={{ width: 50, height: 50, 'borderRadius':'50%' }} src="https://image.lexica.art/full_jpg/acf5676d-e1bb-47cf-8e64-b171543de0ec" alt="" />
  </div>
  <div className='profile_name mx-3'>
  <Card.Title>Jabaraj</Card.Title>
  <Card.Text className='time' style={{fontSize:13}}>2 days ago</Card.Text>
  </div>
</div>
<div className='card_top_left'>
<FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis}/>
</div>
</div>
<Card.Text className='mx-5'>
  Some quick example text.
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://b1694534.smushcdn.com/1694534/wp-content/uploads/2021/06/0-2.png?lossy=1&strip=1&webp=1" />
<Card.Body>
<div id='reactions' className=' mx-4'>
  <div className='rections_left'>
  <FontAwesomeIcon  id='icons' className='mx-2 text-warning' icon={faThumbsUp}/>
  <p>1.5k</p>
  </div>
  <div className='rections_right'>
    <p>245 Discussions</p>
  </div>
</div>
<div id='react'  className='react' >
  <div className='post_react' >
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsUp}/>
  <p className='my-auto'>Like</p>
  </div>
  <div className='post_react'>
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsDown}/>
  <p className='my-auto'>Dislike</p>
  </div>
  <div className='post_react'>
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faCommentDots}/>
  <p className='my-auto'>Discussion</p>
  </div>
</div>
</Card.Body>
</Card>

{/* //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}


<Card id='over_all' className='bg-dark text-light my-4 p-2'>
<div className='card_top' style={{display:'flex', justifyContent:'space-between'}}>
<div className='card_top_left mx-3 my-3' style={{display:'flex'}}>
  <div className='profile_pic'>
    <img id='profile_pic' style={{ width: 50, height: 50, 'borderRadius':'50%' }} src="https://image.lexica.art/full_jpg/acf5676d-e1bb-47cf-8e64-b171543de0ec" alt="" />
  </div>
  <div className='profile_name mx-3'>
  <Card.Title>Yogesh</Card.Title>
  <Card.Text className='time' style={{fontSize:13}}>2 days ago</Card.Text>
  </div>
</div>
<div className='card_top_left'>
<FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis}/>
</div>
</div>
<Card.Text className='mx-5'>
  Some quick example text.
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://miro.medium.com/v2/resize:fit:1154/0*t3KYKileDz-x9_cX.jpg" />
<Card.Body>
<div id='reactions' className=' mx-4'>
  <div className='rections_left'>
  <FontAwesomeIcon  id='icons' className='mx-2 text-warning' icon={faThumbsUp}/>
  <p>1.5k</p>
  </div>
  <div className='rections_right'>
    <p>245 Discussions</p>
  </div>
</div>
<div id='react'  className='react' >
  <div className='post_react' >
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsUp}/>
  <p className='my-auto'>Like</p>
  </div>
  <div className='post_react'>
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsDown}/>
  <p className='my-auto'>Dislike</p>
  </div>
  <div className='post_react'>
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faCommentDots}/>
  <p className='my-auto'>Discussion</p>
  </div>
</div>
</Card.Body>
</Card>

{/* //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}


<Card id='over_all' className='bg-dark text-light my-4 p-2'>
<div className='card_top' style={{display:'flex', justifyContent:'space-between'}}>
<div className='card_top_left mx-3 my-3' style={{display:'flex'}}>
  <div className='profile_pic'>
    <img id='profile_pic' style={{ width: 50, height: 50, 'borderRadius':'50%' }} src="https://image.lexica.art/full_jpg/acf5676d-e1bb-47cf-8e64-b171543de0ec" alt="" />
  </div>
  <div className='profile_name mx-3'>
  <Card.Title>Jabaraj</Card.Title>
  <Card.Text className='time' style={{fontSize:13}}>2 days ago</Card.Text>
  </div>
</div>
<div className='card_top_left'>
<FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis}/>
</div>
</div>
<Card.Text className='mx-5'>
  Some quick example text.
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://i.pinimg.com/550x/8c/94/ec/8c94ec39b195062704760144d455f6b4.jpg" />
<Card.Body>
<div id='reactions' className=' mx-4'>
  <div className='rections_left'>
  <FontAwesomeIcon  id='icons' className='mx-2 text-warning' icon={faThumbsUp}/>
  <p>1.5k</p>
  </div>
  <div className='rections_right'>
    <p>245 Discussions</p>
  </div>
</div>
<div id='react'  className='react' >
  <div className='post_react' >
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsUp}/>
  <p className='my-auto'>Like</p>
  </div>
  <div className='post_react'>
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsDown}/>
  <p className='my-auto'>Dislike</p>
  </div>
  <div className='post_react'>
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faCommentDots}/>
  <p className='my-auto'>Discussion</p>
  </div>
</div>
</Card.Body>
</Card>

{/* //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

<Card id='over_all' className='bg-dark text-light my-4 p-2'>
<div className='card_top' style={{display:'flex', justifyContent:'space-between'}}>
<div className='card_top_left mx-3 my-3' style={{display:'flex'}}>
  <div className='profile_pic'>
    <img id='profile_pic' style={{ width: 50, height: 50, 'borderRadius':'50%' }} src="https://image.lexica.art/full_jpg/acf5676d-e1bb-47cf-8e64-b171543de0ec" alt="" />
  </div>
  <div className='profile_name mx-3'>
  <Card.Title>Jabaraj</Card.Title>
  <Card.Text className='time' style={{fontSize:13}}>2 days ago</Card.Text>
  </div>
</div>
<div className='card_top_left'>
<FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis}/>
</div>
</div>
<Card.Text className='mx-5'>
  Some quick example text.
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://media.makeameme.org/created/working-as-a-zpw5m7.jpg" />
<Card.Body>
<div id='reactions' className=' mx-4'>
  <div className='rections_left'>
  <FontAwesomeIcon  id='icons' className='mx-2 text-warning' icon={faThumbsUp}/>
  <p>1.5k</p>
  </div>
  <div className='rections_right'>
    <p>245 Discussions</p>
  </div>
</div>
<div id='react'  className='react' >
  <div className='post_react' >
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsUp}/>
  <p className='my-auto'>Like</p>
  </div>
  <div className='post_react'>
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsDown}/>
  <p className='my-auto'>Dislike</p>
  </div>
  <div className='post_react'>
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faCommentDots}/>
  <p className='my-auto'>Discussion</p>
  </div>
</div>
</Card.Body>
</Card>

{/* //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}


<Card id='over_all' className='bg-dark text-light my-4 p-2'>
<div className='card_top' style={{display:'flex', justifyContent:'space-between'}}>
<div className='card_top_left mx-3 my-3' style={{display:'flex'}}>
  <div className='profile_pic'>
    <img id='profile_pic' style={{ width: 50, height: 50, 'borderRadius':'50%' }} src="https://image.lexica.art/full_jpg/acf5676d-e1bb-47cf-8e64-b171543de0ec" alt="" />
  </div>
  <div className='profile_name mx-3'>
  <Card.Title>Jabaraj</Card.Title>
  <Card.Text className='time' style={{fontSize:13}}>2 days ago</Card.Text>
  </div>
</div>
<div className='card_top_left'>
<FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis}/>
</div>
</div>
<Card.Text className='mx-5'>
  Some quick example text.
</Card.Text>
<Card.Img variant="top" style={{ marginLeft:'auto', marginRight:'auto' ,width:'90%', height:'65%'}} src="https://img-9gag-fun.9cache.com/photo/aegLm9O_460s.jpg" />
<Card.Body>
<div id='reactions' className=' mx-4'>
  <div className='rections_left'>
  <FontAwesomeIcon  id='icons' className='mx-2 text-warning' icon={faThumbsUp}/>
  <p>1.5k</p>
  </div>
  <div className='rections_right'>
    <p>245 Discussions</p>
  </div>
</div>
<div id='react'  className='react' >
  <div className='post_react' >
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsUp}/>
  <p className='my-auto'>Like</p>
  </div>
  <div className='post_react'>
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsDown}/>
  <p className='my-auto'>Dislike</p>
  </div>
  <div className='post_react'>
  <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faCommentDots}/>
  <p className='my-auto'>Discussion</p>
  </div>
</div>
</Card.Body>
</Card>

{/* //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}





    </>

  




  
  )
}

export default Post