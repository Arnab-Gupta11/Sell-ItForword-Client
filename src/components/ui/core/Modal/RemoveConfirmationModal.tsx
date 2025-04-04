import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DeleteModalProps {
  name: string | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onConfirm: () => void;
}

const RemoveConfirmationModal: React.FC<DeleteModalProps> = ({ name, isOpen, onOpenChange, onConfirm }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-light-secondary-bg dark:bg-dark-primary-bg border-none">
        <DialogHeader>
          <DialogTitle>Remove Item</DialogTitle>
          <DialogDescription>
            Are you sure you want to remove <span className="font-semibold text-red-500">{name}</span> from wishlist? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={() => {
              onConfirm();
              onOpenChange(false);
            }}
          >
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RemoveConfirmationModal;
