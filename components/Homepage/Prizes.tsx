import { imgFour, prizeBg } from "@/assets"
import Image from "next/image"

const Prizes = () => {
  return (
    <section className="relative">
  <div className="absolute inset-0 bg-black opacity-40 z-10 rounded"></div>
  <Image src={prizeBg} alt="img" className="relative z-0 rounded h-100" />
  <div className="absolute top-0 z-20 text-white p-5">
    <h3 className="text-5xl pt-10">Prizes</h3>
    <p className="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cupiditate, omnis corrupti aperiam nam quae rerum debitis beatae saepe magnam dolore quod amet facilis reprehenderit id minus nulla voluptatibus ipsum!</p>
  </div>
</section>

  )
}

export default Prizes
