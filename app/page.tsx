import { FlexedImage, HeroSection } from "@/components"

type Props = {}
const page = (props: Props) => {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-0">
      <HeroSection />
      <section className="pt-20">
        <h2 className="text-3xl text-center text-gray-800 font-semibold pb-4">How Does it Work?</h2>
        <p className=" text-center text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque itaque similique amet. Sapiente deleniti dolore placeat laudantium accusamus repudiandae magnam unde asperiores vitae. Eveniet, iusto minima deserunt adipisci optio ipsum?</p>
      </section>

      <section>
        <FlexedImage />
        <FlexedImage reverse={true} />
        <FlexedImage />
      </section>

      <section className="pt-20">
        <h2 className="text-3xl text-center text-gray-800 font-semibold pb-4">The Judges</h2>
        <p className=" text-center text-gray-700">Get an opportunity to get feedback from the best and brightest designers in UX!</p>
      </section>
    </div>
  )
}
export default page