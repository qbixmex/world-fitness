import { Navbar } from "@/modules/home/components";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="h-screen grid place-content-center">
        <h1 className="text-8xl">Gym App</h1>
      </main>
    </>
  );
};

export default HomePage;
