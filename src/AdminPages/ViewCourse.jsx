// import React, { Component } from 'react';

// import Button from '@mui/material/Button';
// import "./ViewCourse.css";
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Delete from '@mui/icons-material/Delete';
// import Edit from '@mui/icons-material/Edit';
// import Grid from '@mui/material/Grid';
// import Add from '@mui/icons-material/Add';
// import Typography from '@mui/material/Typography';
// import Header from'../Components/Header';
// import {Link,Outlet,} from  "react-router-dom";
// import CourseSearchFilter from '../Components/CourseSearchFilter';






// function ViewCourse(props) {
//   useEffect(()=>{
//     fetch("http://localhost:8080/UserModel")
//     .then((response)=>response.json())
//     .then((p) => setData(p)
         
//     );
//   },[]);
  
  
  
//   // const id=data.id;
//   const [id,setId]=useState(data.id);
//   const onDelete =async()=>{
  
//     await fetch(`http://localhost:8080/UserModel/${id}`,{
//       method:'DELETE'
//     })
//     .then((res)=>{
//       if(res.status!==200){
//         return
//       }else{
//         setData(data.filter((datas)=>{
//             return datas.id !== id;
//         }))
//       }
//     })
//     .catch((err)=>{
//       console.log(err);
//     })
//   }
  
  
  




//   return (
//     <div>

// <Header/>

//     <CourseSearchFilter />

                
               
          



    


//   <div key={datas.id} className="card" style={{width:"30%"}}>
  
  
//   <div  className="container">
    





//   <Grid container  className="rowgrid"  item xs={12} sm={4} md={12}>
//                   <Grid  className="gridelement" >
//                   <p>courseId :</p>
//                   </Grid>
//                   <Grid  className="gridelement">
//                   <p>Course Name :</p>
//                   </Grid>
//                   <Grid   className="gridelement">
//                   <p>Duration :</p>
//                   </Grid>
                 
//                </Grid>

//                <Grid container className="rowgrid"  item xs={12} sm={4} md={12}>
//                   <Grid  className="gridelement">
//                  <p>Students Enrolled:</p>
//                   </Grid>
//                   <Grid className="gridelement" >
//                   <p  >Course Year:</p>
//                   </Grid>
//                   <Grid className="gridelement">
//                   <p>Type:</p>
//                   </Grid>
                 
//                </Grid>

//                <Grid container className="rowgrid"  item xs={12} sm={4} md={12}>
//                   <Grid  className="gridelement" >
//                  <p>Institute Name:</p>
//                   </Grid>
//                   </Grid>
                 
                   
//                 <div>
//                 <Grid container className="btngrid zindex"  item xs={12} sm={4} md={12}>
               
//                   <Grid className="btngrid">
//                   <Link to="/admin/EditCourses" style={{color:"white",textDecoration:"none"}}  target={"_blank"}>
//                   <Button  variant="outlined" style={{margin:"5px"}} id="addCourse" startIcon={<Edit />} color="primary">Edit </Button> 
//                  </Link>

                  
//                   </Grid>
//                   <Grid className="btngrid">

//                   <Link to="/admin/DeleteCourses" style={{color:"white",textDecoration:"none"}}  target={"_blank"}>
//                   <Button  variant="outlined" style={{margin:"5px"}} id="addCourse" startIcon={<Delete />} color="error">Delete</Button> 
//                  </Link>
                  
//                   </Grid>  
//                   </Grid> 
//                 </div>
//         </div>
   

    
//   </div>
  
//   <div>

//   </div>
//   <Outlet/>
   
// </div>


             
//   );
// }

// export default ViewCourse;





import Header from'../Components/Header';

import Button from '@mui/material/Button';
import { useState,React,useEffect } from "react";

import Grid from '@mui/material/Grid';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import './DisplayUser.css';
// import Link from '@mui/material/Link'
import{BrowserRouter as Router, Routes,Route,Link,Outlet,} from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import Add from '@mui/icons-material/Add';
import Search from '@mui/icons-material/Search';
import {Table,TableHead,TableRow,TableBody} from '@mui/material';

// import React, { Component } from 'react'

import { BackspaceOutlined, DeleteForeverOutlined, EditAttributes } from '@mui/icons-material';
// import '../AdminPages/DisplayUser.css';










const ViewCourse=(props)=>{

  





  const [data,setData]=useState([]);

  useEffect(()=>{
   getusers();
  },[]);
  
  function getusers(){
    fetch("http://localhost:8080/UserModel")
    .then((response)=>response.json())
    .then((p) => setData(p)
         
    );
  }
  
  // const id=data.id;
  // const [id,setId]=useState(data.id);
  // const onDelete =async(id)=>{
  
  //   await fetch(`http://localhost:8080/UserModel/${id}`,{
  //     method:'DELETE'
  //   })
  //   .then((res)=>{
  //     if(res.status!==200){
  //       return
  //     }else{
  //       setData(data.filter((datas)=>{
  //           return datas.id !== id;
  //       }))
  //     }
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   })
  // }
  // console.warn(data)
  function deleteUser(id)
  {
    // alert(id)
    fetch(`http://localhost:8080/UserModel/${id}`,{
      method:'DELETE'
    }).then((response)=>{
      response.json().then((resp)=>{
        console.warn()
        getusers();
      })
       
    
    })
  }
  








    return(


<div >

<Header/>


<div className="course-search-and-filter">
      <div className="course-search">
        <input
          className="course-search-input"
          type="text"
          name="course"
          placeholder="Search Course"
        ></input>
        <Button  variant="outlined"  id="searchCourse" className="btn"> Search</Button>
      </div>
      <div className="course-filter">
        <div className='filter1'>Filter By</div>
        
        <Button variant="outlined" className="course-filter-elem"> StudentId</Button>
        <Button variant="outlined" className="course-filter-elem"> Student Name</Button>
        <Button variant="outlined" className="course-filter-elem"> Course</Button>
     
      </div>
    </div>



<table className = " zindex table table-striped table-bordered">

 <thead>
    <tr>
   
        {/* <th value={id} onChnage={e =>setId(e.target.value)}> */}
        {/* {data.map((item)=>{
          return (
          <td key={item.id}>{item.name}</td> */}
          {/* // <td></td>
          // <th key={item.id}>{item.email}</th> */}
          
          {/* );
        })} */}
          {/* StudentID</th> */}
          <th>CourseId</th>
        <th>CourseName</th>
        <th>Duration</th>
        <th>StudentEnrolled</th>
        <th>CourseYear</th>
        <th>Type</th>
        <th>InstituteName</th>
        <th>Action</th>
    </tr>
 </thead>
 <tbody>
 {/* {data.map((item)=>{
          return ( */}


{data.map(datas=>(

<tr key={datas.id}>
  <td>{datas.id}</td>
  <td>{datas.name} </td>
  <td>{datas.email}</td>
  <td>{datas.mobileNumber}</td>
  <td></td>
  <td></td>
  <td></td>
  
  <td>     
       
        <button className='zindex' variant="contained" style={{margin:"5px",backgroundColor:"blue",color:"white"}} endIcon={<EditAttributes    />} color="primary">Edit <Edit/> </button>
        <button className='zindex' variant="contained" style={{margin:"5px",backgroundColor:"red",color:"white"}} endIcon={<DeleteForeverOutlined/>} onClick={()=>deleteUser(datas.id)} color="primary">Delete <DeleteForeverOutlined/> </button>                               
        </td>

  
  </tr>

))}

  </tbody>
</table>
<div className='btnadd'>
<Link   to="/admin/AddCourses" style={{color:"white",textDecoration:"none"}}  >
<Button 
 className="btn btn-submit"
//  onClick={getemail}
  type="submit"
variant="contained" style={{margin:"5px"}} startIcon={<Add/>} color="primary">Add Course</Button> 
  </Link>
  </div>
   <Outlet />
</div>       
    );
}
export default ViewCourse;


