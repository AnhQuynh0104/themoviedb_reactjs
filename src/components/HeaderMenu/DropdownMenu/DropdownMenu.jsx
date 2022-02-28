import React from "react"
import { Menu } from "antd"
import MenuItem from "antd/lib/menu/MenuItem"

const DropdownMenu = (props) => {
  const {itemName} = props
 
  return (
    <Menu>
      {Object.values(itemName).map((name, index) => (
        <MenuItem key={index}>
          {name}
        </MenuItem>
      ))}
    </Menu>
     
  )
}

export default DropdownMenu