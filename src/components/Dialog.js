import React, {useState} from "react";
import {Button,
        Dialog,
        DialogActions,
        DialogContent,
        DialogContentText,
        DialogTitle} from "@mui/material";
const Dial = (props) => {
    const [open,setOpen]=useState(true);
    return ( 
    <div>
    <Button onClick={()=>setOpen(true)}>Open Dialog </Button>
    <Dialog  open={open} onClose={()=> setOpen(false)}>
    <DialogTitle>Booking Confirmed</DialogTitle>
    <DialogContent>
    <DialogContentText>
        {props.data}
     </DialogContentText>
     </DialogContent>
     <DialogActions>
     <Button onClick={()=>setOpen(false)}>Close</Button>
     </DialogActions>
    </Dialog>
    </div>
    )
}
export default Dial;