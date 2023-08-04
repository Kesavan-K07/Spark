// import React from 'react';
// import './Profile.css'
// import Card from 'react-bootstrap/Card';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCommentDots, faEllipsis, faHome, faSearch, faShareSquare, faSquare, faSquarePlus, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
// import Sub_NavBar from './Sub_NavBar';

// const Profile = () => {
//   return (
//     <>
//       <Sub_NavBar />
//       <div className="container-fluid" style={{ backgroundImage: `url("https://wallpaperaccess.com/full/1526041.jpg")` }}>
//         <div className="row">
//           <div className="col-lg-2"></div>
//           <div className="col-lg-9 col-md-12 col-sm-12">
//             <div className='text-light'>
//               <img style={{ width: '100%', height: '45vh' }} src="https://www.photofunny.net/i/4285_customizable-cover-photo-for-facebook-with-cat-with-sunglass.jpg" />

//               <img style={{ width: '25vh', height: '25vh', borderRadius: '12.5vh', marginTop: '-12vh', marginLeft: '10vh' }} src="https://scontent.fcjb6-1.fna.fbcdn.net/v/t1.6435-9/135803447_1913100415526329_8197056743435403936_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hixBoRwA3ZMAX_5NJ0G&_nc_ht=scontent.fcjb6-1.fna&oh=00_AfCKypWdYxqTqGjyiVYQtrWfqP461ys1UefTRQQZjQh9Aw&oe=64F0675A" alt="" />
//               <div style={{ marginTop: '-12vh', marginLeft: '40vh' }}>
//                 <h2>Jaba raj</h2>
//                 <p>213 friends</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-2"></div>
//         </div>




//         <div className="row">
//           <div id='SideBar' className="col-lg-2"></div>
//           <div id='SideBar' className="col-lg-9">
//             <Card id='over_all' className='bg-dark text-light my-4 p-2'>
//               <div className='card_top' style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <div className='card_top_left mx-3 my-3' style={{ display: 'flex' }}>
//                   <div className='profile_pic'>
//                     <img id='profile_pic' style={{ width: 50, height: 50, 'borderRadius': '50%' }} src="https://image.lexica.art/full_jpg/acf5676d-e1bb-47cf-8e64-b171543de0ec" alt="" />
//                   </div>
//                   <div className='profile_name mx-3'>
//                     <Card.Title>Jabaraj</Card.Title>
//                     <Card.Text className='time' style={{ fontSize: 13 }}>2 days ago</Card.Text>
//                   </div>
//                 </div>
//                 <div className='card_top_left'>
//                   <FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis} />
//                 </div>
//               </div>
//               <Card.Text className='mx-5'>
//                 <span className='text-primary mx-1'>#WebDev</span> Some quick example text.
//               </Card.Text>
//               <Card.Img id='cardImg' variant="top" src="https://pbs.twimg.com/media/Cpwoac3UMAAd3Ax.jpg" />
//               <Card.Body>
//                 <div id='reactions' className=' mx-4'>
//                   <div className='rections_left'>
//                     <FontAwesomeIcon id='icons' className='mx-2 text-warning' icon={faThumbsUp} />
//                     <p>1.5k</p>
//                   </div>
//                   <div className='rections_right'>
//                     <p>245 Discussions</p>
//                   </div>
//                 </div>
//                 <div id='react' className='react' >
//                   <div className='post_react' >
//                     <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsUp} />
//                     <p className='my-auto'>Like</p>
//                   </div>
//                   <div className='post_react'>
//                     <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsDown} />
//                     <p className='my-auto'>dislike</p>
//                   </div>
//                   <div className='post_react'>
//                     <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faCommentDots} />
//                     <p className='my-auto'>discussion</p>
//                   </div>
//                 </div>
//               </Card.Body>
//             </Card>

//             {/* //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

//             <Card id='over_all' className='bg-dark text-light my-4 p-2'>
//               <div className='card_top' style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <div className='card_top_left mx-3 my-3' style={{ display: 'flex' }}>
//                   <div className='profile_pic'>
//                     <img id='profile_pic' style={{ width: 50, height: 50, 'borderRadius': '50%' }} src="https://image.lexica.art/full_jpg/acf5676d-e1bb-47cf-8e64-b171543de0ec" alt="" />
//                   </div>
//                   <div className='profile_name mx-3'>
//                     <Card.Title>Jabaraj</Card.Title>
//                     <Card.Text className='time' style={{ fontSize: 13 }}>2 days ago</Card.Text>
//                   </div>
//                 </div>
//                 <div className='card_top_left'>
//                   <FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis} />
//                 </div>
//               </div>
//               <Card.Text className='mx-5'>
//                 <span className='text-primary mx-1'>#WebDev</span> Some quick example text.
//               </Card.Text>
//               <Card.Img id='cardImg' variant="top" src="https://assets-global.website-files.com/5f4bb8e34bc82700bda2f385/603ec500edb451589534eeb0_81YmKOYspf0R4L_mtVjwghgdnMznvWbvXNA3X4WjNrydSA3_UFdZtt_I5PRc7iYWrgTQRZlgrHjqMimDv0Nugx_pAUQyywbMwKYq_OOM-TkS36qqGNiaWSVRR5JKYyVrOqNIBubP.jpeg" />
//               <Card.Body>
//                 <div id='reactions' className=' mx-4'>
//                   <div className='rections_left'>
//                     <FontAwesomeIcon id='icons' className='mx-2 text-warning' icon={faThumbsUp} />
//                     <p>1.5k</p>
//                   </div>
//                   <div className='rections_right'>
//                     <p>245 Discussions</p>
//                   </div>
//                 </div>
//                 <div id='react' className='react' >
//                   <div className='post_react' >
//                     <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsUp} />
//                     <p className='my-auto'>Like</p>
//                   </div>
//                   <div className='post_react'>
//                     <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsDown} />
//                     <p className='my-auto'>dislike</p>
//                   </div>
//                   <div className='post_react'>
//                     <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faCommentDots} />
//                     <p className='my-auto'>discussion</p>
//                   </div>
//                 </div>
//               </Card.Body>
//             </Card>

