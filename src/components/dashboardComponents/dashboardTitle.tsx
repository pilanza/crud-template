export default function DashboardTitle ({title}: {title: string}) {
    return (
        <div className="mt-0 md:mt-5 m-5 text-3xl border-b border-stone-300">
            <h1 className="pb-2 pt-5 md:pt-0">{title}</h1>
        </div>
    )
}