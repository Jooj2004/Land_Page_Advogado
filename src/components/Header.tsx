export const Header = () => {
    return(
        <header className="flex justify-center items-center gap-3 p-3 bg-gradient-to-tr from-[#161f25] to-[#394e63]">
                <div className="h-20 w-20 rounded-md border-2 border-slate-600">
                    <img src="/assets/images/Logo.png" alt="Logo" />
                </div>
                <div className="font-serif">
                    <h1 className="text-xl text-white uppercase">Saito</h1>
                    <h2 className="text-xl font-bold text-white uppercase">Mateus</h2>
                    <h3 className="text-sm uppercase text-slate-400">Advogado</h3>
                </div>
        </header>
    )
}