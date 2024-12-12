
import Button from "../layouts/Buttons"
const Products = () => {
    const products = [
        {
            id: 1,
            name: "Atho",
            price: 7.79,
            image: "https://images.pexels.com/photos/13065187/pexels-photo-13065187.jpeg",
            rating: 3.8,
        },
        {
            id: 2,
            name: "Ham burger",
            price: 15.99,
            image: "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            rating: 4.3,
        },
        {
            id: 3,
            name: "Chicken Noodles",
            price: 5.15,
            image: "https://images.pexels.com/photos/5338138/pexels-photo-5338138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            rating: 4.8,
        },
        {
            id: 4,
            name: "Tacos",
            price: 15.49,
            image: "https://images.pexels.com/photos/7613568/pexels-photo-7613568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            rating: 4.3,
        },
        {
            id: 5,
            name: "tuna Fish",
            price: 9.99,
            image: "https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            rating: 4.74,
        },
        {
            id: 6,
            name: "Steak",
            price: 29.00,
            image: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            rating: 4.9,
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-5 md:px-20">
            <h1 className="text-center text-3xl font-semibold mb-10">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-medium">{product.name}</h2>
                            <div className="flex items-center mt-2">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <span
                                        key={index}
                                        className={
                                            index < Math.round(product.rating)
                                                ? "text-orange-400"
                                                : "text-gray-300"
                                        }
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                            <p className="mt-2 text-xl font-bold text-gray-800">
                                ${product.price.toFixed(2)}
                            </p>
                            <Button title="Add to Cart"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
