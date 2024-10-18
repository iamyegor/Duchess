import DuchessLogo from "@/components/ui/DuchessLogo.tsx";
import Subscriptions from "@/components/Subscriptions/Subscriptions.tsx";

export default function SubscriptionsPage() {
    return (
        <div className="flex flex-col bg-black h-full">
            <DuchessLogo theme="light" />
            <Subscriptions />
        </div>
    );
}
