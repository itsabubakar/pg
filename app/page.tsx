import { CtaButton, FlexedImage, Footer, HeroSection, RegistrationFlow } from "@/components"

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
        <FlexedImage
          heading={"1. Understand the Problem"}
          paragraph={"Pick a prompt from one of our tracks: classic, enterprise, or valentine's day. Each prompt gives you some info, but yoaure encouraged to research the problem yourself!"}
        />
        <FlexedImage
          reverse={true}
          heading={"1. Understand the Problem"}
          paragraph={"Pick a prompt from one of our tracks: classic, enterprise, or valentine's day. Each prompt gives you some info, but yoaure encouraged to research the problem yourself!"}
        />
        <FlexedImage
          heading={"1. Understand the Problem"}
          paragraph={"Pick a prompt from one of our tracks: classic, enterprise, or valentine's day. Each prompt gives you some info, but yoaure encouraged to research the problem yourself!"}
        />
      </section>

      <RegistrationFlow />


      <section className="pt-20">
        <h2 className="text-3xl text-center text-gray-800 font-semibold pb-4">The Judges</h2>
        <p className=" text-center text-gray-700">Get an opportunity to get feedback from the best and brightest designers in UX!</p>
      </section>

      <section>

        <FlexedImage
          heading={"Register Now"}
          paragraph={"Everything we do is free - spots are limited so we recommend you register soon!"}
          ctaButton={true}
        />
        <FlexedImage
          reverse={true}
          heading={"Have a Question?"}
          paragraph={"We have put together the answers you have been looking for. If there is an answer you cannot find, please let us know on dubstech@uw.edu."}
          ctaButton={true}

        />

      </section>



      <Footer />

    </div>
  )
}

export default page