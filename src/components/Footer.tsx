export const Footer = () => {
    return(
        <footer className="p-3 flex flex-col justify-center items-center gap-2 bg-[#161f25] text-zinc-400 ">
            <h1>Criado por Josdegar Ferreira dos Santos</h1>
            
            <div>
            <a className="flex items-center" target="blank" href="https://www.linkedin.com/in/josdegar-ferreira-dos-santos-704688233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <div className="w-6"><img src="/assets/images/linkedin.png" alt="" /></div>
                <p>Linkedin</p>
            </a>
            </div>

            <div>
            <a className="flex items-center" target="blank" href="https://github.com/Jooj2004">
                <div className="w-6"><img src="/assets/images/github.png" alt="" /></div>
                <p>Github</p>
            </a>
            </div>
        </footer>
    )
}