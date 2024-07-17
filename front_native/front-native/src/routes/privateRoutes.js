import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainScreen } from "../components/main";
import { EditSkill } from "../components/editSkill";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { About } from "../components/about";


const { Navigator, Screen } = createBottomTabNavigator();

export const PrivateRoutes = () => {
  return (
    <Navigator>
      <Screen
        name="Principal"
        component={MainScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons name="home" size={24} color="black" />
            );
          },
        }}
      />
      <Screen
        name="Sobre"
        component={About}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <AntDesign name="questioncircle" size={24} color="black" />;
          },
        }}
      />
    </Navigator>
  );
};
