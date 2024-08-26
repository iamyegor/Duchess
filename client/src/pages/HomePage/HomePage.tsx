import EmptySvg from "@/assets/homePage/empty-set.svg?react";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchData from "@/utils/services/fetchData.ts";
import Spinner from "@/components/ui/Spinner.tsx";

export default function HomePage() {
    const [greeting, setGreeting] = useState<string | null>();
    const { data } = useQuery({ queryKey: ["data"], queryFn: fetchData });

    useEffect(() => {
        setGreeting(data);
    }, [data]);

    return (
        <div className="flex justify-center items-center space-x-3 bg-default h-full">
            <EmptySvg fill="#FF0000" className="w-10 h-10" />
            <div className="flex items-center space-x-3">
                <span>greeting</span>: {greeting ? <span>greeting</span> : <Spinner />}
            </div>
        </div>
    );
}
