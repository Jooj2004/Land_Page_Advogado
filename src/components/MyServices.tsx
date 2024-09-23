import { listServices } from "@/data/listServices"

export const MyServices = () => {
    const list = listServices

    return(
        <div>
            <h1 className="text-center p-3 text-cyan-900 underline uppercase text-2xl font-semibold">Meus Serviços</h1>
                {listServices.map(e => (
                    <ul>
                        <li className="border-2 lg:text-xl text-sky-800 font-semibold uppercase p-1 rounded-md shadow-lg border-[#161f25] text-center m-1">{e.title}</li>
                        <li className="text-center lg:text-lg text-slate-700 p-1 m-1">{e.body}</li>
                    </ul>
                ))}
        </div>
    )
}