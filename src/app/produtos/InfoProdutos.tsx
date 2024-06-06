import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,

} from "@/components/ui/alert-dialog"


export function InfoProdutos() {
    return (
        <>
            <AlertDialog>
                <AlertDialogTrigger>Ver mais</AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogCancel/>
                    <AlertDialogCancel>Fechar</AlertDialogCancel>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}