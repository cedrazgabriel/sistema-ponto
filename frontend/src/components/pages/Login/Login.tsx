import { Label } from "@radix-ui/react-label";
import { Card, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { ModeToggle } from "@/components/ui/mode-toogle";
import { useLoginController } from "./useLoginController";


export function Login(){
    const {handleSubmit, register} = useLoginController()
    return (
        <Card className="w-[500px]">
            <CardHeader className="flex flex-col items-center gap-4 text-center">
                <CardTitle>Bem vindo ao sistema de ponto
                </CardTitle>
                <CardDescription>Informe os dados da sua conta registrada:</CardDescription>
                <ModeToggle />
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <div className="p-4 flex flex-col gap-3">
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="username">Usuário</Label>
                        <Input type="text" id="username" placeholder="Nome do seu usuário" {...register("username")}></Input>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="senha">Senha</Label>
                        <Input id="senha" type="password" placeholder="Senha cadastrada" {...register('senha')}></Input>
                    </div>
                    <div>
                    <Button className="w-full" type="submit">
                        Entrar
                    </Button>
                </div>
                <div className="text-center">
                <p className="space-x-2">
                <span className ="tracking-[-0.5px]">
                    Novo por aqui?
                </span>
                <a href="">Crie uma conta</a>
               </p>
                </div>
                </div>
                
            </form>
        </Card>
    )
}