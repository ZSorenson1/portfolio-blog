import "./globals.css";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans text-[#F5ECEE]">
      <header className="flex flex-col justify-start w-full">
        <h1 className="text-3xl my-4 ml-8 w-full">
          Zachary Sorenson | Full Stack Developer
        </h1>
        <div className="flex flex-row w-full">
          <div className="flex flex-row">
            <button className="navBtn active">About Me</button>
            <button className="navBtn">Projects</button>
            <button className="navBtn">Blog</button>
          </div>
          <button className="text-xl ml-auto bg-[#E89FB0] p-2 mr-8 mb-3 rounded hover:scale-110 transition-transform duration-350 ease-in-out shadow-[0px_0px_2px_2px_#F5ECEE]/50">Contact</button>
        </div>
      </header>
      <main className="flex flex-1 w-full h-full p-2 flex-col items-start justify-between py-3 px-16 ">
        test
      </main>
    </div>
  );
}
