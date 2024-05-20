import { Header, Features } from "@/modules/home/components";

const HomePage = () => {
  return (
    <>
      <Header />
      <Features />
      <main className="h-screen grid place-content-center">
        <h1 className="text-8xl">Gym App</h1>
      </main>
    </>
  );
};

export default HomePage;
