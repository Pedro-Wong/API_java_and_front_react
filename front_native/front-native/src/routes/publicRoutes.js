import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../components/login";
import { SignUp } from "../components/signUp";

const { Navigator, Screen } = createStackNavigator();

export const PublicRoutes = () => {
  return (
    <Navigator>
      <Screen name="login" component={Login} options={{headerShown: false}} />
      <Screen name="signUp" component={SignUp} />
    </Navigator>
  );
};
