import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Muhammad Rifki Kurniawan",
    location: "Yogyakarta, Indonesia",
    email: "rifkikrn1@gmail.com",
    availability: "Open for work",
    brand:
      "I learn new things quickly and work hard. I'm interested in learning how to build a website, like how to make it look good (Frontend), how to make it work well (Backend), and how to do both (Fullstack). If you want to know more about this, let me know!",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
