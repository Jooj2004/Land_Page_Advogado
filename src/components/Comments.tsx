import { CommentsReducer } from "@/reducer/CommentsReducer"
import { useEffect, useReducer, useState } from "react"

export const Comments = () => {
    let STORAGE_KEY = 'comentarios'

    const [textInput, setTextInput] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [ver1, setVer1] = useState<boolean>(false)
    const [ver2, setVer2] = useState<boolean>(false)

    const [comments, dispatch] = useReducer(
        CommentsReducer,
        JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    )

    useEffect(()=>{
        localStorage.setItem(STORAGE_KEY, JSON.stringify(comments))
    }, [comments])

    const addItem = (text:string, name:string) => {
        if(name === ''){
            setVer1(true)
            if(textInput === ''){
                setVer2(true)
            } else {setVer2(false)}
            return
        }
        setVer1(false)
        if(textInput === ''){
            setVer2(true)
            return
        }
        setVer2(false)
        dispatch({
            type: 'add',
            payload: {
                nome: name,
                text: text
            }
        })
        setTextInput('')
        setName('')
    }

    return (
        <div className="p-2 bg-[#161f25]">
            <div className="flex flex-col max-w-5xl mx-auto p-5 rounded-md">
                <input 
                    type="text" 
                    className="rounded-md mb-2 p-2 outline-none"
                    placeholder="Digite seu nickname:"
                    value={name}
                    onChange={(e) => (setName(e.target.value))}  
                />
                {ver1 &&
                    <div className="bg-slate-700 p-1 rounded-md mb-1 mx-1 text-pink-950 text-sm "> * Digite seu nome !!! </div>
                }
                <textarea
                placeholder="Digite seu comentário:" 
                className="p-2 border-2 rounded-md h-36 outline-none"
                value={textInput}
                onChange={(e) => (setTextInput(e.target.value))}
                >
                </textarea>
                {ver2 &&
                    <div className="bg-slate-700 p-1 rounded-md mb-1 mx-1 text-pink-950 text-sm "> * Não há comentários !!! </div>
                }
                <button onClick={() => (addItem(textInput, name))} className="py-2 px-3 hover:opacity-80 active:opacity-80 bg-blue-500 font-semibold rounded-lg text-white uppercase mt-2">Adicionar</button>
            </div>
            <div>
                <h2 className="text-white">Total de comentários: {comments.length} </h2>
                <div>
                    {comments.map((e) => (
                        <ul className="p-3 bg-slate-300 my-2 rounded-lg">
                            <div className="h-10 items-center mb-3 flex w-10 rounded-full"><img src="https://th.bing.com/th/id/R.d268b238932809e18b85a7820184220f?rik=ahExR0U%2fu2zHyQ&riu=http%3a%2f%2ficon-library.com%2fimages%2fno-profile-picture-icon%2fno-profile-picture-icon-2.jpg&ehk=4X8pLfMkepeJcdTMZ8L033nQ2hfH0gJN3qGTpg62g00%3d&risl=&pid=ImgRaw&r=0"/><h2 className="text-lg px-2 font-semibold text-gray-500">{e.nome}</h2></div>
                            <li className="text-slate-600 text-lg">{e.text}</li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}