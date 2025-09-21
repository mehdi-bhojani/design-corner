"use client";

import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink
} from '@/components/ui/navigation-menu';
import ThemeToggle from '@/components/layout/ThemeToggle/theme-toggle';

export default function Component() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 border-b border-amber-200/20 backdrop-blur-sm relative"
      style={{
        background: 'linear-gradient(to right, #b87f3d 50%, #c79153 50%)'
      }}
    >
      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-white/10">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80">
          <div className="flex items-center gap-2 pb-6 border-b">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 flex items-center justify-center">
            </div>
            <span className="text-xl font-bold text-gray-900">Design Corner</span>
          </div>
          <nav className="grid gap-1 py-6">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center py-3 px-4 text-lg font-medium rounded-lg hover:bg-gray-100 transition-colors text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="flex items-center py-3 px-4 text-lg font-medium rounded-lg hover:bg-gray-100 transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="flex items-center py-3 px-4 text-lg font-medium rounded-lg hover:bg-gray-100 transition-colors text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="flex items-center py-3 px-4 text-lg font-medium rounded-lg hover:bg-gray-100 transition-colors text-left"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center py-3 px-4 text-lg font-medium rounded-lg hover:bg-gray-100 transition-colors text-left"
            >
              Contact
            </button>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Logo */}
      <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 mr-8">
        <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
        </div>
        <span className="hidden md:block text-xl font-bold text-white">Design Corner</span>
      </button>

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList className="gap-2">
          <NavigationMenuLink asChild>
            <button
              onClick={() => scrollToSection('home')}
              className="group inline-flex h-10 items-center justify-center rounded-lg px-6 py-2 text-sm font-medium text-white/90 transition-all duration-200 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white focus:outline-none"
            >
              Home
            </button>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <button
              onClick={() => scrollToSection('about')}
              className="group inline-flex h-10 items-center justify-center rounded-lg px-6 py-2 text-sm font-medium text-white/90 transition-all duration-200 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white focus:outline-none"
            >
              About
            </button>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <button
              onClick={() => scrollToSection('services')}
              className="group inline-flex h-10 items-center justify-center rounded-lg px-6 py-2 text-sm font-medium text-white/90 transition-all duration-200 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white focus:outline-none"
            >
              Services
            </button>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="group inline-flex h-10 items-center justify-center rounded-lg px-6 py-2 text-sm font-medium text-white/90 transition-all duration-200 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white focus:outline-none"
            >
              Portfolio
            </button>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <button
              onClick={() => scrollToSection('contact')}
              className="group inline-flex h-10 items-center justify-center rounded-lg px-6 py-2 text-sm font-medium text-white/90 transition-all duration-200 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white focus:outline-none"
            >
              Contact
            </button>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Right Side Actions */}
      <div className="ml-auto flex items-center gap-3">
        <ThemeToggle />
      </div>
    </header>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function ShirtIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  );
}
