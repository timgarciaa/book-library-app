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
  createLocation: (name: any, parentId: number) => void;
};

function AddLocationModal({ isOpen, toggleModal, folderRecord, createLocation }: Props) {
  const [locationName, setLocationName] = React.useState("");
  const onChange = ({ target }: any) => setLocationName(target.value);

  const onSubmit = () => {
    createLocation(locationName, folderRecord.id);
  };

  return (
    <Dialog open={isOpen} handler={toggleModal}>
      <DialogHeader>Add Location</DialogHeader>
      <DialogBody divider>
        <div className="relative flex w-full">
          <Input
            label="Location Name"
            value={locationName}
            onChange={onChange}
            className="pr-20"
            containerProps={{
              className: "min-w-0",
            }}
          />
          <Button
            size="sm"
            color={locationName ? "blue" : "blue-gray"}
            disabled={!locationName}
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

export default AddLocationModal;
