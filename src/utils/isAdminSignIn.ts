import { SignInProps, env } from "@types";

export function isAdminSignIn(credentials: SignInProps) {
  const { username, password } = credentials

  return username === env.ADMIN_USERNAME && password === env.ADMIN_PASSWORD
}