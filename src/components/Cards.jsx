import React from 'react'
import { assets } from '../assets/assets'

const Cards = ({ items }) => {
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString("en-US", options);
    };
    return (
        <>
            {
                items.map((item) => (
                    <div key={item.id} className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                        <img src={item.image} className='rounded-t-lg lg:w-full' alt="blog_image" />
                        <div className='p-4'>
                            <h5 className='mb-2 text-xl lg:text-base font-bold tracking-tight text-gray-900 dark:text-white'>{item.title}</h5>

                            <div className='flex gap-2 items-center'>
                                <img src={assets.profile} alt="" className='w-5 h-5' />
                                <p className='text-gray-600'>{item.author}</p>
                            </div>
                            <p className='mt-2 text-gray-600 text-base font-garmond'>Published {formatDate(item.published_date)}</p>
                        </div>
                    </div>
                ))
            }

        </>
    )
}

export default Cards