//             {/* //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

//             <Card id='over_all' className='bg-dark text-light my-4 p-2'>
//               <div className='card_top' style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <div className='card_top_left mx-3 my-3' style={{ display: 'flex' }}>
//                   <div className='profile_pic'>
//                     <img id='profile_pic' style={{ width: 50, height: 50, 'borderRadius': '50%' }} src="https://image.lexica.art/full_jpg/acf5676d-e1bb-47cf-8e64-b171543de0ec" alt="" />
//                   </div>
//                   <div className='profile_name mx-3'>
//                     <Card.Title>Jabaraj</Card.Title>
//                     <Card.Text className='time' style={{ fontSize: 13 }}>2 days ago</Card.Text>
//                   </div>
//                 </div>
//                 <div className='card_top_left'>
//                   <FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis} />
//                 </div>
//               </div>
//               <Card.Text className='mx-5'>
//                 <span className='text-primary mx-1'>#WebDev</span> Some quick example text.
//               </Card.Text>
//               <Card.Img id='cardImg' variant="top" src="https://assets-global.website-files.com/5f4bb8e34bc82700bda2f385/603ec5023c4ad8fde1783428_Ij2FnlaQX3wZEqCdfWmynR3kTFRlelaf-BXa21868XGfGWQiBv5FISkffcRaUhXrgoKiMX9FiLDGZ2jxwKGdt_vTyGUVHlqcm9uMjUBNQRgltzfgD3TulNwNixxWI2R3ay9vcAc7.jpeg" />
//               <Card.Body>
//                 <div id='reactions' className=' mx-4'>
//                   <div className='rections_left'>
//                     <FontAwesomeIcon id='icons' className='mx-2 text-warning' icon={faThumbsUp} />
//                     <p>1.5k</p>
//                   </div>
//                   <div className='rections_right'>
//                     <p>245 Discussions</p>
//                   </div>
//                 </div>
//                 <div id='react' className='react' >
//                   <div className='post_react' >
//                     <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsUp} />
//                     <p className='my-auto'>Like</p>
//                   </div>
//                   <div className='post_react'>
//                     <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsDown} />
//                     <p className='my-auto'>dislike</p>
//                   </div>
//                   <div className='post_react'>
//                     <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faCommentDots} />
//                     <p className='my-auto'>discussion</p>
//                   </div>
//                 </div>
//               </Card.Body>
//             </Card>

//             {/* //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

//             <Card id='over_all' className='bg-dark text-light my-4 p-2'>
//               <div className='card_top' style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <div className='card_top_left mx-3 my-3' style={{ display: 'flex' }}>
//                   <div className='profile_pic'>
//                     <img id='profile_pic' style={{ width: 50, height: 50, 'borderRadius': '50%' }} src="https://image.lexica.art/full_jpg/acf5676d-e1bb-47cf-8e64-b171543de0ec" alt="" />
//                   </div>
//                   <div className='profile_name mx-3'>
//                     <Card.Title>Jabaraj</Card.Title>
//                     <Card.Text className='time' style={{ fontSize: 13 }}>2 days ago</Card.Text>
//                   </div>
//                 </div>
//                 <div className='card_top_left'>
//                   <FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis} />
//                 </div>
//               </div>
//               <Card.Text className='mx-5'>
//                 <span className='text-primary mx-1'>#WebDev</span> Some quick example text.
//               </Card.Text>
//               <Card.Img id='cardImg' variant="top" src="https://assets-global.website-files.com/5f4bb8e34bc82700bda2f385/603ec5003c4ad84a74783242_Quke726ojvKe9_-8p6r2JO2lLz0dyGqyCCITiIc6vm21JPkjsqvUjaNsUTNRgjo_TQbzJPNDOuwcLeUDpkv7bsIRw_Qb-Q3v4U-NLeo-CWairdyxxmEurw3vH5wVRoWhkoNww177.jpeg" />
//               <Card.Body>
//                 <div id='reactions' className=' mx-4'>
//                   <div className='rections_left'>
//                     <FontAwesomeIcon id='icons' className='mx-2 text-warning' icon={faThumbsUp} />
//                     <p>1.5k</p>
//                   </div>
//                   <div className='rections_right'>
//                     <p>245 Discussions</p>
//                   </div>
//                 </div>
//                 <div id='react' className='react' >
//                   <div className='post_react' >
//                     <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsUp} />
//                     <p className='my-auto'>Like</p>
//                   </div>
//                   <div className='post_react'>
//                     <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsDown} />
//                     <p className='my-auto'>dislike</p>
//                   </div>
//                   <div className='post_react'>
//                     <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faCommentDots} />
//                     <p className='my-auto'>discussion</p>
//                   </div>
//                 </div>
//               </Card.Body>
//             </Card>

