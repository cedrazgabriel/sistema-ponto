import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from "@tanstack/react-query";
import { signInParams } from "@/app/services/authService/signIn";
import { authService } from "@/app/services/authService";
import { useAuth } from "@/app/hooks/useAuth";
import toast from "react-hot-toast";

const schema = z.object({
    username: z.string().min(1, 'O nome de usuário não pode ser vazio'),
    senha: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres'),
})

type formData = z.infer<typeof schema>;

export function useLoginController(){

    const {handleSubmit: hookFormSubmit, register, formState: {errors}} = useForm<formData>({
        resolver: zodResolver(schema)
    })

    const {mutateAsync, isPending} = useMutation({
        mutationFn: async (data : signInParams) => {
            return authService.signIn(data)
        }
    })

    const {signIn} = useAuth()

    const handleSubmit = hookFormSubmit(async (data)=> {
        try{
            console.log('oi')
            const { acessTokenJWT }  = await mutateAsync(data)
             //Setar o estado de logado pra true se deu sucesso no login
             signIn(acessTokenJWT)
         }
         catch{
             toast.error('Credenciais inválidas.')
         }
    })

    return { handleSubmit, register, errors, isPending }
}