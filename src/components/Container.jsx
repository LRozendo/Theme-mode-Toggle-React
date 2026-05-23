import Content from "./Content";
import ThemeButton from "./ThemeButton";

export default function Container () {
    return (
        <div id='Container' className='w-screen h-screen p-4 flex flex-col flex-nowrap items-center gap-8 font-sans bg-inherit text-inherit'>
            <h1 className=" text-(--title) text-4xl font-bold">Lorem ipsum dolor</h1>
            <Content/>
            <ThemeButton/>
        </div>
    )
}