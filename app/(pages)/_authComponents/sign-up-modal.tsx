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
import { useState } from "react";
import Signup from "./signup";

export function SignUpModal() {
  const [isOpen, setIsOpen] = useState(true);
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
      {isOpen ? (
        <div>
          <DialogContent className="sm:max-w-full w-full">
            <Signup open={setIsOpen} />
          </DialogContent>
        </div>
      ) : null}
    </Dialog>
  );
}
