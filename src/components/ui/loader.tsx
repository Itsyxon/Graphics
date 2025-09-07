import { Loader2 } from 'lucide-react';
import React from 'react';

const MainLoader = ({ className }: { className?: string }) => {
    return (
        <Loader2 className={`w-10 h-10 text-[#6366f1] animate-spin ${className}`} />
    );
};

export default MainLoader;