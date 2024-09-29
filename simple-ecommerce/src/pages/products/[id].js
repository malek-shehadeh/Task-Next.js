import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { Star, ShoppingCart, ArrowLeft } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    description: "Description for Product 1",
    rating: 4.5,
    reviews: 120,
    image: "/pics/product2.png",
  },
  {
    id: 2,
    name: "Product 2",
    price: 20,
    description: "Description for Product 2",
    rating: 3.8,
    reviews: 85,
    image: "/pics/product1.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: 30,
    description: "Description for Product 3",
    rating: 4.2,
    reviews: 200,
    image: "/pics/product3.jpg",
  },
];

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);

  if (!product)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  const handleQuantityChange = (e) => {
    setQuantity(Math.max(1, parseInt(e.target.value) || 1));
  };

  return (
    <>
      <Head>
        <title>{product.name} | Your Store</title>
        <meta name="description" content={product.description} />
      </Head>
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to products
          </button>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">
                    ({product.reviews} reviews)
                  </span>
                </div>
                <p className="text-gray-600 mb-8">{product.description}</p>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-3xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  <div className="flex items-center">
                    <label htmlFor="quantity" className="mr-2 text-gray-700">
                      Quantity:
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      min="1"
                    />
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
