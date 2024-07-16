import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MainScreen} from "../components/main"
import { EditSkill } from "../components/editSkill";

const { Navigator, Screen } = createBottomTabNavigator();

export const PrivateRoutes = () => {
  return (
    <Navigator>
      <Screen
        name="Principal"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="editSkil"
        component={EditSkill}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};
