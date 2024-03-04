import LoginForm from "@/components/login-form";

export default async function LoginPage() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center flex-col">
      <div className="w-full max-w-sm">
        <div className="mb-10">
          <h1 className="mt-8 mb-2 text-2xl lg:text-3xl">Welcome back</h1>
          <h2 className="text-sm text-slate-500">Sign in to your account</h2>
        </div>

        <div className="flex flex-col gap-5">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
