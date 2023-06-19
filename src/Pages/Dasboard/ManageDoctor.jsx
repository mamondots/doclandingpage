import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const ManageDoctor = () => {
  
  const [doctors, setDoctors] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/doctors')
      .then(res => res.json())
      .then(data => {
        setDoctors(data)
        console.log(data)
      })
  }, [])

  const handleDelete = _id => {
    console.log(_id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        //Swal.fire(
        //'Deleted!',
        // 'Your file has been deleted.',
        //'success'
        // )

        fetch(`http://localhost:5000/doctors/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }

          })
      }
    })
  }

  return (
    <div className="mt-12 absolute left-[60vh]">
      <h2 className="text-2xl font-bold mb-4">Manage Doctors</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-[130vh] text-center">
            {/* head */}
            <thead className="bg-[#E6E6E6]">
              <tr>

                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Position</th>
                <th>Available Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>


              {
                doctors.map((doctor, index) => <tr key={doctor._id}

                >
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={doctor.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>

                    </div>
                  </td>
                  <td>{doctor.name}</td>
                  <td>{doctor.position}</td>
                  <td>{doctor.available_date}</td>


                  <th className=" space-x-2">
                    <Link to={`/dasboard/updatedoctor/${doctor._id}`}>
                      <button className="btn btn-primary">Update</button></Link>
                    <button onClick={() => handleDelete(doctor._id)} className="btn btn-secondary">Delete</button>
                  </th>
                </tr>)
              }



            </tbody>


          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageDoctor;