"use client"

import { Comments } from "@/components/Comments"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { KnowMe } from "@/components/KnowMe"
import { Maps } from "@/components/Maps"
import { MyServices } from "@/components/MyServices"
import { Slid } from "@/components/Slid"
import { Vision } from "@/components/Vision"

const Page = () => {
    return(
        <div className="sm:container sm:mx-auto">
            <Header />
            <Slid />
            <KnowMe />
            <Vision />
            <MyServices />
            <Comments />
            <Maps />
            <Footer />
            <div className="w-14 fixed bottom-3 right-3 h-14">
                <a target="blank" href="https://wa.me/554899638783">
                    <img className="hover:opacity-80 active:opacity-80" src="/assets/images/iconezap.png" alt="whatsapp" />
                </a>
            </div>
        </div>
    )
}

export default Page