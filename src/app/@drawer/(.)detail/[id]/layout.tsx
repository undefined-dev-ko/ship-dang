'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Drawer, DrawerContent } from '@/components/ui/drawer';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [openDrawer, setOpenDrawer] = useState(true);

  const router = useRouter();

  const handleOpenDrawer = (isOpen: boolean) => {
    if (!isOpen) {
      setTimeout(() => {
        router.back();
      }, 400);
    }

    setOpenDrawer(isOpen);
  };

  return (
    <Drawer open={openDrawer} onOpenChange={handleOpenDrawer}>
      <DrawerContent className="mx-auto h-[calc(100vh-50px)] max-w-screen-sm">
        {children}
      </DrawerContent>
    </Drawer>
  );
}
