import React, { useEffect, useState } from 'react';
import useGeolocation from '../../hooks/useGeolocation ';
import reqIcon from '../../assets/images/reqicon.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase.init';
import { toast } from 'react-toastify';

const Tutor = (props) => {
  const tutor = props.proposal;
  const location = useGeolocation();
  const [user] = useAuthState(auth);
  const [distance, setDistance] = useState(null);
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');

  useEffect(() => {
    // Function to calculate the distance using the Haversine formula
    const calculateDistance = () => {
      if (location && location.latitude && location.longitude) {
        const currentLatitude = location.latitude;
        const currentLongitude = location.longitude;
        const targetLatitude = tutor.location.latitude;
        const targetLongitude = tutor.location.longitude;

        const earthRadius = 6371; // Radius of the Earth in kilometers

        const dLat = ((targetLatitude - currentLatitude) * Math.PI) / 180;
        const dLon = ((targetLongitude - currentLongitude) * Math.PI) / 180;

        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos((currentLatitude * Math.PI) / 180) *
          Math.cos((targetLatitude * Math.PI) / 180) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        const distance = earthRadius * c; // Distance in kilometers

        setDistance(distance);
      }
    };

    calculateDistance();
  }, [location, tutor]);

  useEffect(() => {
    if (user) {
      setStudentEmail(user.email);
      setStudentName(user.displayName);
    }
  }, [user]);


  const handleRequest = (event) => {

    const reqData = {
      studentName: studentName,
      studentEmail: studentEmail,
      techerEmail: tutor.email,
      proposal: tutor,
      timestamp: new Date(),
      status: "pending",



    }

    event.preventDefault();
    fetch(`http://localhost:5000/requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully sent request")
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);
      });

  }

  return (
    <div className="p-6  bg-gray-50 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
      <div className="flex">
        <img src="https://source.unsplash.com/random/300x300/?1" alt="" className=" rounded-md h-40 dark:bg-gray-500" />
        <div className='ml-5'>
          <h2>{tutor.name}</h2>
          {distance !== null && <h4 className='text-red-500'>Distance: {distance.toFixed(2)} km</h4>}
          <h4>Salary: {tutor.salary} TK</h4>
          <p>{tutor.platform.join(', ')}</p>
          <h4>Experience: {tutor.experience} Yr</h4>

          <div className=" flex">
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-1">Contact</button>

            <button onClick={handleRequest} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-1">Request</button>
          </div>





        </div>
      </div>
      <div className="mt-6 mb-2">
        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">{tutor.subject}</span>
        <h2 className="text-xl font-semibold tracking-wide">{tutor.headline}</h2>
      </div>
      <p className="dark:text-gray-100">{tutor.description}</p>
    </div>
  );
};

export default Tutor;