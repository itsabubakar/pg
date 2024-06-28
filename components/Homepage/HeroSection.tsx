import Image from "next/image"
import CtaButton from "../CtaButton"
import { imgOne, imgTwo } from "@/assets"

type Props = {}
const HeroSection = (props: Props) => {
    return (
        <section className="md:flex-row flex flex-col pt-20 gap-10">
            <div className="md:w-1/2">
                <Image className="max-h-[400px] rounded-md" alt="Hero image" src={imgTwo} />
            </div>
            <div className="text-gray-700 md:w-1/2">
                <h1 className="md:text-5xl text-3xl text-gray-700 pb-4 font-bold">The Online UX Hackathon</h1>
                <h2 className="text-2xl pb-2 font-semibold">February 13, 2021 – February 14, 2021
                </h2>
                <p className="pb-6 font-medium text-sm">Test your rapid prototyping and design thinking skills! Push the limits of your mind to make something amazing.</p>
                <CtaButton />
            </div>
        </section>
    )
}
export default HeroSection