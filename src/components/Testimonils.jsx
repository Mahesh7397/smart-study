import Constant from "../assets/Constant";
import Marquee from "react-fast-marquee"

const Testimonils = () => {

  return (
    <div className="bg-purple-900 text-white py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
                        <div className="grid md:grid-cols-1 grid-row-2 gap-8">
                            <Marquee speed={50} >
                                {Constant.testimonials.map((resouce,index)=>(
                                    <div key={index} className="bg-purple-800 mix-w-2xs max-w-lg p-6 rounded-xl m-6">
                                    <p className="text-lg mb-4">{resouce.content}</p>
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={resouce.image}
                                            alt={resouce.name}
                                            className="w-12 h-12 rounded-full"
                                        />
                                        <div>
                                            <h4 className="font-semibold">{resouce.name}</h4>
                                            <p className="text-purple-200">{resouce.role}</p>
                                        </div>
                                    </div>
                                </div>))}
                                </Marquee>
                                <Marquee speed={50} direction="right" >
                                {Constant.testimonials.map((resouce,index)=>(
                                    <div key={index} className="bg-purple-800 mix-w-2xs max-w-lg p-6 rounded-xl m-6">
                                    <p className="text-lg mb-4">{resouce.content}</p>
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={resouce.image}
                                            alt={resouce.name}
                                            className="w-12 h-12 rounded-full"
                                        />
                                        <div>
                                            <h4 className="font-semibold">{resouce.name}</h4>
                                            <p className="text-purple-200">{resouce.role}</p>
                                        </div>
                                    </div>
                                </div>))}
                                </Marquee>
                        </div>
                    </div>
                </div>
  )
}

export default Testimonils