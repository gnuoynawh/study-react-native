import React from 'react';

// import
import { NavigationContainer } from '@react-navigation/native';
 
// screen
import DrawerNavigator from './src/screen/DrawerNavigator';

function App() {
    console.log('TEST', `start App!` );
    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );
}

export default App;