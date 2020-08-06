import React from 'react'
import  {Menu}  from 'semantic-ui-react'
const HeaderMenu = () => {
    return (
      <Menu secondary pointing>
          <Menu.Item> NewGreenWood</Menu.Item>
          <Menu.Item position="right"> Arts</Menu.Item>
          <Menu.Item> Education</Menu.Item>
          <Menu.Item> Health  & Medical</Menu.Item>
          <Menu.Item> Real Estate</Menu.Item>
          <Menu.Item> Resturants</Menu.Item>
          <Menu.Item> Submit your Business</Menu.Item>
      </Menu>
    )
}

export default HeaderMenu;
