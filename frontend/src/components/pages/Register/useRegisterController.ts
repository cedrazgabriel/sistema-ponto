import { useAuth } from "@/app/hooks/useAuth";
import { authService } from "@/app/services/authService";
import { signUpParams } from "@/app/services/authService/signUp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const schema = z.object({
    username: z.string().min(4, 'O nome de usuário não pode ser vazio'),
    password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres'),
    email: z.string().email('O email deve ser válido')
});

type formData = z.infer<typeof schema>;

export function useRegisterController() {
    const form = useForm<formData>({
        resolver: zodResolver(schema)
    })



    const { mutateAsync } = useMutation({
        mutationFn: async (data: signUpParams) => {
            return authService.signUp(data)
        }
    })

    const { signIn } = useAuth()

    const onSubmit = async (data: signUpParams) => {
        try {
            const { acess_token } = await mutateAsync(data);

            // Setar o estado de logado para true se deu sucesso no login
            signIn(acess_token);
        } catch (error) {
            toast.error('Ocorreu um erro ao criar a sua conta');
            console.log(error);
        }
    }

    return { form, onSubmit }
}