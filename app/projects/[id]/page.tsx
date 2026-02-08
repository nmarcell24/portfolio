import { caption, displayText } from "@/app/utils/styles";
import { CustomLink } from "@/components/CustomLink";
import projects from "@/data/projects.json";
import Image from "next/image";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = projects.find((project) => project.id === Number(id));

    return (
        <div className="flex flex-col items-center justify-center">
            <section className="w-full lg:max-w-2xl flex flex-col items-center justify-center gap-6 lg:gap-12 pt-16 pb-10 md:pt-24 md:pb-20 lg:pt-32 lg:pb-40 text-center">
                <h1 className={`${displayText}`}>{project?.title}</h1>
                <h3 className={caption}>{project?.summary}</h3>
                <CustomLink text="Website" url={project?.url || "#"} />
            </section>
            <Image
                src={project?.image || "/images/hero-portrait.png"}
                alt={project?.title || "Project"}
                width={1000}
                height={1000}
                className="object-cover object-center"
            />
            <div className="xl:px-30">
                <div className="w-full flex flex-col lg:flex-row gap-6 py-16 lg:py-24">
                    <h2 className="text-lg md:text-2xl">Technologies:</h2>
                    <div className="w-full flex flex-wrap md:text-lg justify-between gap-2">
                        {project?.technologies.map((tech) => (
                            <span key={tech} className="px-2 py-1 rounded-md font-semibold">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <article className="border-b-2 pb-16 mb-26">
                    <h2 className={`${displayText} mb-6`}>About the project</h2>
                    <div className={caption}>{renderDescription(project?.description || "")}</div>
                </article>
                <article>
                    <h2 className={`${displayText} mb-12`}>Features</h2>
                    <div className={caption}>
                        {Object.entries(project?.features || {}).map(([key, value]) => (
                            <p key={key} className="mb-6 last:mb-0">
                                <span className="font-bold">{key}:</span> {value}
                            </p>
                        ))}
                    </div>
                </article>
            </div>
        </div>
    );
}

function renderDescription(text: string) {
    if (!text) return null;
    return text.split(/\\n|\n/).map((line, index) => (
        <p key={index} className="mb-6 last:mb-0">
            {line.split(/(\*[^*]+\*)/g).map((part, partIndex) => {
                if (part.startsWith('*') && part.endsWith('*')) {
                    return <span key={partIndex} className="text-black font-semibold">{part.slice(1, -1)}</span>;
                }
                return part;
            })}
        </p>
    ));
};