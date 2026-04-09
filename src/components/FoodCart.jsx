import Image from "next/image";
import Link from "next/link";


const FoodCart = ({ food }) => {
    const { id, dish_name, image_link, category, price } = food;
    return (
        <div className="card bg-base-100 shadow-sm h-full">
            <figure>
                <Image

                    src={image_link}
                    alt={dish_name}
                    width={400}
                    height={200}
                ></Image>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {dish_name}
                    <div className="badge badge-secondary">NEW</div>
                    <p><small>Category: {category}</small></p>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <p>Price: ${price}</p>
                <div className="card-actions justify-end">
                 
                    <button className="btn btn-primary">Add to Cart</button>
                    <Link href={`/foods/${id}`}>
                    <button className="btn btn-primary">Show Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;