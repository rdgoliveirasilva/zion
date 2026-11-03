"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck, Wallet, Zap, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// ==========================================
// 1. FORMULÁRIO
// ==========================================
interface LoginFormProps {
  email: string;
  setEmail: (v: string) => void;
  password: string;
  setPassword: (v: string) => void;
  showPassword: boolean;
  setShowPassword: (v: boolean) => void;
  rememberMe: boolean;
  setRememberMe: (v: boolean) => void;
  isLoading: boolean;
  errorMsg: string;
  onSubmit: (e: React.FormEvent) => void;
  isDesktop?: boolean;
}

const LoginForm = ({
  email, setEmail,
  password, setPassword,
  showPassword, setShowPassword,
  rememberMe, setRememberMe,
  isLoading, errorMsg, onSubmit,
  isDesktop = false
}: LoginFormProps) => (
  <form className="space-y-6" onSubmit={onSubmit}>
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground" htmlFor={isDesktop ? "email-desktop" : "email"}>
        E-mail
      </label>
      <div className="relative">
        <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          id={isDesktop ? "email-desktop" : "email"}
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-14 pl-12 rounded-xl border-border bg-background text-base text-foreground focus-visible:ring-primary placeholder:text-muted-foreground/50"
          required
        />
      </div>
    </div>

    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-foreground" htmlFor={isDesktop ? "password-desktop" : "password"}>
          Senha
        </label>
        <Link
          href="/forgot-password"
          tabIndex={-1}
          className="text-xs font-medium text-primary hover:text-primary/80"
        >
          Esqueceu a senha?
        </Link>
      </div>
      <div className="relative">
        <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          id={isDesktop ? "password-desktop" : "password"}
          type={showPassword ? "text" : "password"}
          placeholder="••••••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-14 pl-12 pr-12 rounded-xl border-border bg-background text-base text-foreground focus-visible:ring-primary placeholder:text-muted-foreground/50"
          required
        />
        <button
          type="button"
          tabIndex={-1}
          aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none"
        >
          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </div>
    </div>

    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        tabIndex={-1}
        id={isDesktop ? "remember-desktop" : "remember"}
        checked={rememberMe}
        onChange={(e) => setRememberMe(e.target.checked)}
        className="h-4 w-4 rounded border-border text-primary focus:ring-primary bg-background"
      />
      <label
        htmlFor={isDesktop ? "remember-desktop" : "remember"}
        className="text-sm font-medium text-foreground cursor-pointer select-none"
      >
        Lembrar de mim
      </label>
    </div>

    {errorMsg && (
      <p className="text-sm text-red-500 font-medium text-center">{errorMsg}</p>
    )}

    <Button
      type="submit"
      disabled={isLoading}
      className={`mt-2 h-14 w-full rounded-xl text-base font-semibold text-white transition-all active:scale-[0.98] disabled:opacity-70 ${
        isDesktop 
          ? "bg-fuchsia-600 hover:bg-fuchsia-500" 
          : "bg-primary hover:bg-primary/90"
      }`}
    >
      {isLoading ? (
        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
      ) : (
        <>
          Entrar
          <ArrowRight className="ml-2 h-5 w-5" />
        </>
      )}
    </Button>
  </form>
);

