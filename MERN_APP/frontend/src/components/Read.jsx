
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const Read = () => {
//     const [data, setData] = useState([]);
//     const [error, setError] = useState("");

//     async function fetchData() {
//         try {
//             const response = await fetch("http://localhost:4000");
//             if (!response.ok) {
//                 throw new Error('Failed to fetch data');
//             }
//             const result = await response.json();
//             setData(result);
//         } catch (error) {
//             setError(error.message);
//         }
//     }

//     const handleDelete = async (id) => {
//         try {
//             const response = await fetch(`http://localhost:4000/${id}`, {
//                 method: "DELETE"
//             });
//             if (!response.ok) {
//                 throw new Error('Failed to delete data');
//             }
//             setError("Deleted successfully");
//             setTimeout(() => {
//                 setError("");
//                 fetchData(); 
//             }, 1000);
//         } catch (error) {
//             setError(error.message);
//         }
//     }

//     useEffect(() => {
//         fetchData();
//     }, []);

//     return (
//         <div className="container my-2">
//             {error && <div className="alert alert-danger">{error}</div>}
//             <h2 className="text-center">All data</h2>
//             <div className="row">
//                 {data.map((ele) => (
//                     <div key={ele._id} className="col-3">
//                         <div className="card">
//                             <div className="card-body">
//                                 <h5 className="card-title">{ele.name}</h5>
//                                 <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
//                                 <p className="card-text">{ele.age}</p>
//                                 <a href="#" className="card-link" onClick={() => handleDelete(ele._id)}>Delete</a>
//                                 <Link to={'/${ele._id}'} className="card-link">Edit</Link>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Read;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    async function fetchData() {
        try {
            const response = await fetch("http://localhost:4000");
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error.message);
        }
    }

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/${id}`, {
                method: "DELETE"
            });
            if (!response.ok) {
                throw new Error('Failed to delete data');
            }
            setError("Deleted successfully");
            setTimeout(() => {
                setError("");
                fetchData(); // Fetch updated data after deletion
            }, 1000);
        } catch (error) {
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container my-2">
            {error && <div className="alert alert-danger">{error}</div>}
            <h2 className="text-center">All data</h2>
            <div className="row">
                {data.map((ele) => (
                    <div key={ele._id} className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{ele.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                                <p className="card-text">{ele.age}</p>
                                <Link to={`/${ele._id}`} className="card-link">Edit</Link>
                                <a href="#" className="card-link" onClick={() => handleDelete(ele._id)}>Delete</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Read;
