import { FlexedImage } from "@/components"

const page = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-0">
      <section>
      <FlexedImage
          heading="FAQ"
          paragraph={"If there is an answer you cannot find, please let us know on dubstech@uw.edu."}
        />
      </section>
      <section className="pt-10">
        <p className="pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id amet nulla doloribus voluptatem minima quae, harum cupiditate nisi perferendis? Ipsum voluptate illo mollitia ullam ut nemo optio architecto atque neque.</p>
        <p className="pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id amet nulla doloribus voluptatem minima quae, harum cupiditate nisi perferendis? Ipsum voluptate illo mollitia ullam ut nemo optio architecto atque neque.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id amet nulla doloribus voluptatem minima quae, harum cupiditate nisi perferendis? Ipsum voluptate illo mollitia ullam ut nemo optio architecto atque neque.</p>
      </section>
    </div>
  )
}

export default page