// ==========================================
// 2. PÁGINA
// ==========================================
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, remember: rememberMe }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Erro ao fazer login");
      }

      router.push("/");
      router.refresh();
      
    } catch (error: any) {
      setErrorMsg(error.message);
      setIsLoading(false); 
    }
  };

  const formProps = {
    email, setEmail,
    password, setPassword,
    showPassword, setShowPassword,
    rememberMe, setRememberMe,
    isLoading, errorMsg,
    onSubmit: handleLogin
  };

  return (
    <div className="relative flex h-[100dvh] w-full overflow-hidden bg-background md:bg-[#0b0014]">
      
      {/* =========================================
          MOBILE LAYOUT
          ========================================= */}
      <div className="flex h-full w-full flex-col md:hidden z-10">
        
        <div className="relative flex h-[45vh] w-full flex-col justify-end bg-[#1a0033]">
          <Image
            src="/images/zion-hero.png"
            alt="Zion - Seu assistente financeiro"
            fill
            className="object-cover object-top"
            priority
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0033] via-[#1a0033]/30 to-transparent" />

          <div className="relative z-10 px-6 pb-8 w-full">
            <h1 className="text-2xl font-bold text-white leading-tight drop-shadow-lg animate-slide-up">
              Bem-vindo de volta.
              <br />
              <span className="text-purple-300 animate-slide-up delay-200 inline-block">
                Gerencie seu futuro.
              </span>
            </h1>
          </div>
        </div>

        <div className="relative flex flex-1 flex-col rounded-t-3xl bg-card -mt-6 px-5 sm:px-6 pt-10 pb-8 overflow-hidden z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.15)]">
          <div className="mx-auto flex w-full max-w-sm flex-col h-full">
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground">Entre na sua conta</h2>
              <p className="mt-1 text-sm text-muted-foreground">Digite suas credenciais para acessar o Zion.</p>
            </div>
            
            <LoginForm {...formProps} />

            <div className="flex-1" />

            <p className="mt-8 text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              Acesso seguro e criptografado
            </p>
          </div>
        </div>
      </div>

      {/* =========================================
          DESKTOP LAYOUT
          ========================================= */}
      <div className="hidden h-full w-full md:flex relative z-10">
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-900/30 blur-[120px]" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple-900/20 blur-[120px]" />

        <div className="mx-auto flex h-full w-full max-w-[1200px] flex-row items-center justify-between px-8 lg:px-12">
          
          <div className="flex w-1/2 flex-col justify-center pr-12">
            
            <div className="mb-4 animate-slide-up delay-100 relative h-24 w-64 overflow-hidden flex items-center justify-start">
              <Image
                src="/images/zion-logo.png"
                alt="Logo Zion"
                width={250}
                height={120}
                className="object-cover object-center h-full w-auto scale-[1.7] origin-left"
                priority
              />
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-6 animate-slide-up delay-200">
              Sua vida financeira,<br />
              <span className="animate-gradient-text inline-block bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent pb-1">
                na palma da mão.
              </span>
            </h2>
            
            <p className="text-gray-400 text-sm lg:text-base mb-10 max-w-md animate-slide-up delay-300">
              Conecte suas contas, acompanhe seus gastos e tome decisões melhores com o seu assistente financeiro pessoal.
            </p>

            <div className="space-y-4 max-w-md">
              <div className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 ease-out will-change-transform hover:-translate-y-1 hover:scale-[1.02] hover:border-fuchsia-500/50 hover:bg-white/10 hover:shadow-[0_10px_30px_-10px_rgba(217,70,239,0.4)] animate-slide-up delay-400 cursor-default">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-fuchsia-500/20 transition-colors group-hover:bg-fuchsia-500/40">
                  <Wallet className="h-5 w-5 text-fuchsia-400 transition-colors group-hover:text-fuchsia-300" />
                </div>
                <span className="font-medium text-gray-200 group-hover:text-white transition-colors select-text">
                  Open Finance
                </span>
              </div>
              
              <div 
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 ease-out will-change-transform hover:-translate-y-1 hover:scale-[1.02] hover:border-fuchsia-500/50 hover:bg-white/10 hover:shadow-[0_10px_30px_-10px_rgba(217,70,239,0.4)] animate-slide-up cursor-default"
                style={{ animationDelay: "500ms" }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-fuchsia-500/20 transition-colors group-hover:bg-fuchsia-500/40">
                  <ShieldCheck className="h-5 w-5 text-fuchsia-400 transition-colors group-hover:text-fuchsia-300" />
                </div>
                <span className="font-medium text-gray-200 group-hover:text-white transition-colors select-text">
                  Controle total e seguro
                </span>
              </div>

              <div className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 ease-out will-change-transform hover:-translate-y-1 hover:scale-[1.02] hover:border-fuchsia-500/50 hover:bg-white/10 hover:shadow-[0_10px_30px_-10px_rgba(217,70,239,0.4)] animate-slide-up delay-600 cursor-default">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-fuchsia-500/20 transition-colors group-hover:bg-fuchsia-500/40">
                  <Zap className="h-5 w-5 text-fuchsia-400 transition-colors group-hover:text-fuchsia-300" />
                </div>
                <span className="font-medium text-gray-200 group-hover:text-white transition-colors select-text">
                  Lançamentos em poucos toques
                </span>
              </div>
            </div>
          </div>

          <div className="flex w-1/2 justify-end animate-slide-up delay-400">
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#130722]/80 p-8 shadow-2xl backdrop-blur-xl">
              <div className="mb-8 text-center">
                <h2 className="text-xl font-bold text-white">Bem-vindo ao Zion</h2>
                <p className="mt-1 text-sm text-gray-400">Entre com suas credenciais para acessar o painel.</p>
              </div>

              <div className="[&_label]:text-gray-300 [&_input]:bg-[#0b0014] [&_input]:border-white/10 [&_input]:text-white [&_input]:placeholder:text-gray-600">
                <LoginForm {...formProps} isDesktop={true} />
              </div>

              <p className="mt-8 text-center text-xs text-gray-500">
                Acesso restrito e criptografado.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}