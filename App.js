import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import StackNavBar from "./src/navigations/stackNavBar";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Nav"
          component={StackNavBar}
          options={{
            headerStyle: {
              shadowOpacity: 0,
              elevation: 0,
            },
            headerTitle: null,
            headerShown: null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
