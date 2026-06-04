import Hero from "../Hero/Hero";
import Sheet from "../Sheet/Sheet";


type Props = {
    children: React.ReactNode;
};

export default function NewsLayout({ children }: Props) {
    return(
        <>
        <Hero title="News" sub="ニュース" />
        <Sheet>
            {children}
        </Sheet>
        </>
    )
}