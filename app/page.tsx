import Image from "next/image";
import NavBar from "./Navbar/navbar";

export default function Home() {
  return (
    <>
    <NavBar/>
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-extrabold dark:text-white">Welcome to next.js</h1>
      <Image 
      className="m-8"
      src={'/flower.png'}
      alt="pink flower"
      width={200}
      height={200}
      />
    </main>
    </>
  );
}
