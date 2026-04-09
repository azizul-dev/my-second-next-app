import Image from 'next/image';
import React from 'react';

const FoodDetailPage = async ({ params }) => {
    const { foodId } = await params;

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();

    const food = data?.data;

    if (!food) {
        return <h2>Food not found 😢</h2>;
    }

    const { id, dish_name, image_link } = food;

    return (
        <div>
            <h2>Show detail of food: {foodId}</h2>
            <h3 className='text-3xl'>{dish_name}</h3>

            <Image
                src={image_link}
                alt={dish_name}
                width={400}
                height={200}
            />
        </div>
    );
};

export default FoodDetailPage;