import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

interface ConfirmationModalProps {
  open: boolean;
  title?: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  setModalOpen: (value: boolean) => void;
  confirmText?: string;
  cancelText?: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  open,
  title = "Confirmation",
  message,
  onConfirm,
  onCancel,
  setModalOpen,
  confirmText = "Confirm",
  cancelText = "Cancel",
}) => {
  const handleCancel = () => {
    onCancel();
    setModalOpen(false);
  };
  const handleConfirm = () => {
    onConfirm();
    setModalOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleCancel}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Typography>{message}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="secondary">
          {cancelText}
        </Button>
        <Button onClick={handleConfirm} color="primary" variant="contained">
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationModal;
