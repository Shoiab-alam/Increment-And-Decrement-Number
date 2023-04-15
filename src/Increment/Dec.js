import React from "react";
import Button from '@material-ui/core/Button'; 
import { Tooltip } from "@material-ui/core";

const Dec = (props) => {

    return(
        <Tooltip title='Delete'>
            <Button  className='w-28 h-12' style={{fontSize:'25px'}} onClick={props.Decrement}  variant="contained" color="primary" size="large"><i class="fa-solid fa-minus"></i></Button>
        </Tooltip>
    ) 
}

export default Dec;