import { CopyIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Signup from "./signup";

export function SignUpModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          type="submit"
          className="w-full rounded-sm p-4 text-black uppercase"
        >
          Create an account
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md w-full">
        <Signup />
      </DialogContent>
    </Dialog>
  );
}
