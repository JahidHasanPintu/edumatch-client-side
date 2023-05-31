import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getBaseURL } from '../../baseURL/baseURL';
import { toast } from 'react-toastify';

const PostProposal = () => {
    const [teacherLocation, setTeacherLocation] = useState(null);
    const [user] = useAuthState(auth);
    useEffect(() => {
        // Check if the browser supports geolocation
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    setTeacherLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                },
                error => {
                    console.error('Error getting geolocation:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported in this browser.');
        }
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        image: '',
        subject: '',
        headline: '',
        experience: '',
        salary: '',
        platform: [],
        description: '',
        location: null
    });

    useEffect(() => {
        if (teacherLocation) {
            setFormData(prevFormData => ({
                ...prevFormData,
                location: teacherLocation
            }));
        }
        if (user) {
            setFormData(prevFormData => ({
                ...prevFormData,
                image: user.photoURL,
                name: user.displayName
            }));
        }
    }, [teacherLocation]);

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? handleCheckboxValue(checked, prevFormData[name], value) : value
        }));
    };

    const handleCheckboxValue = (checked, prevValue, value) => {
        if (checked) {
            return [...prevValue, value];
        } else {
            return prevValue.filter((item) => item !== value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:5000/proposals`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            toast.success("Successfully Posted")
          })
          .catch((error) => {
            // Handle any errors that occur during the request
            console.error(error);
          });
        // console.log(formData);
    };



    return (
        <div>
            
            <section className="p-6 text-gray-900">
                <form noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50 ng-untouched ng-pristine ng-valid" onSubmit={handleSubmit}>
                    <h2 className="w-full text-3xl font-bold leading-tight">Complete your application</h2>
                    {teacherLocation ? (
                        <div>
                            {/* Latitude: {teacherLocation.latitude}<br />
                            Longitude: {teacherLocation.longitude} */}
                        </div>
                    ) : (
                        <div className='text-red-500'>Please allow location...</div>
                    )}

                    <div>
                        <label htmlFor="subject" className="block mb-1 ml-1">
                            Subject
                        </label>
                        <select
                            id="subject"
                            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-100"
                            required
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                        >
                            <option value="">Select a subject</option>
                            <option value="bangla">Bangla</option>
                            <option value="english">English</option>
                            <option value="math">Math</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="headline" className="block mb-1 ml-1">
                            Add Headline
                        </label>
                        <input
                            id="headline"
                            type="text"
                            placeholder="add a title"
                            required
                            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-100"
                            name="headline"
                            value={formData.headline}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="experience" className="block mb-1 ml-1">
                            Experience
                        </label>
                        <input
                            id="experience"
                            type="text"
                            placeholder="add experience in year"
                            required
                            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-100"
                            name="experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="salary" className="block mb-1 ml-1">
                            Expected Salary/mo
                        </label>
                        <input
                            id="salary"
                            type="text"
                            placeholder="your expected salary per month.... eg: 3000"
                            required
                            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-100"
                            name="salary"
                            value={formData.salary}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="platform" className="block mb-1 ml-1">
                            Platform
                        </label>
                        <div className="flex items-center">
                            <input
                                id="online"
                                type="checkbox"
                                value="online"
                                className="mr-1"
                                name="platform"
                                checked={formData.platform.includes('online')}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="online">Online</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="onsite"
                                type="checkbox"
                                value="onsite"
                                className="mr-1"
                                name="platform"
                                checked={formData.platform.includes('onsite')}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="onsite">Onsite</label>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="description" className="block mb-1 ml-1">
                            Description
                        </label>
                        <textarea
                            id="description"
                            type="text"
                            placeholder="Tell briefly about your teaching process..Don't write any contact information here"
                            className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-100"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring focus:ring-opacity-50 bg-blue-600 focus:ring-violet-400 hover:-blue-800 text-white"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default PostProposal;