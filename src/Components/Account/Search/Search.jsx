import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/firebase.init';
import { toast } from 'react-toastify';

const Search = () => {
    const [user] = useAuthState(auth);
    const [requests, setRequests] = useState([]);
    useEffect(() => {
        // Fetch requests by teacher email

        const fetchTeacherRequests = async () => {
            const teacherEmail = user.email; // Replace with the actual teacher email
            const response = await fetch(`http://localhost:5000/requests/teacher/${teacherEmail}`);
            const data = await response.json();
            setRequests(data);
        };


        // Call the fetch functions
        fetchTeacherRequests();

    }, [user]);

    const [status, setStatus] = useState("");
    const handleReject = async (request) => {
        try {
          const url = `http://localhost:5000/requests/${request._id}`;
          const response = await fetch(url, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'Rejected' })
          });
    
          if (response.ok) {
            setStatus('Rejected');
            toast.dark('Request Rejected', { backgroundColor: '#e74c3c' });
          } else {
            toast.error('Failed to reject request', { backgroundColor: '#c0392b' });
          }
        } catch (error) {
          toast.error('Failed to reject request', { backgroundColor: '#c0392b' });
        }
      };
    
      const handleConfirm = async (request) => {
        try {
          const url = `http://localhost:5000/requests/${request._id}`;
          const response = await fetch(url, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'Confirmed' })
          });
    
          if (response.ok) {
            setStatus('Confirmed');
            toast.success('Request Confirmed', { backgroundColor: '#27ae60' });
          } else {
            toast.error('Failed to confirm request', { backgroundColor: '#c0392b' });
          }
        } catch (error) {
          toast.error('Failed to confirm request', { backgroundColor: '#c0392b' });
        }
      };


    return (
        <div>
            <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2 w-full">



                <div class="rounded overflow-hidden shadow bg-white mx-2 w-full">
                    <div class="px-6 py-2 border-b border-grey-700">
                        <div class="font-bold text-xl">Student Request</div>
                    </div>
                    <div class="table-responsive">
                        <table class="table text-greyest w-full">
                            <thead class="bg-blue-500 text-black text-normal">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">email</th>
                                    <th scope="col">Subject</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {requests.map((request, index) => (
                                    <tr key={request._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>
                                            <button class="bg-blue-500 hover:bg-blue-800 text-white font-light py-1 px-2 rounded-full">
                                                {request.studentName}
                                            </button>
                                        </td>
                                        <td>{request.studentEmail}</td>
                                        <td>{request.proposal.subject}</td>
                                        <td>{request.status}</td>
                                        <td>
                                            <button 
                                            onClick={()=>handleReject(request)} 
                                            disabled={status === 'Rejected'}
                                            class="bg-red-500 hover:bg-blue-800 text-white font-light py-1 px-2 m-1">
                                                X
                                            </button>
                                            <button 
                                            onClick={()=>handleConfirm(request)} 
                                            disabled={status === 'Confirmed'}
                                            class="bg-blue-500 hover:bg-blue-800 text-white font-light py-1 px-2 m-1">
                                                ✓
                                            </button>
                                        </td>
                                    </tr>

                                ))}



                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Search;