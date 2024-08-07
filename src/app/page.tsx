import { ErrorMessage } from "@/components/ErrorMessage"
import { ModeToggle } from "@/components/ModeToggle"

const Page = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <ModeToggle />
            <div className="w-full max-w-2xl py-10">
                <ErrorMessage error="Mensagem de erro personalizada" />
            </div>
        </div>
    )
}

export default Page