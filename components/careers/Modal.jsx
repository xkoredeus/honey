import React, {useState} from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import {Box,Button, CircularProgress, makeStyles, TextField} from "@material-ui/core";
import {useForm} from "react-hook-form";
import axios from "axios";
import DialogActions from "@material-ui/core/DialogActions";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import {Cross} from "../shared/Svg";

const useStyles = makeStyles({
  progress: {
    width: '15px !important',
    height: '15px !important',
    marginLeft: 8,
  },
  form: {
    width: 350,
  },
  title: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    position: 'absolute',
    right: 15,
    top: 13,
  }
});

export const Modal = ({isOpen, handleClose}) => {
  const cls = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleCapture = ({ target }) => {
    setSelectedFile(target.files[0]);
  };

  const attachButtonContent = `${selectedFile?.name.slice(0, 10)}...`;

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    const preparedData = {
      ...(data?.name && {
        name: data.name
      }),
      ...(data?.email && {
        email: data.email
      }),
      source: "honeydatingsolutionsCVmodal",
    }

    setIsLoading(true);
    axios
        .post('https://f5vvtbgooh.execute-api.us-east-1.amazonaws.com/prod/moewe-contactformAAA', preparedData)
        .then(() => {
          setTimeout(() => {
            setIsSubmited(true);
            reset();
          }, 700)
        })
        .finally(() => {
          setTimeout(() => {
            setIsLoading(false)
            handleClose();
          }, 700)
        })
  };
  return (
      <Dialog open={isOpen} onClose={handleClose} disableScrollLock={ true }>
        <form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
          <DialogTitle className={cls.title}>
            <span>Send us CV</span>
            <IconButton className={cls.button} onClick={handleClose}>
              <Cross />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Box sx={{marginBottom: {xs: '1.5rem', md: '2rem'}}}>
              <TextField
                  label="Full Name"
                  placeholder="Enter your name"
                  required
                  fullWidth
                  focused
                  {...register("name", { required: true })}
              />
            </Box>
            <Box sx={{marginBottom: {xs: '1.5rem', md: '2rem'}}}>
              <TextField
                  label="E-mail"
                  placeholder="Enter your e-mail"
                  required
                  fullWidth
                  focused
                  {...register("email", { required: true })}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <input
                color="primary"
                accept="image/*"
                type="file"
                id="icon-button-file"
                style={{ display: 'none', }}
                onChange={handleCapture}
            />
            <label htmlFor="icon-button-file">
              <Button
                  variant="outlined"
                  component="span"
                  color="primary"
                  className={cls.attach}
              >
                {selectedFile ? attachButtonContent : "Attach file"}
              </Button>
            </label>
            <Button
              variant='contained'
              color='primary'
              type='submit'
            >

              {!isLoading ? 'Send' : 'Sending'}
              {isLoading && <CircularProgress className={cls.progress}/>}
            </Button>
          </DialogActions>

        </form>
        <Snackbar
            autoHideDuration={3000}
            open={isSubmited}
            message="Thank you for cv!"
            onClose={() => setIsSubmited(false)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
        />
      </Dialog>
  )
}