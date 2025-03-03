import { Link } from '@inertiajs/react';
import { Bold, WalletCards } from 'lucide-react';

export default function AppLogo() {
    return (
        <Link href={route('home')} className='flex items-center gap-1'>
            <div className='bg-yellow-300 rounded-full p-1'>
            <WalletCards color='white' size={20}/>
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-none text-lg font-semibold">Expense Tracker</span>
            </div>
        </Link>
    );
}
