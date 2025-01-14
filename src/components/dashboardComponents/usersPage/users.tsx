import DashboardTitle from "@/components/dashboardComponents/dashboardTitle";
import { UserTable } from "./userTable";

export const Users = () => {
    return (
        <>
            <DashboardTitle title="Users" />
            <UserTable />
        </>
    )
}