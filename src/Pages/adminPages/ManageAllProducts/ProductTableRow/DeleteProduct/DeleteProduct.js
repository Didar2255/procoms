import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
} from '@mui/material';
import { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';

const DeleteProduct = ({ id, handleDeleteProduct }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* delete product button */}
      <div onClick={handleOpen}>
        <IconButton>
          <MdDeleteForever color="red" fontSize={30} />
        </IconButton>
      </div>
      {/* delete product popup */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Alert severity="error">Do you want to delete this product?</Alert>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ mr: 3 }}
            variant="outlined"
            color="error"
            onClick={handleClose}
          >
            No
          </Button>
          <div onClick={handleClose}>
            <Button
              variant="outlined"
              color="success"
              onClick={() => handleDeleteProduct(id)}
              autoFocus
            >
              Yes
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteProduct;
