

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
            <div>
                <h3 className="text-xl font-bold mb-4">Smart Study</h3>
                <p className="text-gray-400">Your smart study companion for success in online education.</p>
            </div>
            <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                    <li><a href="#feature" className="text-gray-400 hover:text-white transition">Features</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                    <li><a href="#resource" className="text-gray-400 hover:text-white transition">Study Materials</a></li>
                    <li><a href="/ai-tutor" className="text-gray-400 hover:text-white transition">AI Tutor</a></li>
                    <li><a href="/community" className="text-gray-400 hover:text-white transition">Community</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <p className="text-gray-400 mb-4">+91 7397423635</p>
                <p className="text-gray-400 mb-4">maheshwaranm116@gmail.com</p>
                <p className="text-gray-400 mb-4">+91 6381181744</p>
                <p className="text-gray-400 mb-4">mohamedfazilrm@gmail.com</p>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer