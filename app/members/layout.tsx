import Hero from "../Hero/Hero"
import Sheet from "../Sheet/Sheet"


type Props = {
    children: React.ReactNode
}

export default function RootLayout({children}:Props ){
    return(
        <>
        <Hero title="Members" sub="メンバー" />
        <Sheet>
            {children}
        </Sheet>
        </>
    )
}