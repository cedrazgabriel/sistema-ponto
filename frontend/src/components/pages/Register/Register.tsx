import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ui/mode-toogle";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import { useRegisterController } from "./useRegisterController";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export function Register() {

    const { form, onSubmit } = useRegisterController()

    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center h-screen"
        >
            <Card className="w-[500px]">
                <CardHeader className="flex flex-col items-center gap-2 text-center">
                    <CardTitle>Vamos criar a sua conta
                    </CardTitle>
                    <CardDescription>Insira abaixo os dados da sua nova conta</CardDescription>
                    <ModeToggle />
                </CardHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6 p-4">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="ml-1">Usuário</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription className="ml-1" >
                                        Digite aqui o seu nome de usuário
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="ml-1">Senha</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="password" />
                                    </FormControl>
                                    <FormDescription className="ml-1">
                                        Digite aqui a sua senha
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="ml-1">Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription className="ml-1">
                                        Insira o seu melhor e-mail
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button className="w-full" type="submit">
                            Registrar
                        </Button>

                    </form>
                </Form>
                <div className="text-center p-4">
                    <p className="space-x-2">
                        <span className="tracking-[-0.5px]">
                            Já tem uma conta?
                        </span>

                        <Link to="/login" className="text-green-400">
                            Faça login
                        </Link>
                    </p>
                </div>
            </Card>
        </motion.div>
    )
}