'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/use-auth';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, signUp } = useAuth();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp) {
      signUp.mutate({ email, password });
    } else {
      signIn.mutate({ email, password });
    }
  };

  return (
    <div className="glass p-8 rounded-lg border border-white/10">
      <div className="flex flex-col space-y-2 text-center mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          {isSignUp ? 'Create an account' : 'Welcome back'}
        </h1>
        <p className="text-sm text-white/60">
          {isSignUp
            ? 'Enter your email to create your account'
            : 'Enter your email to sign in to your account'}
        </p>
      </div>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="glass border-white/10"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="glass border-white/10"
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full"
          disabled={signIn.isPending || signUp.isPending}
        >
          {(signIn.isPending || signUp.isPending) && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          )}
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </Button>
      </form>
      <div className="mt-4 text-center text-sm">
        <button
          type="button"
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-white/60 hover:text-white"
        >
          {isSignUp
            ? 'Already have an account? Sign in'
            : "Don't have an account? Sign up"}
        </button>
      </div>
    </div>
  );
}