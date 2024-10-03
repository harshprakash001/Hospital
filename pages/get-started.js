import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function GetStarted() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <main className="relative flex flex-col items-center justify-center text-center text-gray-800 py-20 bg-gradient-to-b from-blue-400 to-teal-500">
                <div className="absolute inset-0 opacity-20">
                    <Image 
                        src="/images/hero-image.jpg" 
                        alt="Background Image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="relative z-10 max-w-2xl px-4">
                    <h1 className="text-5xl font-extrabold text-white animate-fadeInUp mb-4">
                        Get Started with Your Healthcare Journey
                    </h1>
                    <p className="text-lg text-white animate-fadeInDown mb-6">
                        Join our hospital system today and manage your appointments, doctors, and health records in one place.
                    </p>
                    <div className="space-y-4 animate-fadeInUp">
                        <button className="bg-white text-teal-600 px-8 py-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
                            Create Account
                        </button>
                        <button className="bg-teal-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-teal-700 transition duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </main>

            <section className="py-16 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8 text-gray-700">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="group bg-gray-100 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                            <i className="fas fa-heartbeat text-4xl text-teal-500 mb-4"></i>
                            <h3 className="text-xl font-bold group-hover:text-teal-500">Advanced Technology</h3>
                            <p className="mt-2 text-gray-600">We use state-of-the-art equipment for all medical procedures.</p>
                        </div>
                        <div className="group bg-gray-100 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                            <i className="fas fa-user-md text-4xl text-teal-500 mb-4"></i>
                            <h3 className="text-xl font-bold group-hover:text-teal-500">Expert Doctors</h3>
                            <p className="mt-2 text-gray-600">Our doctors are highly trained and experienced in their fields.</p>
                        </div>
                        <div className="group bg-gray-100 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                            <i className="fas fa-hospital text-4xl text-teal-500 mb-4"></i>
                            <h3 className="text-xl font-bold group-hover:text-teal-500">Comprehensive Care</h3>
                            <p className="mt-2 text-gray-600">We provide a full range of healthcare services under one roof.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
