const professionals = {
  "1": {
    name: "The Don",
    location: "East Legon",
    rating: 4.5,
    description:
      "Don is a top-rated stylist in East Legon, known for his modern cuts and friendly service. Book now for a fresh look!",
    services: ["Trim", "Nails", "Braids", "Lashes"],
    image: "/don.jpg", // Replace with your actual image path
    offeredBy: {
      name: "The Don",
      avatar: "/don.jpg", 
      online: true,
    },
  },
  "2": {
    name: "Mavis' Inn",
    location: "Labadi",
    rating: 4.5,
    description:
      "Mavis offers expert hair and beauty services in Labadi. Her clients love her attention to detail and warm personality.",
    services: ["Braids", "Lashes", "Makeup", "Trim"],
    image: "/mavis.jpg", // Replace with your actual image path
    offeredBy: {
      name: "Mavis",
      avatar: "/mavis.jpg", // Replace with your actual image path
      online: true,
    },
  },
  // Default/fallback example
  "default": {
    name: "Hair Dresser",
    location: "Offorikurom, Kumasi",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ni..  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ni...",
    services: ["Trim", "Nails", "Braids", "Lashes"],
    image: "/hairdresser-tools.jpg",
    offeredBy: {
      name: "Ama Serwaa",
      avatar: "/ama.jpg",
      online: true,
    },
  },
};

export default function Menu() {
  return (
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-1">{data.name}</h1>
          <div className="flex items-center text-gray-500 mb-2 gap-2">
            <span>📍</span>
            <span className="text-base">{data.location}</span>
          </div>
          <div className="flex items-center gap-1 mb-4">
            <span className="text-yellow-500 text-xl">★</span>
            <span className="font-semibold text-lg">{data.rating}</span>
          </div>
          <hr className="my-4" />
          <p className="text-gray-500 text-base mb-6 line-clamp-4">{data.description}</p>

          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-2">My Services</h2>
            <div className="flex flex-wrap gap-2">
              {data.services.map((service) => (
                <span key={service} className="px-4 py-1 border rounded-full text-gray-700 text-sm bg-gray-100">
                  {service}
                </span>
              ))}
            </div>
            </div>
            </div>
          
          );
}