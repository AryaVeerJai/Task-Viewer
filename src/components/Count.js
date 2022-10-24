import React, { useState } from "react";
 
const Todo = () => {
 const [showForm, setshowform] = useState(true);
 const [toggleSubmit, settoggleSubmit] = useState(true);
 const [showList, setshowList] = useState(true);
 const [inputTitle, setinputTitle] = useState("");
 const [inputDesc, setinputDesc] = useState("");
 const [inputcalander, setinputcalander] = useState("");
 const [inputtime, setinputtime] = useState("");
 const [items, setitems] = useState([
   {
     id: "001",
     name: "Default Task",
    //  desc: "Default Description",
     calan: "Default Date",
     time: "Default Time",
     status: false,
   },
 ]);
 
 //   HANDLING INPUT FIELDS
 const handleInput = (e) => {
   setinputTitle(e.target.value);
 };
 const handleInputdesc = (e) => {
   setinputDesc(e.target.value);
 };
 const handleInputcalander = (e) => {
    setinputcalander(e.target.value);
  
  };
  const handleInputtime = (e) => {
    setinputtime(e.target.value);
  };
 //   HANDLING INPUT FIELDS
 
 //   SUBMITTING FORM
 const handleSubmit = (e) => {
   setshowList(true);
 
   e.preventDefault();
   if (!inputTitle || !inputDesc || !inputcalander || !inputtime) {
     alert("fill data");
     showList(false);
   } else if (inputTitle && !toggleSubmit) {
     setitems(
       items.map((elem) => {
        
         return elem;
       })
     );
 
     setinputTitle("");
     setinputDesc("");
     setinputcalander("");
     setinputtime("");
     settoggleSubmit(true);
     setshowform(false);
   } else {
     const allinputTitle = {
       id: new Date().getTime().toString(),
       name: inputTitle,
       desc: inputDesc,
       calan:inputcalander,
       time:inputtime,

     };
     setitems([allinputTitle, ...items]);
     setinputTitle("");
     setinputDesc("");
     setinputcalander("");
     setinputtime("");
     setshowform(true);
   }
 };
 //   SUBMITTING FORM
 
 const sorted = items.sort((a,b)=>{
    const dateA = new Date(`${a.calan} ${a.time}`).valueOf();
    const dateB = new Date(`${b.calan} ${b.time}`).valueOf();
    if(dateA > dateB){
      return 1; // return -1 here for DESC order
    }
    return -1 // return 1 here for DESC Order
  });
  console.log(sorted)


 return (
   <>
     
 <div className="row">
    <div className="col-md-8 col-12 mt-5">
    {showForm ? (
       <>
         <div className="container border rounded d-flex justify-content-center shadow p-3 mb-5 bg-white rounded">
           <div className="row">
             <div className="text-center">
               <h2>{toggleSubmit ? " Task Creater" : " Edit Task"}</h2>
             </div>
             <form className="col-12 p-2" onSubmit={handleSubmit}>
             <div className="row">
             <div className=" col-12">
               <label htmlFor="title" className="my-2">
                Task Name:
               </label>
               <input  type="text" name="title" id="title"  placeholder="title" className="w-100 my-1 p-2" onChange={handleInput} value={inputTitle}  />
               </div>
               <div className="col-12">
               <label className="my-2" htmlFor="description">
                 Task Description (Optional)
               </label>
               <input  type="text" name="description"  id="description" placeholder="Description" className="w-100 my-1 p-2"   onChange={handleInputdesc}  value={inputDesc} />
               </div>
               
                <div className="col-md-6 col-12">
                <label className="my-2" htmlFor="calander">
                 Select Date
               </label>
               <input  type="date" name="calander"  id="calander" placeholder="Calander" className="w-100 my-1 p-2"   onChange={handleInputcalander}  value={inputcalander} />
                </div>
                <div className="col-md-6 col-12">
                <label className="my-2" htmlFor="time">
                 Select Time
               </label>
               <input  type="time" name="time"  id="time" placeholder="Calander" className="w-100 my-1 p-2"   onChange={handleInputtime}  value={inputtime} />
                </div>
                <div className="col-12 text-end">
                {toggleSubmit ? (
                 <button className="btn btn-primary my-2">Create Task</button>
               ) : (
                 <button className="btn btn-primary my-2">Update</button>
               )}
                </div>
               </div>      
                 {/* <div className="text-center"> */}
               
               {/* </div> */}
             </form>
           </div>
         </div>
       </>
     ) : (
       ""
     )}
    </div>
    <div className="col-md-4 col-12 mt-5">
    {showList ? (
        
       <div className="container py-2 ">
           <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">ALL</button>
                </li>
                <li class="nav-item" role="presentation">
                   <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">UPCOMING</button>
                 </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                {items.map((elem, index) => {            
           return (
             <div className="row border rounded shadow p-3 mb-3 bg-white rounded  p-2"  key={elem.id}  >
               <div className="col-12  justify-content-between align-items-center w-100">
                 <div>
                   <h4>{elem.name}</h4>
                   <p>{elem.desc}</p>
                   <div className="d-flex justify-content-between">
                    <div className="">
                    <p>{elem.calan}</p>
                    </div>
                    <div className="">
                    <p>{elem.time}</p> 
                    </div>
                   </div>
                   
                                     
                 </div>                   
                 </div>
               </div>            
           );
         })}
                </div>{/* #all */}
                <div class="tab-pane fade" id="upcoming" role="tabpanel" aria-labelledby="upcoming-tab">
                {items.map((elem, index) => {            
           return (
             <div className="row border rounded shadow p-3 mb-3 bg-white rounded  p-2"  key={elem.id}  >
               <div className="col-12 d-flex justify-content-between align-items-center">
                 <div>
                   <h4>{elem.name}</h4>
                   {/* <p>{elem.desc}</p> */}
                   <p>{elem.calan}</p>
                   <p>{elem.time}</p>                   
                 </div>                   
                 </div>
               </div>            
           );
         })}
                </div>
            </div>{/* #myTabContent */}
            
         
       </div>
     ) : (
       ""
     )}
    </div>
 </div>

 
    
   </>
 );
};
 
export default Todo;