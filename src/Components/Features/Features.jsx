import React from 'react';
import './Features.css'

const Features = () => {
    return (
        <div>
            <div className="flex w-full px-20px md:p-30px py-40px rounded border border-gray-300 bg-white">
    <div className="feature-block-wrapper w-full grid grid-cols-1 gap-x-30px gap-y-40px md:grid-cols-2 xl:grid-cols-4 xxl:gap-30px">
        <div className="feature-block flex w-full items-start flex-row feature-block"><span className="flex items-center justify-center w-70px h-70px rounded-full mr-20px bg-gray-300 flex-shrink-0 text-24px font-semibold bg-color-one" >1</span>
            <div className="flex flex-col items-start"><span className="w-full text-18px font-semibold text-gray-900 mt-0 mb-2">Your Order</span>
                <p className="w-full leading-6 text-14px">Add products to your cart, enter your details and confirm.</p>
            </div>
        </div>
        <div className="feature-block flex w-full items-start flex-row feature-block"><span className="flex items-center justify-center w-70px h-70px rounded-full mr-20px bg-gray-300 flex-shrink-0 text-24px font-semibold" style={{"background-color":"#ceeffe"}}>2</span>
            <div className="flex flex-col items-start"><span className="w-full text-18px font-semibold text-gray-900 mt-0 mb-2">Picking your order</span>
                <p className="w-full leading-6 text-14px">Your order is  picked and now will be forwarded for packaging.</p>
            </div>
        </div>
        <div className="feature-block flex w-full items-start flex-row feature-block"><span className="flex items-center justify-center w-70px h-70px rounded-full mr-20px bg-gray-300 flex-shrink-0 text-24px font-semibold" style={{"background-color":"#d4f8c4"}}>3</span>
            <div className="flex flex-col items-start"><span className="w-full text-18px font-semibold text-gray-900 mt-0 mb-2">Packing Your Order</span>
                <p className="w-full leading-6 text-14px">We are packing your order and will be out for delivery soon.</p>
            </div>
        </div>
        <div className="feature-block flex w-full items-start flex-row feature-block"><span className="flex items-center justify-center w-70px h-70px rounded-full mr-20px bg-gray-300 flex-shrink-0 text-24px font-semibold" style={{"background-color":"#d8dafe"}}>4</span>
            <div className="flex flex-col items-start"><span className="w-full text-18px font-semibold text-gray-900 mt-0 mb-2">Deliver</span>
                <p className="w-full leading-6 text-14px">Your order has been prepared and out for delivery. It will be delivered soon.</p>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default Features;