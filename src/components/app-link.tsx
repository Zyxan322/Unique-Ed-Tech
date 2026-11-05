import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";

type Props = Omit<ComponentProps<typeof Link>, "to" | "params"> & { href: string };

export function AppLink({ href, ...props }: Props) {
  if (href === "/") return <Link to="/" {...props} />;
  return <Link to="/$" params={{ _splat: href.replace(/^\//, "") } as never} {...props} />;
}