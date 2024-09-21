"use client"

import { Comments } from "@/components/Comments"
import { Header } from "@/components/Header"
import { KnowMe } from "@/components/KnowMe"
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
        </div>
    )
}

/*

Endereço 

*Bolha do whatsaap no lado*



*/


export default Page