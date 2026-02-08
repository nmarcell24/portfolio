import { ArrowUpLeft } from "lucide-react"

export const CustomLink = ({ text, url }: { text: string, url: string }) => {
    return (
        <a href={url} target="_blank" className="flex text-lg md:text-3xl xl:text-4xl capitalize border-b-2 lg:text-4xl font-semibold w-fit">{text} <ArrowUpLeft /></a>
    )
}