//             {/* //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

//             <Card id='over_all' className='bg-dark text-light my-4 p-2'>
//               <div className='card_top' style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <div className='card_top_left mx-3 my-3' style={{ display: 'flex' }}>
//                   <div className='profile_pic'>
//                     <img id='profile_pic' style={{ width: 50, height: 50, 'borderRadius': '50%' }} src="https://image.lexica.art/full_jpg/acf5676d-e1bb-47cf-8e64-b171543de0ec" alt="" />
//                   </div>
//                   <div className='profile_name mx-3'>
//                     <Card.Title>Jabaraj</Card.Title>
//                     <Card.Text className='time' style={{ fontSize: 13 }}>2 days ago</Card.Text>
//                   </div>
//                 </div>
//                 <div className='card_top_left'>
//                   <FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis} />
//                 </div>
//               </div>
//               <Card.Text className='mx-5'>
//                 <span className='text-primary mx-1'>#WebDev</span> Some quick example text.
//               </Card.Text>
//               <Card.Img  id='cardImg' variant="top"  src="https://i.pinimg.com/736x/9b/fe/f0/9bfef0c0bb3a3cf817872aacf209667f--website-analysis-free-website.jpg" />
//               <Card.Body>
//                 <div id='reactions' className=' mx-4'>
//                   <div className='rections_left'>
//                     <FontAwesomeIcon id='icons' className='mx-2 text-warning' icon={faThumbsUp} />
//                     <p>1.5k</p>
//                   </div>
//                   <div className='rections_right'>
//                     <p>245 Discussions</p>
//                   </div>
//                 </div>
//                 <div id='react' className='react' >
//                   <div className='post_react' >
//                     <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsUp} />
//                     <p className='my-auto'>Like</p>
//                   </div>
//                   <div className='post_react'>
//                     <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsDown} />
//                     <p className='my-auto'>dislike</p>
//                   </div>
//                   <div className='post_react'>
//                     <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faCommentDots} />
//                     <p className='my-auto'>discussion</p>
//                   </div>
//                 </div>
//               </Card.Body>
//             </Card>

//             {/* //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

//             <Card id='over_all' className='bg-dark text-light my-4 p-2'>
//               <div className='card_top' style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <div className='card_top_left mx-3 my-3' style={{ display: 'flex' }}>
//                   <div className='profile_pic'>
//                     <img id='profile_pic' style={{ width: 50, height: 50, 'borderRadius': '50%' }} src="https://image.lexica.art/full_jpg/acf5676d-e1bb-47cf-8e64-b171543de0ec" alt="" />
//                   </div>
//                   <div className='profile_name mx-3'>
//                     <Card.Title>Jabaraj</Card.Title>
//                     <Card.Text className='time' style={{ fontSize: 13 }}>2 days ago</Card.Text>
//                   </div>
//                 </div>
//                 <div className='card_top_left'>
//                   <FontAwesomeIcon id='icons' className='dot m-3 p-2 text-light' icon={faEllipsis} />
//                 </div>
//               </div>
//               <Card.Text className='mx-5'>
//                 <span className='text-primary mx-1'>#WebDev</span> Some quick example text.
//               </Card.Text>
//               <Card.Img  id='cardImg' variant="top" src="https://i.ytimg.com/vi/g_Y9ZV-y3bM/maxresdefault.jpg" />
//               <Card.Body>
//                 <div id='reactions' className=' mx-4'>
//                   <div className='rections_left'>
//                     <FontAwesomeIcon id='icons' className='mx-2 text-warning' icon={faThumbsUp} />
//                     <p>1.5k</p>
//                   </div>
//                   <div className='rections_right'>
//                     <p>245 Discussions</p>
//                   </div>
//                 </div>
//                 <div id='react' className='react' >
//                   <div className='post_react' >
//                     <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsUp} />
//                     <p className='my-auto'>Like</p>
//                   </div>
//                   <div className='post_react'>
//                     <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faThumbsDown} />
//                     <p className='my-auto'>dislike</p>
//                   </div>
//                   <div className='post_react'>
//                     <FontAwesomeIcon id='icons' className='mx-2 text-secondary' icon={faCommentDots} />
//                     <p className='my-auto'>discussion</p>
//                   </div>
//                 </div>
//               </Card.Body>
//             </Card>

//             {/* //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}



//           </div>
//           <div id='SideBar' className="col-lg-1"></div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Profile