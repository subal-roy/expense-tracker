import AppLogo from '@/components/app-logo';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { UserMenuContent } from '@/components/user-menu-content';
import { useInitials } from '@/hooks/use-initials';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { WalletCards } from 'lucide-react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    const getInitials = useInitials();

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] text-[#1b1b18] lg:justify-center dark:bg-[#0a0a0a]">
                <div className="flex min-h-[400px] w-full flex-col bg-green-500">
                    <header className="m-auto my-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                        <nav className="flex w-full items-center justify-between gap-4">
                            <div className="cursor-pointer">
                                <AppLogo />
                            </div>
                            <div className="flex items-center gap-2">
                                {auth.user ? (
                                    <div className="flex items-center gap-4">
                                        <div className='cursor-pointer'>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Avatar className="h-8 w-8 overflow-hidden rounded-full">
                                                        <AvatarImage src={auth.user.avatar} alt={auth.user.name} />
                                                        <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                                                            {getInitials(auth.user.name)}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent
                                                    className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                                                    align="end"
                                                >
                                                    <UserMenuContent user={auth.user} />
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                        <Link
                                            href={route('dashboard')}
                                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                        >
                                            Dashboard
                                        </Link>
                                    </div>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </div>
                        </nav>
                    </header>
                    <div className="m-auto flex items-center justify-center">
                        <div className="rounded-full bg-yellow-300 p-5">
                            <WalletCards size={80} color="white" />
                        </div>

                        <div className="mt-4 ml-4 flex flex-col text-center text-gray-100 md:mt-0">
                            <div className="text-4xl font-semibold">Fast Budget</div>
                            <div className="mt-2 hidden text-2xl font-medium md:block lg:inline">Expense Manager</div>
                            <p className="mt-3 text-lg">Manage your personal finances and easily track your money, expenses, and budget.</p>
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row"></main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
