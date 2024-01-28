import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { BookLock, CalendarClock, Check, CircleUserRound, Clock, FileStack, LogOut, Menu as MenuIcon, Speech, Users } from "lucide-react";
export function Menu() {
    return (
        <Sheet >
            <SheetTrigger>
                <button>
                    <MenuIcon size={30} />
                </button>
            </SheetTrigger>
            <SheetContent side={"left"} className="flex flex-col">
                <SheetHeader>
                    <SheetTitle>Menu de opções</SheetTitle>
                    <SheetDescription>
                        Nesta aba, você pode acessar as opções do sistema.
                    </SheetDescription>
                    <ul className="flex flex-col gap-3 mt-4">
                        <li className="w-full hover:bg-green-500 p-4 rounded">
                            <button className="flex items-center font-medium w-full">
                                Usuários
                                <Users size={15} className="ml-4" />
                            </button>
                        </li>
                        <li className="w-full hover:bg-green-500 p-4 rounded">
                            <button className="flex items-center font-medium w-full">
                                Perfil
                                <BookLock size={15} className="ml-4" />
                            </button>
                        </li>
                        <li className="w-full hover:bg-green-500 p-4 rounded">
                            <button className="flex items-center font-medium w-full">
                                Motivos
                                <Speech size={15} className="ml-4" />
                            </button>
                        </li>
                        <li className="w-full hover:bg-green-500 p-4 rounded">
                            <button className="flex items-center font-medium w-full">
                                Justificar horas
                                <Clock size={15} className="ml-4" />
                            </button>
                        </li>
                        <li className="w-full hover:bg-green-500 p-4 rounded">
                            <button className="flex items-center font-medium w-full">
                                Bater ponto
                                <CalendarClock size={15} className="ml-4" />
                            </button>
                        </li>
                        <li className="w-full hover:bg-green-500 p-4 rounded">
                            <button className="flex items-center font-medium w-full">
                                Aprovar justificativas
                                <Check size={15} className="ml-4" />
                            </button>
                        </li>
                        <li className="w-full hover:bg-green-500 p-4 rounded">
                            <button className="flex items-center font-medium w-full">
                                Relatórios
                                <FileStack size={15} className="ml-4" />
                            </button>
                        </li>
                        <li className="w-full hover:bg-green-500 p-4 rounded">
                            <button className="flex items-center font-medium w-full">
                                Minha conta
                                <CircleUserRound size={15} className="ml-4" />
                            </button>
                        </li>
                        <li className="w-full hover:bg-green-500 p-4 rounded">
                            <button className="flex items-center font-medium w-full">
                                Sair
                                <LogOut size={15} className="ml-4" />
                            </button>
                        </li>
                    </ul>
                </SheetHeader>
            </SheetContent>

        </Sheet>
    )
}