'use client'
import { useState } from 'react';

type Props = {}

const RegistrationFlow = (props: Props) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-10 mt-10 border-y border-gray-200 flex flex-col md:flex-row gap-y-10">
            <div className="md:w-1/3 text-3xl md:text-5xl font-semibold">
                <span className="font-bold">Registration</span> Process
            </div>
            <div className="w-2/3">
                {['form a team', 'form a team', 'form a team'].map((title, index) => (
                    <div key={index} className="mb-4">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => handleToggle(index)}
                        >
                            <p className="text-lg font-medium">{title}</p>
                            <button className="text-xl font-bold">
                                {activeIndex === index ? '-' : '+'}
                            </button>
                        </div>
                        <div
                            className={`overflow-hidden transition-all duration-1000 ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}
                        >
                            <p className="mt-2 text-gray-700">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi illo, sapiente voluptas sunt repudiandae reiciendis at velit amet doloremque, vitae voluptatum architecto ipsam sint facilis atque mollitia alias dolores autem!
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default RegistrationFlow;
