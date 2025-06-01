"use client";

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import LoginButton from '@/components/auth/LoginButton';
import UserProfileDropdown from '@/components/auth/UserProfileDropdown';
import { Leaf } from 'lucide-react'; // Placeholder logo icon

export default function Header() {
  const { user, loading } = useAuth();

  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Leaf className="h-8 w-8 text-primary" />
          <h1 className="font-headline text-2xl font-bold text-primary">
            Subsplit
          </h1>
        </Link>
        <nav className="flex items-center gap-4">
          {/* Add other nav links here if needed */}
          {/* <Link href="/features" className="text-foreground hover:text-primary transition-colors">Features</Link>
          <Link href="/pricing" className="text-foreground hover:text-primary transition-colors">Pricing</Link> */}
          
          {loading ? (
            <div className="h-10 w-24 bg-muted rounded-md animate-pulse"></div>
          ) : user ? (
            <UserProfileDropdown />
          ) : (
            <LoginButton />
          )}
        </nav>
      </div>
    </header>
  );
}
