export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Hospital Management System. All rights reserved.</p>
                <div className="flex justify-center space-x-6 mt-4">
                    <a href="#" className="text-teal-500 hover:text-teal-400">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="text-teal-500 hover:text-teal-400">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-teal-500 hover:text-teal-400">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}
