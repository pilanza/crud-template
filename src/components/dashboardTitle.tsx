export default function DashboardTitle ({title}: {title: string}) {
    return (
        <div className="m-5 text-3xl border-b border-stone-300">
            <h1 className="pb-2">{title}</h1>
        </div>
    )
}