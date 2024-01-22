import { z } from "zod";

const schema = z.object({
    username: z.string().min(1, 'O nome de usuário não pode ser vazio'),
    senha: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres'),
})

type formData = z.infer<typeof schema>;

export function useLoginController(){

}