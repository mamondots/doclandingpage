import { useEffect, useState } from "react";


const AllUser = () => {
     const [allUesrs, setAllUesrs] = useState([])
     useEffect(() =>{
        fetch('https://doctore-server-site-1btl6gt9p-mamondots.vercel.app/users')
        .then(res => res.json())
        .then(data => {
            setAllUesrs(data)
            console.log(data)
        })
     },[])
    return (
        <div className="mt-5 absolute left-[60vh]">
            <div className="flex justify-between w-full">
            {
               allUesrs.map((allUesr,index) =><div key={allUesr._id} className="overflow-x-auto">
               <table className="table  w-[120vh] text-center ">
                 {/* head */}
                 <thead>
                   <tr className="bg-[#E6E6E6] w-[60vh]">
                     <th>#</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Admin</th>
                     <th>Action</th>
                   </tr>
                 </thead>
                 <tbody>
                   {/* row 1 */}
                   <tr>
                     <th>{index +1}</th>
                     <td>{allUesr.name}</td>
                     <td>{allUesr.email}</td>
                     <td><button className="btn btn-neutral">Make Admin</button></td>
                     <td><button className="btn btn-secondary">Delete</button></td>
                   </tr>
                   
                  
                 </tbody>
               </table>
             </div>) 
            }
            </div>
        </div>
    );
};

export default AllUser;