'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

export default function ContactedToast() {
    const searchParams = useSearchParams();
    const contacted = searchParams.get('contacted');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        // Only show toast when `contacted` is 'true'
        if (contacted === 'true') {
            // Use a small timeout to ensure the page state has updated before showing the toast
            setTimeout(() => {
                toast.success(
                    <div className="flex items-center justify center gap-2">
                        <span>Your message was sent successfully!</span>
                    </div>,
                    {
                        duration: 5000,
                        position: 'bottom-right',
                        style: {
                            backgroundColor: '#1a202c', // Dark background
                            color: '#fff',
                            borderRadius: '8px',
                            padding: '12px 20px',
                        },
                    }
                );
            }, 100); // Delay for better UX, so it doesn't clash with the page transition
        }
    }, [contacted]);

    useEffect(() => {
        const url = new URL(window.location.href);
        url.searchParams.delete('contacted');
        window.history.replaceState({}, '', url.toString());
    }, [contacted]);

    if (!isMounted) return null;

    return (
        <>
            {/* Floating animation for the toast */}
            <motion.div
                className="absolute z-50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
            >
                {/* Toast container will appear here */}
            </motion.div>
        </>
    );
}
