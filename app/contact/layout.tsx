import Hero from "../Hero/Hero";
import Sheet from "../Sheet/Sheet";


type Props = {
    children: React.ReactNode;
};

export default function Rootlayout({ children }: Props){
    return(
        <>
            <Hero title="Contact" sub="お問い合わせ" />
            <Sheet>{children}</Sheet>
        </>
    );
}