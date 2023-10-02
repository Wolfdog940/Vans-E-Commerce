import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useCustomDispatch} from '../../hooks/redux';
import { useState } from 'react';
import { addFilter } from '../../store/filterProductsSlice/filterProductsSlice';
import { filterData } from '../../assets/mocks/FilterData';
import { filterStyles } from "../index"





export const Filter = () =>{

  const dispatch = useCustomDispatch()

  const [showMenu, setShowMenu] = useState(false);

  const handleOpenMenu = () => setShowMenu(true);

  const handleCloseMenu = () => setShowMenu(false);

  const handleFilter = (e:any) => {
    dispatch(addFilter(e.currentTarget.id))
    window.scrollTo(0,0)
    handleCloseMenu()
  }

    return(
       <>
          <IconButton
            onClick={() => {
              handleOpenMenu()
              }}
          >
            <FilterAltIcon sx={filterStyles.filterIcon}/>
          </IconButton>
          <Menu
            id="basic-menu"
            sx={filterStyles.menuStyles}
            open={showMenu}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            onClose={handleCloseMenu}
          >
            {filterData.map((product, index) =>(
              <MenuItem id= {product.itemId} key={index} 
                  onClick={(e)=>handleFilter(e)}
                >{product.menuText}
              </MenuItem>))}
          </Menu>
        </>
    )

}