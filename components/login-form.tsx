"use client";
import { useFormState } from "react-dom";
import { login } from "@/lib/actions";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const initialState = {
  errors: {
    email: [""],
  },
};

export default function LoginForm() {
  const [state, formAction] = useFormState(login, initialState);
  const emailerrorMessage = state.errors?.email ? state.errors?.email[0] : "";

  return (
    <form
      action={formAction}
      className="flex flex-col gap-5 justify-center w-[330px] sm:w-[384px]"
    >
      <div>
        <div className="grid items-center gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="email" className="block text-slate-300/80 text-sm">
              Email
            </Label>

            <a
              className="transition hover:text-slate-500 text-xs hover:underline"
              href="/dashboard/sign-up"
            >
              forgot password
            </a>
          </div>
          <Input className="px-4" name="email" placeholder="Email" />
        </div>

        {emailerrorMessage ? (
          <span className="text-xs text-red-400">{emailerrorMessage}</span>
        ) : null}
      </div>

      <div className="grid items-center gap-2">
        <Label htmlFor="password" className="block text-slate-300/80 text-sm">
          Password
        </Label>
        <Input
          className="px-4"
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>

      <Button
        type="submit"
        variant="outline"
        className="w-full bg-emerald-500 border-emerald-300 hover:bg-emerald-500/80 outline-none rounded-lg mt-3"
      >
        Login
      </Button>
    </form>
  );
}
