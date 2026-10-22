import "./globals.css";
import NavBar from "@layout/NavBar";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans text-[#F5ECEE]">
      <header className="flex flex-col justify-start w-full">
        <h1 className="text-3xl my-4 ml-8 w-full">
          Zachary Sorenson | Full Stack Developer
        </h1>
        <NavBar />
      </header>
      <main className="flex flex-1 w-full h-full p-2 flex-col items-start justify-between py-3 px-16 ">
        test
      </main>
    </div>
  );
}
