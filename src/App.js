import React from "react";
import NavigationBar from "./components/NavigationBar";
import TimeshareCarousel from "./components/Carousel";
import TimeshareCard from "./components/TimeshareCard";
import Footer from "./components/Footer";

// Mock data for timeshares
const timeshares = [
  {
    id: 1,
    title: "Etitle",
    imageUrl:
      "https://a0.muscache.com/im/pictures/miso/Hosting-611964103002302908/original/ede7b8fc-9f6a-40ec-8f58-45b19d941a18.jpeg?im_w=720",
    checkIn: "EDateIn",
    checkOut: "EDateOut",
    starRating: "ERate",
    price: "EPrice",
  },
  {
    id: 2,
    title: "Etitle",
    imageUrl:
      "https://a0.muscache.com/im/pictures/f18dad97-7d8b-444a-9d94-1a428f37f36b.jpg?im_w=720",
    checkIn: "EDateIn",
    checkOut: "EDateOut",
    starRating: "ERate",
    price: "EPrice",
  },
  {
    id: 3,
    title: "Etitle",
    imageUrl:
      "https://a0.muscache.com/im/pictures/a79e93bb-a070-4705-b5fd-a45bbf56626e.jpg?im_w=720",
    checkIn: "EDateIn",
    checkOut: "NeyuD",
    starRating: "ERate",
    price: "EPrice",
  },
  {
    id: 4,
    title: "Etitle",
    imageUrl:
      "https://a0.muscache.com/im/pictures/ea34ac88-2977-4d01-b8a7-f56e5e5700a4.jpg?im_w=720",
    checkIn: "EDateIn",
    checkOut: "EDateOut",
    starRating: "ERate",
    price: "EPrice",
  },
  {
    id: 5,
    title: "Etitle",
    imageUrl:
      "https://a0.muscache.com/im/pictures/41912165/e6ab5568_original.jpg?im_w=720",
    checkIn: "EDateIn",
    checkOut: "EDateOut",
    starRating: "ERate",
    price: "EPrice",
  },
  {
    id: 6,
    title: "Etitle",
    imageUrl:
      "https://a0.muscache.com/im/pictures/3e13ae05-69b2-4da8-8367-6e8aca8e44c1.jpg?im_w=720",
    checkIn: "EDateIn",
    checkOut: "EDateOut",
    starRating: "ERate",
    price: "EPrice",
  },
  {
    id: 7,
    title: "Etitle",
    imageUrl: "https://a0.muscache.com/im/pictures/miso/Hosting-31299829/original/3d4cdb14-bc70-424b-a8bf-75c45d8a4427.jpeg?im_w=720",
    checkIn: "2EDateIn",
    checkOut: "EDateOut",
    starRating: "ERate",
    price: "EPrice"
  }, {
    id: 8,
    title: "Etitle",
    imageUrl: "https://a0.muscache.com/im/pictures/2d1545a3-5e77-44f6-a387-e31a465d22e1.jpg?im_w=720",
    checkIn: "EDateIn",
    checkOut: "EDateOut",
    starRating: "ERate",
    price: "EPrice"
  },
  // ... more timeshares
];

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <TimeshareCarousel />
      <div className="timeshare-cards-container">
        {timeshares.map((timeshare) => (
          <TimeshareCard
            key={timeshare.id}
            title={timeshare.title}
            imageUrl={timeshare.imageUrl}
            checkIn={timeshare.checkIn}
            checkOut={timeshare.checkOut}
            starRating={timeshare.starRating}
            price={timeshare.price}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
