import Head from "next/head";
import Image from "next/image";
import { Camera, Truck, Star } from "lucide-react";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Your E-commerce Store</title>
        <meta
          name="description"
          content="Learn more about our e-commerce store, our mission, and our commitment to quality products and customer satisfaction."
        />
      </Head>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row items-center mb-8">
                    <div className="md:w-1/2 mb-4 md:mb-0">
                      <Image
                        src="/pics/images.png"
                        alt="About Our Store"
                        width={500}
                        height={300}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                      <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                      <p className="text-gray-600 mb-4">
                        Founded in 2020, our e-commerce store has grown from a
                        small startup to a trusted online retailer. We're
                        passionate about delivering high-quality products and
                        exceptional customer service.
                      </p>
                      <p className="text-gray-600">
                        Our mission is to make online shopping easy, enjoyable,
                        and reliable for customers worldwide.
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-8">
                    <h2 className="text-2xl font-semibold mb-6">
                      Why Choose Us?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex flex-col items-center text-center">
                        <Camera className="w-12 h-12 text-blue-500 mb-4" />
                        <h3 className="text-lg font-medium mb-2">
                          Quality Products
                        </h3>
                        <p className="text-gray-600">
                          We carefully curate our product selection to ensure
                          the highest quality for our customers.
                        </p>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <Truck className="w-12 h-12 text-green-500 mb-4" />
                        <h3 className="text-lg font-medium mb-2">
                          Fast Shipping
                        </h3>
                        <p className="text-gray-600">
                          Enjoy quick and reliable shipping options to get your
                          products as soon as possible.
                        </p>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <Star className="w-12 h-12 text-yellow-500 mb-4" />
                        <h3 className="text-lg font-medium mb-2">
                          Customer Satisfaction
                        </h3>
                        <p className="text-gray-600">
                          Our dedicated support team is always ready to assist
                          you with any questions or concerns.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default About;
