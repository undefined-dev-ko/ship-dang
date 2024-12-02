import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

export function MainDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="destructive">Drawer Open</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Main Drawer</DrawerTitle>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
