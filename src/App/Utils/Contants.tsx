/**
 * Constant.tsx is the base class for exporting the constants/constant variable used in the application
 */

import TabNav from '../Navigator/TabNav';
import ContactScreen from '../Screens/ContactScreen';
import DetailsScreen from '../Screens/DetailScreen';
import ListScreen from '../Screens/ListScreen';

export const StackItems = [
  {priority: 0, key: 'Home', title: 'Start', component: TabNav},
  {priority: 3, key: 'List', title: 'Favorites', component: ListScreen},
  {priority: 4, key: 'Details', title: 'Your Orders', component: DetailsScreen},
];

//Sorting the item menu list based on priority value
export const DrawerItems = [
  ...StackItems,
  {priority: 2, key: 'Contact', title: 'Your Cart', component: ContactScreen},
].sort((i1, i2) => i1.priority - i2.priority);

export const Icons = {menuIcon: 'menu-outline'};
