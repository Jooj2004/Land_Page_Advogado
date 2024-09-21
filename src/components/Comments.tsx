import { CommentsReducer } from "@/reducer/CommentsReducer"
import { useReducer, useState } from "react"

export const Comments = () => {
    const [textInput, setTextInput] = useState<string>('')
    const [name, setName] = useState<string>('')

    const [comments, dispatch] = useReducer(CommentsReducer,[])

    const addItem = (text:string, name:string) => {
        if(name === ''){
            alert ("Digite seu nome!")
            return
        }
        if(textInput === ''){
            return
        }
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
            <div className="flex flex-col p-5 rounded-md">
                <input 
                    type="text" 
                    className="rounded-md mb-2 p-2 outline-none"
                    placeholder="Digite seu nome:"
                    value={name}
                    onChange={(e) => (setName(e.target.value))}
                    
                    />
                <textarea 
                placeholder="Digite seu comentário:" 
                className="p-2 border-2 rounded-md h-36 outline-none"
                value={textInput}
                onChange={(e) => (setTextInput(e.target.value))}
                >
                </textarea>
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