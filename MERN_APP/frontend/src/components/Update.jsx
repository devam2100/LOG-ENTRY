// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


//     // Rest of your component code...



// const Update = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [age, setAge] = useState(0);
//     const[error,setError]=useState("");

//     const navigate = useNavigate();
//     const {id} = useParams();
//     const getSingleUser = async ()=>{
       
//         const response = await fetch(`http://localhost:4000/${id}`) ;
//         const result = await response.json();
//        if(!response.ok)
//         {
//             console.log(result.error);
//             setError(result.error);
//         }
//         if(response.ok){
//           setError(" ");
//           console.log("updated user",result);
//           setName(result.name);
//           setEmail(result.email);
//           setAge(result.age);

//         }
//     }
//     const handleEdit = async (e) => {
//         e.preventDefault();
    
//         const UpdatedUser = { name, email, age };
    
//         try {
//             const response = await fetch(`http://localhost:4000/${id}`, {
//                 method: "PATCH",
//                 body: JSON.stringify(UpdatedUser),
//                 headers: {
//                     "Content-Type": "application/json", 
//                 },
//             });
    
//             const result = await response.json();
//             if (!response.ok) {
//                 console.log(result.error);
//                 setError(result.error);
//             } else {
//                 setError("");
//                 // Assuming `nevigate` is a typo and should be `navigate`, correct it accordingly
//                 navigate("/all");
//             }
//         } catch (error) {
//             console.error("Error:", error);
//         }
//     }
    
//     useEffect(()=>{
//        getSingleUser();
//     },[])
//   return (
//     <div>
//      <div className="container my-2">
//             {error && <div class="alert alert-danger">
// {error}
// </div>}
//             <h2 className="text-center">Edit the data</h2>
//             <form onSubmit={handleEdit}>
//                 <div className="mb-3">
//                     <label className="form-label">Name</label>
//                     <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Email address</label>
//                     <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Age</label>
//                     <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Update
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Update = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const { id } = useParams();

    const getSingleUser = async () => {
        try {
            const response = await fetch(`http://localhost:4000/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch user');
            }
            const result = await response.json();
            setName(result.name);
            setEmail(result.email);
            setAge(result.age);
            setError("");
        } catch (error) {
            console.error("Error:", error);
            setError(error.message);
        }
    }

    const handleEdit = async (e) => {
        e.preventDefault();

        const UpdatedUser = { name, email, age };

        try {
            const response = await fetch(`http://localhost:4000/${id}`, {
                method: "PATCH",
                body: JSON.stringify(UpdatedUser),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error('Failed to update user');
            }

            navigate("/all"); // Navigate to all users page after successful update
        } catch (error) {
            console.error("Error:", error);
            setError(error.message);
        }
    }

    useEffect(() => {
        getSingleUser();
    }, []);

    return (
        <div className="container my-2">
            {error && <div className="alert alert-danger">{error}</div>}
            <h2 className="text-center">Edit User</h2>
            <form onSubmit={handleEdit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Update;
