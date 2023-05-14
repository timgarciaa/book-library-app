import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Input,
} from "@material-tailwind/react";
import React from "react";

type Props = {
  isOpen: boolean;
  toggleModal: any;
  folderRecord: any;
  createBook: (name: any, parentId: number) => void;
};

function AddBookModal({ isOpen, toggleModal, folderRecord, createBook }: Props) {
  const [bookName, setbookName] = React.useState("");
  const onChange = ({ target }: any) => setbookName(target.value);

  const onSubmit = () => {
    createBook(bookName, folderRecord.id);
  };

  return (
    <Dialog open={isOpen} handler={toggleModal}>
      <DialogHeader>Add book</DialogHeader>
      <DialogBody divider>
        <div className="relative flex w-full">
          <Input
            label="book Name"
            value={bookName}
            onChange={onChange}
            className="pr-20"
            containerProps={{
              className: "min-w-0",
            }}
          />
          <Button
            size="sm"
            color={bookName ? "blue" : "blue-gray"}
            disabled={!bookName}
            className="!absolute right-1 top-1 rounded"
            onClick={onSubmit}
          >
            Submit
          </Button>
        </div>
      </DialogBody>
    </Dialog>
  );
}

export default AddBookModal;
