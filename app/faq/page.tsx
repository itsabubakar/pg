import { FlexedImage } from "@/components"

const page = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-0">
      <FlexedImage
      heading="FAQ"
      reverse
          paragraph={"If there is an answer you cannot find, please let us know on dubstech@uw.edu."}
        />

        <section>
          <div>
            <h3>Do I need to pay anything?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet similique iste dolor quas vitae saepe incidunt quaerat, sunt harum et cupiditate repudiandae ducimus ex, reiciendis adipisci eligendi quod iusto eius!</p>
          </div>
          <div>
            <h3>Do I need to pay anything?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet similique iste dolor quas vitae saepe incidunt quaerat, sunt harum et cupiditate repudiandae ducimus ex, reiciendis adipisci eligendi quod iusto eius!</p>
          </div>
        </section>
    </div>
  )
}

export default page
