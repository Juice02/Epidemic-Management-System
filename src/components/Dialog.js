import React, {useState} from "react";
import {Button,
        Dialog,
        DialogActions,
        DialogContent,
        DialogContentText,
        DialogTitle} from "@mui/material";
const Dial = (props) => {
    const [open,setOpen]=useState(true);
    function handleClick(event) {
        setOpen(false)
        props.handlePopUp();
        window.location='/';
        
    }
    return ( 
    <div>
    <Button onClick={()=>setOpen(true)}>Open Dialog </Button>
    <Dialog  open={open} onClose={()=> setOpen(false)}>
    <DialogTitle>{props.title}</DialogTitle>
    <DialogContent>
    <DialogContentText>
       
        Booking id:{props.data}
     </DialogContentText>
     </DialogContent>
     <DialogActions>
     <Button onClick={handleClick}>Close</Button>
     </DialogActions>
    </Dialog>
    </div>
    )
}
export default Dial;