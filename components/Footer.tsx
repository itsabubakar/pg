// components/Footer.js
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow">
            <div className="w-full max-w-6xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse" href="https://flowbite.com/">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap ">Logo</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
                        <li>
                            <Link className="hover:underline me-4 md:me-6" href="#">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:underline me-4 md:me-6" href="#">
                                Sponsor
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:underline me-4 md:me-6" href="#">
                                Mentor
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:underline me-4 md:me-6" href="#">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center ">
                    © 2024 <Link className="hover:underline" href="https://flowbite.com/"> TheNebulaFoundation</Link>. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
