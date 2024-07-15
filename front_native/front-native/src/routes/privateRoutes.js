import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainScreen } from "../components/main";
import { AddSkill } from "../components/addSkill";
import { EditSkill } from "../components/editSkill";



const {Navigator, Screen} = createBottomTabNavigator

export const PrivateRoutes = () => {

    return(
        <Navigator>
            <Screen name="mainScreen" component={MainScreen}/>
            <Screen name="addSkill" component={AddSkill}/>
            <Screen name="editSkil" component={EditSkill}/>
        </Navigator>



    );



}
