import Constant from "../assets/Constant"

const Features = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 " id="feature">
            <h2 className="text-4xl font-bold text-center mb-14">Powerful Features for Smart Learning</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Constant.features.map((feature, index) => (
                    <a href={feature.link} key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                        <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Features