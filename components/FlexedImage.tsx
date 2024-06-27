import { imgThree } from "@/assets"
import Image from "next/image"

type Props = {
    reverse?: boolean
    heading?: string
    paragraph?: string
    imgSrc?: string
}
const FlexedImage = ({ reverse }: Props) => {
    return (
        <div className={`pt-20 items-center flex flex-col md:flex-row gap-10 text-gray-800 ${reverse ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/2">
                <Image className="max-h-[400px] rounded-md" alt="image" src={imgThree} />
            </div>
            <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold pb-2">1. Understand the Problem</h3>
                <p>Pick a prompt from one of our tracks: classic, enterprise, or valentine's day. Each prompt gives you some info, but yoaure encouraged to research the problem yourself!</p>
            </div>
        </div>
    )
}
export default FlexedImage