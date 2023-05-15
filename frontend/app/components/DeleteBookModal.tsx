import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

type Props = {
  isOpen: boolean;
  toggleModal: any;
  bookId: number;
  parentId: number;
  deleteBook: (id: number, parentId: number) => void;
};

export default function DeleteBookModal({
  isOpen,
  toggleModal,
  bookId,
  parentId,
  deleteBook,
}: Props) {
  const confirmDelete = () => {
    deleteBook(bookId, parentId);
    toggleModal();
  };
  return (
    <Dialog
      open={isOpen}
      handler={toggleModal}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <DialogHeader>Delete</DialogHeader>
      <DialogBody divider>
        Are you sure you want to delete this book?
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={toggleModal}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={confirmDelete}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
