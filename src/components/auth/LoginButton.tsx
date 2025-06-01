"use client";

import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
// Using an inline SVG for Google icon as lucide-react doesn't have it.
const GoogleIcon = () => (
  <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
    <path fill="currentColor" d="M488 261.8C488 403.3 381.7 512 244 512 110.3 512 0 401.7 0 265.2 0 128.5 110.3 19.2 244 19.2c71.2 0 125.8 28.7 164.1 65.6l-54.3 52.4c-26-24.4-63.8-44.4-109.8-44.4-85.9 0-155.7 67.9-155.7 151.6s69.8 151.6 155.7 151.6c93.8 0 132.6-62.9 137.3-97.2H244v-69.3h239.1c1.9 12.8 3.4 26.2 3.4 41.2z"></path>
  </svg>
);

export default function LoginButton() {
  const { signInWithGoogle, loading } = useAuth();

  return (
    <Button onClick={signInWithGoogle} disabled={loading} variant="outline" className="border-primary text-primary hover:bg-primary/10">
      <GoogleIcon />
      Sign in with Google
    </Button>
  );
}
