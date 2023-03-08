import React from 'react';

const Tutors = () => {
    return (
        <div className='flex'>
            <aside className="w-full p-6 sm:w-60 bg-gray-100 dark:text-gray-100">
            <nav className="space-y-8 text-sm">
                <div className="space-y-2">
                    <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Format</h2>
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#">Online</a>
                        <a rel="noopener noreferrer" href="#">In Person</a>
                        
                    </div>
                </div>
                <div className="space-y-2">
                    <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Starting Salary</h2>
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#">3000Tk</a>
                        <a rel="noopener noreferrer" href="#">5000TK</a>
                        
                    </div>
                </div>
                <div className="space-y-2">
                    <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Qualification</h2>
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#">CSE</a>
                        <a rel="noopener noreferrer" href="#">EEE</a>
                        <a rel="noopener noreferrer" href="#">English</a>
                        <a rel="noopener noreferrer" href="#">Medical</a>
                    </div>
                </div>
                <div className="space-y-2">
                    <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">My Tutors</h2>
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#">No Saved Tutor</a>
                        
                    </div>
                </div>
            </nav>
            </aside>
            <aside >
                
            </aside>
            <div className=' mx-5 w-full'>
            <h2 className='font-bold px-5'> Tutors for you </h2>
            <h4 className='px-5 mb-5'>1 - 20 of 23 results</h4>
            
            <form>
                <div class="grid gap-6 mb-6 md:grid-cols-4 bg-gray-50 p-5">
                    <div>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg: Physics" required/>
                    </div>
                    <div>
                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Level</label>
                        <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="HSC/SSC" required/>
                    </div>
                    <div>
                        <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Curriculum</label>
                        <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg: English" required/>
                    </div>  
                
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-5">Submit</button>
                    
                </div>
            
                
            </form>

                
                <div class="grid grid-cols-3 gap-5 justify-items-center mt-2 mb-5">
                    
                    <div className="p-6  bg-gray-50 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                        <div className="flex">
                        <img src="https://source.unsplash.com/random/300x300/?1" alt="" className=" rounded-md h-40 dark:bg-gray-500" />
                            <div className='ml-5'>
                                <h2>Name</h2>
                                <h4>Salary</h4>
                                <h4>Online/Inperson</h4>
                                <h4>Experties: Physics</h4>
                            </div>
                        </div>
                        <div className="mt-6 mb-2">
                            <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">Quisque</span>
                            <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
                        </div>
                            <p className="dark:text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
                    </div>
                    <div className="p-6  bg-gray-50 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                        <div className="flex">
                        <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center  rounded-md h-40 dark:bg-gray-500" />
                        <div className='ml-5'>
                            <h2>Name</h2>
                            <h4>Salary</h4>
                            <h4>Online/Inperson</h4>
                            <h4>Experties: Physics</h4>
                        </div>
                        </div>
                        <div className="mt-6 mb-2">
                            <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">Quisque</span>
                            <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
                        </div>
                        <p className="dark:text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
                    </div>
                    <div className="p-6  bg-gray-50 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                        <div className="flex">
                        <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center  rounded-md h-40 dark:bg-gray-500" />
                        <div className='ml-5'>
                            <h2>Name</h2>
                            <h4>Salary</h4>
                            <h4>Online/Inperson</h4>
                            <h4>Experties: Physics</h4>
                        </div>
                        </div>
                        <div className="mt-6 mb-2">
                            <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">Quisque</span>
                            <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
                        </div>
                        <p className="dark:text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
                    </div>
                    <div className="p-6  bg-gray-50 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                        <div className="flex">
                        <img src="https://source.unsplash.com/random/300x300/?1" alt="" className=" rounded-md h-40 dark:bg-gray-500" />
                            <div className='ml-5'>
                                <h2>Name</h2>
                                <h4>Salary</h4>
                                <h4>Online/Inperson</h4>
                                <h4>Experties: Physics</h4>
                            </div>
                        </div>
                        <div className="mt-6 mb-2">
                            <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">Quisque</span>
                            <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
                        </div>
                            <p className="dark:text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
                    </div>
                    <div className="p-6  bg-gray-50 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                        <div className="flex">
                        <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center  rounded-md h-40 dark:bg-gray-500" />
                        <div className='ml-5'>
                            <h2>Name</h2>
                            <h4>Salary</h4>
                            <h4>Online/Inperson</h4>
                            <h4>Experties: Physics</h4>
                        </div>
                        </div>
                        <div className="mt-6 mb-2">
                            <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">Quisque</span>
                            <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
                        </div>
                        <p className="dark:text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
                    </div>
                    <div className="p-6  bg-gray-50 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                        <div className="flex">
                        <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center  rounded-md h-40 dark:bg-gray-500" />
                        <div className='ml-5'>
                            <h2>Name</h2>
                            <h4>Salary</h4>
                            <h4>Online/Inperson</h4>
                            <h4>Experties: Physics</h4>
                        </div>
                        </div>
                        <div className="mt-6 mb-2">
                            <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">Quisque</span>
                            <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
                        </div>
                        <p className="dark:text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
                    </div>
                    
                    
                    
                    
                </div>

            </div>
           
        </div>
    );
};

export default Tutors;