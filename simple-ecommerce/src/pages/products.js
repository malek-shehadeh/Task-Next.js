import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    rating: 4.5,
    image: "/pics/product2.png",
  },
  {
    id: 2,
    name: "Product 2",
    price: 20,
    rating: 3.8,
    image: "/pics/product1.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: 30,
    rating: 4.2,
    image: "/pics/product3.jpg",
  },
  { id: 4, name: "Product 4", price: 25, rating: 4.0, image: "/product4.jpg" },
  { id: 5, name: "Product 5", price: 15, rating: 3.5, image: "/product5.jpg" },
  { id: 6, name: "Product 6", price: 35, rating: 4.7, image: "/product6.jpg" },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Our Products | Your E-commerce Store</title>
        <meta
          name="description"
          content="Browse our wide selection of high-quality products at great prices."
        />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h1 className="text-3xl font-bold text-gray-900">Our Products</h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" />
            </div>
          </div>
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-500 mt-8">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      {product.name}
                    </h2>
                    <div className="flex items-center mb-2">
                      <span className="text-yellow-500 mr-1">
                        <Star className="w-5 h-5 inline" fill="currentColor" />
                      </span>
                      <span className="text-gray-600">
                        {product.rating.toFixed(1)}
                      </span>
                    </div>
                    <p className="text-gray-600 font-bold mb-4">
                      ${product.price.toFixed(2)}
                    </p>
                    <div className="flex justify-between items-center">
                      <Link
                        href={`/products/${product.id}`}
                        className="text-blue-500 hover:text-blue-600"
                      >
                        View Details
                      </Link>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center">
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Products;
