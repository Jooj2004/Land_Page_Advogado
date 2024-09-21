import { slideItens } from "@/data/slidItens"
import { SlideItem } from "@/types/typeSlideItem"
import { act, useState } from "react"

export const Slid = () => {
    const[itens, setItens] = useState<SlideItem[]>(slideItens)
    const[actual, setActual] = useState(0)


    const Before = () => {
        setActual((actual) => (actual === 0 ? itens.length - 1 : actual - 1));
    };

    const After = () => {
        setActual((actual) => (actual === itens.length - 1 ? 0 : actual + 1));
    };

    return(
        <div className="relative">
            <div className="h-80 bg-center bg-cover" style={{backgroundImage: `url(${itens[actual].url})`}}>
                <div onClick={Before} className="ml-1 z-10 text-4xl cursor-pointer font-bold text-white opacity-70 absolute left-0 top-[45%]">{'<'}</div>
                <div onClick={After} className="mr-1 z-10 text-4xl cursor-pointer font-bold text-white opacity-70 absolute right-0 top-[45%]">{'>'}</div>
                <div>
                    <h1 className="text-white text-center text-2xl uppercase py-5">{itens[actual].title}</h1>
                    <p className="px-9 text-white text-sm font-semibold">{itens[actual].body}</p>
                </div>
            </div>
            <div className="absolute top-0 w-full h-full bg-black opacity-40">
                lor
            </div>
        </div>
    )
}