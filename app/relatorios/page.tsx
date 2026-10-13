import AppLayout from "@/components/layout/AppLayout";

export default function RelatoriosPage(){
    return(
        <AppLayout>
            <main className="flex min-h-screen items-center justify-center">
                <div className="w-full max-w-md rounded-2xl p-8 shadow-lg">
                    <h1 className="mb-2 text-center text-3xl font-bold">
                        Relatórios
                    </h1>
                </div>
            </main>
        </AppLayout>
    )
}