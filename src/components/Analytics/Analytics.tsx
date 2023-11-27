import analyticsImage from "../../assets/data analytics.jpg"

export const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img src={analyticsImage} alt="Analytics" className="w-[500px] mx-auto my-4 rounded-sm"/>

          <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Manage Data Analytics Centrally
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consectetur totam animi, unde, quae alias at voluptatibus repellendus ullam maiores dolor, quaerat minima cupiditate quam rem odio laboriosam rerum magnam.
            </p>

            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 max-md:mx-auto'>Get Started</button>
          </div>
      </div>
    </div>
  )
}
