import { ModeToggle } from "@/components/ModeToggle"
import { TeamArea } from "@/components/team/team-area"

const Page = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="w-full max-w-2xl">
                <ModeToggle />

                <TeamArea />
            </div>
        </div>
    )
}

export default Page