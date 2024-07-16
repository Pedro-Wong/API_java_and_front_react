import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../components/login";
import { SignUp } from "../components/signUp";
import { EditSkill } from "../components/editSkill";

const { Navigator, Screen } = createStackNavigator();

export const PublicRoutes = () => {
  return (
    <Navigator>
      <Screen name="login" component={Login} options={{ headerShown: false }} />
      <Screen
        name="signUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Screen name="edit" component={EditSkill}/>
    </Navigator>
  );
};
