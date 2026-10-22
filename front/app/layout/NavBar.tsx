"use client";
import NavBtn from "@components/NavBtn";

export default function NavBar() {
    return <div className="flex flex-row w-full">
        <NavBtn label={"About Me"} onClick={() => {}} active={true}  />
        <NavBtn label={"Projects"} onClick={() => {}} active={false}  />
        <NavBtn label={"Blog"} onClick={() => {}} active={false}  />
        <NavBtn label={"Contact"} onClick={() => {}} active={false}  />
    </div>
}