const projects = [
    { name: "CookKeeper" },
    { name: "Workout Tracker" },
    { name: "Genetic Rockets" },
    { name: "Minimax Algorithm AI" }
]

export default function Projects() {
    return (
        <div className="flex flex-col bg-sand h-[1500px]">
            <div className="text-xl">Projects</div>
            <div className="flex flex-row gap-x-10">
                {projects.map(project => (
                    <div className="text-center bg-white rounded-xl">
                        {project.name}
                    </div>
                ))}
            </div>
        </div>
    )
}