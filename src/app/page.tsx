import { ErrorMessage } from "@/components/ErrorMessage"

const Page = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="w-full max-w-2xl">
                <ErrorMessage error="Mensagem de erro personalizada" />
            </div>
            
        </div>
    )
}

export default Page