import { ReactNode, ComponentProps, useRef } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

type Props = ComponentProps<"button"> & {
  pendingText?: ReactNode;
};

export function SubmitButton({ children, pendingText, ...props }: Props) {
  const ref = useRef<HTMLButtonElement | null>(null);

  const { pending, action } = useFormStatus();

  const isPending = pending && action === props.formAction;

  return (
    <Button {...props} type="submit" aria-disabled={pending} ref={ref}>
      {isPending ? pendingText : children}
    </Button>
  );
}
