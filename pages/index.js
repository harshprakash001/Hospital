import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Home() {
    return (
        <div>
            <Navbar />
            {/* Hero Section with Your Image */}
            <header className="relative h-screen flex items-center justify-center text-center text-white bg-fixed bg-center bg-cover"
                style={{ backgroundImage: 'url("/mnt/data/g.webp")' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-transparent to-blue-800 opacity-80"></div>
                <div className="relative z-10 px-4">
                    <h1 className="text-6xl font-bold tracking-wide leading-tight animate-fadeInUp text-white">
                        Welcome to <span className="text-teal-400">Modern Health</span>
                    </h1>
                    <p className="mt-4 text-xl max-w-xl mx-auto animate-fadeInDown text-gray-300">
                        Experience the best healthcare services. Your health, our priority.
                    </p>
                    {/* Get Started Button Lowered */}
                    <Link href="/get-started" legacyBehavior>
                        <a className="mt-10 px-10 py-4 bg-teal-500 text-white rounded-full shadow-lg hover:bg-teal-600 transition duration-300 animate-bounce">
                            Get Started
                        </a>
                    </Link>
                </div>
            </header>

            {/* New Section: Why Choose Us */}
            <section className="py-16 bg-gray-100 text-center">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8 animate-fadeIn">Why Choose Us?</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 animate-fadeIn">
                        Modern Health is committed to providing high-quality healthcare services to our patients. 
                        We leverage the latest technology and a team of experienced professionals to ensure you receive 
                        the best care possible. Here's why you should trust us with your health:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInUp">
                            <h3 className="text-2xl font-bold text-teal-500">Experienced Doctors</h3>
                            <p className="mt-4 text-gray-600">Our medical professionals are leaders in their fields, with decades of experience in providing personalized care.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInUp">
                            <h3 className="text-2xl font-bold text-teal-500">Cutting-edge Technology</h3>
                            <p className="mt-4 text-gray-600">We use state-of-the-art equipment to diagnose and treat medical conditions, ensuring the best possible outcomes.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInUp">
                            <h3 className="text-2xl font-bold text-teal-500">Comprehensive Services</h3>
                            <p className="mt-4 text-gray-600">From consultations to surgeries, we provide a full range of medical services under one roof.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-white text-center">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8 animate-fadeIn">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <div className="bg-gray-100 rounded-lg shadow-lg p-6 hover:bg-teal-50 transition-all duration-300 animate-fadeIn">
                            <Image src="/images/medical-icon.svg" alt="Medical Services" width={60} height={60} className="mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-teal-500">Medical Consultation</h3>
                            <p className="mt-2 text-gray-600">Book an appointment with our experienced doctors for expert care.</p>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-gray-100 rounded-lg shadow-lg p-6 hover:bg-teal-50 transition-all duration-300 animate-fadeIn">
                            <Image src="/images/surgery-icon.svg" alt="Surgical Services" width={60} height={60} className="mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-teal-500">Surgical Procedures</h3>
                            <p className="mt-2 text-gray-600">We offer a wide range of surgeries using the latest medical technology.</p>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-gray-100 rounded-lg shadow-lg p-6 hover:bg-teal-50 transition-all duration-300 animate-fadeIn">
                            <Image src="/images/emergency-icon.svg" alt="Emergency Services" width={60} height={60} className="mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-teal-500">Emergency Care</h3>
                            <p className="mt-2 text-gray-600">Our emergency department is available 24/7 for urgent medical needs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Patient Testimonials Section */}
            <section className="py-16 bg-gray-50 text-center">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8 animate-fadeIn">Patient Testimonials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 animate-fadeIn">
                            <p className="text-gray-600">"The staff at Modern Health made me feel so comfortable during my surgery. Their attention to detail and care was outstanding."</p>
                            <p className="mt-4 font-bold text-teal-500">- Sarah Johnson</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 animate-fadeIn">
                            <p className="text-gray-600">"I have been using their online appointment system for months, and it's so easy and convenient!"</p>
                            <p className="mt-4 font-bold text-teal-500">- Michael Smith</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Statistics Section */}
            <section className="py-16 bg-white text-center">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8 animate-fadeIn">Our Impact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="animate-fadeIn">
                            <h3 className="text-6xl font-bold text-teal-500">500+</h3>
                            <p className="mt-2 text-gray-600">Successful Surgeries</p>
                        </div>
                        <div className="animate-fadeIn">
                            <h3 className="text-6xl font-bold text-teal-500">10,000+</h3>
                            <p className="mt-2 text-gray-600">Happy Patients</p>
                        </div>
                        <div className="animate-fadeIn">
                            <h3 className="text-6xl font-bold text-teal-500">100+</h3>
                            <p className="mt-2 text-gray-600">Experienced Doctors</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Section: Our Team */}
            <section className="py-16 bg-gray-100 text-center">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8 animate-fadeIn">Meet Our Team</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 animate-fadeIn">
                        Our dedicated team of healthcare professionals is here to provide you with the best care possible. 
                        Meet some of our team members:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 animate-fadeIn">
                            <Image src="/images/team-member1.jpg" alt="Dr. Alice" width={200} height={200} className="rounded-full mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-teal-500">Dr. Alice Johnson</h3>
                            <p className="mt-2 text-gray-600">Chief Surgeon</p>
                        </div>
                        {/* Team Member 2 */}
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 animate-fadeIn">
                            <Image src="/images/team-member2.jpg" alt="Dr. Bob" width={200} height={200} className="rounded-full mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-teal-500">Dr. Bob Smith</h3>
                            <p className="mt-2 text-gray-600">Pediatrician</p>
                        </div>
                        {/* Team Member 3 */}
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 animate-fadeIn">
                            <Image src="/images/team-member3.jpg" alt="Dr. Clara" width={200} height={200} className="rounded-full mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-teal-500">Dr. Clara Lee</h3>
                            <p className="mt-2 text-gray-600">Cardiologist</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
