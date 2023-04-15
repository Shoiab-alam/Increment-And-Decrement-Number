import React from 'react';
import Button from '@material-ui/core/Button'; 
import Tooltip from '@material-ui/core/Tooltip'





const Inc = (props) => {

    return ( 

        <Tooltip title='Add'>
            
        <Button className='w-28 h-12' style={{fontSize:'25px'}} onClick={props.Increment}   variant="contained" color="primary" size="large"><i class="fa-sharp fa-solid fa-plus"></i></Button>  
        </Tooltip> 
    )
}

export default Inc;