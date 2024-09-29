import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Info, ArrowRight } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Featured Product 1",
    price: 19.99,
    image: "/pics/product2.png",
  },
  {
    id: 2,
    name: "Featured Product 2",
    price: 24.99,
    image: "/pics/product1.jpg",
  },
  {
    id: 3,
    name: "Featured Product 3",
    price: 29.99,
    image: "/pics/product3.jpg",
  },
];

const Home = () => {
  return (
    <>
      <Head>
        <title>Welcome to Our E-Commerce Site</title>
        <meta
          name="description"
          content="Shop the best products online. Find amazing deals on our wide selection of high-quality items."
        />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                YourBrand
              </Link>
              <div className="flex space-x-4">
                <Link
                  href="/products"
                  className="flex items-center text-gray-600 hover:text-gray-900"
                >
                  <ShoppingBag className="w-5 h-5 mr-1" />
                  Products
                </Link>
                <Link
                  href="/about"
                  className="flex items-center text-gray-600 hover:text-gray-900"
                >
                  <Info className="w-5 h-5 mr-1" />
                  About Us
                </Link>
              </div>
            </div>
          </nav>
        </header>

        <main>
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                Welcome to Our E-Commerce Site
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Discover amazing products at unbeatable prices. Shop now and
                enjoy fast shipping on all orders!
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <Link
                    href="/products"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                    <Link
                      href={`/products/${product.id}`}
                      className="mt-2 inline-flex items-center text-indigo-600 hover:text-indigo-500"
                    >
                      View Product
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-indigo-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
              <h2 className="text-3xl font-extrabold text-white mb-4">
                Ready to start shopping?
              </h2>
              <p className="text-xl text-indigo-200 mb-6">
                Explore our wide range of products and find exactly what you
                need.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Browse All Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </section>
        </main>

        <footer className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-center">
              &copy; 2023 YourBrand. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
