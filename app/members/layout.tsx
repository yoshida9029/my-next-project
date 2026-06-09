import Hero from "../Hero/Hero"
import Sheet from "../Sheet/Sheet"


export const metadata = {
    title: "メンバー",
}

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