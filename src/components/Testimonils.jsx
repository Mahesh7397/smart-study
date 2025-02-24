import Constant from "../assets/Constant"

const Testimonils = () => {
  return (
    <div className="bg-purple-900 text-white py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {Constant.testimonials.map((testimonial, index) => (
                                <div key={index} className="bg-purple-800 p-6 rounded-xl">
                                    <p className="text-lg mb-4">{testimonial.content}</p>
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full"
                                        />
                                        <div>
                                            <h4 className="font-semibold">{testimonial.name}</h4>
                                            <p className="text-purple-200">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
  )
}

export default Testimonils