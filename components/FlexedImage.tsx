import { imgThree } from "@/assets"
import Image from "next/image"
import CtaButton from "./CtaButton"

type Props = {
    reverse?: boolean
    heading?: string
    paragraph: string
    imgSrc?: string
    ctaButton?: boolean
}
const FlexedImage = ({ reverse, heading, paragraph, ctaButton }: Props) => {
    return (
        <div className={`pt-20 items-center flex flex-col md:flex-row gap-10 text-gray-800 ${reverse ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/2">
                <Image className="max-h-[400px] rounded-md" alt="image" src={imgThree} />
            </div>
            <div className="md:w-1/2">
            {heading && <h3 className="text-2xl font-semibold pb-2">{heading}</h3>}
                
                <p>{paragraph}</p>
                {ctaButton && <div className="pt-4">

                    <CtaButton />
                </div>}

            </div>
        </div>
    )
}
export default FlexedImage