import * as React from 'react';
import {View, Text, CheckBox} from 'react-native';
// import { ToggleButton, Switch } from 'react-native-paper';

const HomeScreen = ({navigation}) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
      }}>
      <Text>hello from home screen</Text>
      {/* <Switch
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
        color="#27ABE2"
      /> */}
    </View>
  );
};

export default HomeScreen;
