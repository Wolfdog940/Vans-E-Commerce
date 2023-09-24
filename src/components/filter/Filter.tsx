import { Language } from '@mui/icons-material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useCustomDispatch, useCustomSelector} from '../../hooks/redux';
import { useState } from 'react';
import { addFilter } from '../../store/filterProductsSlice/filterProductsSlice';






export const Filter = () =>{

  const dispatch = useCustomDispatch()

  const [showMenu, setShowMenu] = useState(false);

  const [targetProduct, setTargetProduct] = useState("");

  const handleOpenMenu = () => setShowMenu(true);

  const handleCloseMenu = () => setShowMenu(false);

  const handleFilter = (e:any) => {
    dispatch(addFilter(e.currentTarget.id))
    handleCloseMenu()
  }

    return(
       <>
          <IconButton
            
            onClick={() => {
              console.log(showMenu);
              handleOpenMenu()
              console.log(showMenu);
            }}
          >
            <FilterAltIcon sx={{color:"blue",fontSize:40}}/>
          </IconButton>
          <Menu
            id="basic-menu"
            sx={{marginTop:"5%"}}
            open={showMenu}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            onClose={handleCloseMenu}
          >
            
              <MenuItem id='SHOES' onClick={(e)=>handleFilter(e)}>Zapatillas</MenuItem>
              <MenuItem id='CLOTHES' onClick={(e)=>handleFilter(e)}>Ropa</MenuItem>
              <MenuItem id='ACCESORIES' onClick={(e)=>handleFilter(e)}>Complementos</MenuItem>
              <MenuItem id='defaultProduct' onClick={(e)=>handleFilter(e)}>X</MenuItem>
            
          </Menu>
        </>
    )

}