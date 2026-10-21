import "./globals.css";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans text-[#F5ECEE]">
      <header className="flex flex-col justify-start w-full border-b-1">
        <h1 className="text-3xl my-4 ml-8 font-color-black w-full">
          Zachary Sorenson | Full Stack Developer
        </h1>
        <div className="flex-row">
          <button className="navBtn active">About Me</button>
          <button className="navBtn">Projects</button>
          <button className="navBtn">Contact</button>
        </div>
      </header>
      <main className="flex flex-1 w-full h-full p-2 flex-col items-start justify-between py-3 px-16 ">
        test
      </main>
    </div>
  );
}
