import { ADMIN_PASSWORD, ADMIN_USERNAME } from '@env';
import { SignInProps } from "@types";

export function isAdminSignIn(credentials: SignInProps) {
  const { username, password } = credentials

  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD
}