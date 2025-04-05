
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

import { View, Text } from 'react-native';

const MenuList = ({ menu }) => {
   return (
      <View>
         <Menu>
            <MenuTrigger  >
               <Text style={{ color: '#4444ff', fontSize: 15, paddingLeft:5, fontWeight:"bold" }}>New Game</Text>
            </MenuTrigger>
            <MenuOptions>
               <MenuOption onSelect={() => menu[0].method()} >
                  <Text style={{ color: '#333399', marginLeft: 3, fontSize: 22,  }}>{menu[0].text}</Text>
               </MenuOption>
               <MenuOption onSelect={() => menu[1].method()} >
                  <Text style={{ color: '#333399', marginLeft: 3, fontSize: 22 }}>{menu[1].text}</Text>
               </MenuOption>
            </MenuOptions>
         </Menu>
      </View>

   )
}

export default MenuList