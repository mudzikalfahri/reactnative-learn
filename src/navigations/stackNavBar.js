import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePages from "../pages/home";
import ProfilePages from "../pages/profile";
import { FontAwesome } from "@expo/vector-icons";

const NavStack = createBottomTabNavigator();

function StackNavBar() {
  return (
    <NavStack.Navigator>
      <NavStack.Screen
        name="Home"
        component={HomePages}
        options={{
          headerTitle: "Home",
          tabBarIcon: ({ color }) => {
            return <FontAwesome name={"home"} />;
          },
        }}
      />
      <NavStack.Screen
        name="Profile"
        component={ProfilePages}
        options={{
          headerTitle: "Search",
          tabBarIcon: ({ color }) => {
            return <FontAwesome name={"paper-plane-o"} />;
          },
        }}
      />
    </NavStack.Navigator>
  );
}
export default StackNavBar;
