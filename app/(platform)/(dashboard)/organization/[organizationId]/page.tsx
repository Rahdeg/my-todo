import { OrganizationSwitcher, auth } from "@clerk/nextjs";
import React from "react";
import { Info } from "./_components/info";
import { Separator } from "@/components/ui/separator";
import { BoardList } from "./_components/board-list";
import { checkSubscription } from "@/lib/subscription";

interface OrganizationIdPageProps {
    params: {
        organizationId: string;
    }
}

const OrganizationIdPage = async ({ params }: OrganizationIdPageProps) => {
    const { userId, orgId } = auth()
    const isPro = await checkSubscription();


    return (
        <div className=" w-full mb-20">
            <Info isPro={isPro} />
            <Separator className="my-4" />
            <div className="px-2 md:px-4">
                <BoardList />
            </div>
        </div>
    )
};

export default OrganizationIdPage;
