import LoginForm from "@/components/login-form";
import { getSession } from "@/lib/actions";

export default async function LoginPage() {
  const session = await getSession();

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

        <div className="self-center my-8 text-xs">
          <div>
            <span className="text-slate-500">Don't have an account?</span>{" "}
            <a
              className="underline transition text-foreground hover:text-slate-500"
              href="/dashboard/sign-up"
            >
              Sign Up Now
            </a>
          </div>
        </div>

        <pre className="overflow-hidden overflow-x-auto">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </div>
  );
}
