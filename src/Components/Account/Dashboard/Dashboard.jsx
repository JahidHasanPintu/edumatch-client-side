import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <div class="flex flex-col">

                <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                    <div class="shadow-lg bg-red-500 border-l-8 hover:bg-red-700 border-red-700 mb-2 p-2 md:w-1/4 mx-2">
                        <div class="p-4 flex flex-col">
                            <a href="#" class="no-underline text-white text-2xl">
                                244
                            </a>
                            <a href="#" class="no-underline text-white text-lg">
                                Total Students
                            </a>
                        </div>
                    </div>

                    <div class="shadow bg-info border-l-8 hover:bg-info-700 border-info mb-2 p-2 md:w-1/4 mx-2">
                        <div class="p-4 flex flex-col">
                            <a href="#" class="no-underline text-white text-2xl">
                                $199.4
                            </a>
                            <a href="#" class="no-underline text-white text-lg">
                                Total Earning
                            </a>
                        </div>
                    </div>

                    <div class="shadow bg-warning border-l-8 hover:bg-warning border-warning mb-2 p-2 md:w-1/4 mx-2">
                        <div class="p-4 flex flex-col">
                            <a href="#" class="no-underline text-white text-2xl">
                                900
                            </a>
                            <a href="#" class="no-underline text-white text-lg">
                                Total Video
                            </a>
                        </div>
                    </div>

                    <div class="shadow bg-success border-l-8 hover:bg-success border-success mb-2 p-2 md:w-1/4 mx-2">
                        <div class="p-4 flex flex-col">
                            <a href="#" class="no-underline text-white text-2xl">
                                50
                            </a>
                            <a href="#" class="no-underline text-white text-lg">
                                Total Courses
                            </a>
                        </div>
                    </div>
                </div>


                <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2 w-full">



                    <div class="rounded overflow-hidden shadow bg-white mx-2 w-full">
                        <div class="px-6 py-2 border-b border-grey-700">
                            <div class="font-bold text-xl">Trending Categories</div>
                        </div>
                        <div class="table-responsive">
                            <table class="table text-greyest w-full">
                                <thead class="bg-black text-white text-normal">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Item</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Current</th>
                                        <th scope="col">Change</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>
                                            <button class="bg-blue-500 hover:bg-blue-800 text-white font-light py-1 px-2 rounded-full">
                                                Twitter
                                            </button>
                                        </td>
                                        <td>4500</td>
                                        <td>4600</td>
                                        <td>
                                            <span class="text-green-500"><i class="fas fa-arrow-up"></i>5%</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>
                                            <button class="bg-primary hover:bg-primary text-white font-light py-1 px-2 rounded-full">
                                                Facebook
                                            </button>
                                        </td>
                                        <td>10000</td>
                                        <td>3000</td>
                                        <td>
                                            <span class="text-red-500"><i class="fas fa-arrow-down"></i>65%</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th scope="row">3</th>
                                        <td>
                                            <button class="bg-success hover:bg-success text-white font-light py-1 px-2 rounded-full">
                                                Amazon
                                            </button>
                                        </td>
                                        <td>10000</td>
                                        <td>3000</td>
                                        <td>
                                            <span class="text-red-500"><i class="fas fa-arrow-down"></i>65%</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th scope="row">4</th>
                                        <td>
                                            <button class="bg-blue-500 hover:bg-blue-800 text-white font-light py-1 px-2 rounded-full">
                                                Microsoft
                                            </button>
                                        </td>
                                        <td>10000</td>
                                        <td>3000</td>
                                        <td>
                                            <span class="text-green-500"><i class="fas fa-arrow-up"></i>65%</span>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    );
};

export default Dashboard;