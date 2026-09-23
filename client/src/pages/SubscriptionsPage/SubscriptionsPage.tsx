import DuchessLogo from "@/components/ui/DuchessLogo.tsx";
import Subscriptions from "@/components/Subscriptions/Subscriptions.tsx";

export default function SubscriptionsPage() {
    return (
        <div className="du-page flex h-full flex-col">
            <DuchessLogo theme="light" />
            <Subscriptions />
        </div>
    );
}
