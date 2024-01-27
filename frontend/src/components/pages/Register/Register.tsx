import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ui/mode-toogle";
import { Label } from "@radix-ui/react-label";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import { useRegisterController } from "./useRegisterController";

export function Register() {

    const { handleSubmit, register } = useRegisterController()

    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="w-[500px]">
                <CardHeader className="flex flex-col items-center gap-4 text-center">
                    <CardTitle>Vamos criar a sua conta
                    </CardTitle>
                    <CardDescription>Insira abaixo os dados da sua nova conta</CardDescription>
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
                            <Input id="senha" type="password" placeholder="Digite aqui sua senha" {...register("password")} ></Input>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Insira o seu melhor e-mail" {...register("email")} ></Input>
                        </div>
                        <div>
                            <Button className="w-full" type="submit">
                                Registrar
                            </Button>
                        </div>
                        <div className="text-center">
                            <p className="space-x-2">
                                <span className="tracking-[-0.5px]">
                                    Já tem uma conta?
                                </span>

                                <Link to="/login">
                                    Faça login
                                </Link>


                            </p>
                        </div>
                    </div>
                </form>
            </Card>
        </motion.div>
    )
}