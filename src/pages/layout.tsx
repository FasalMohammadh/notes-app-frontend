import { Outlet } from "react-router-dom";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import useResponsive from "@/hooks/use-responsive";

function Layout() {
  const { large } = useResponsive();

  if (large) {
    return (
      <div>
        <nav className="bg-primary flex justify-between px-2 py-2 rounded-b-md">
          <h1 className="text-3xl uppercase text-indigo-500">Logo</h1>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <div className="grid grid-cols-[minmax(280px,auto)_1fr] min-h-screen w-full">
          <div className="flex flex-col rounded-r-md overflow-hidden min-h-screen bg-gray-100">
            <button></button>
          </div>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    );
  }

  return (
    <div>
      <nav className="bg-primary flex justify-between px-2 py-2 rounded-b-md">
        <h1 className="text-3xl uppercase text-indigo-500">Logo</h1>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>

      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
