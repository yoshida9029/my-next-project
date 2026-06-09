import Hero from "../Hero/Hero";
import Sheet from "../Sheet/Sheet";


export const metadata = {
    title: "お問い合わせ",
};

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