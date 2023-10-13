import React, {useEffect} from 'react';

import {Text, TextInput} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FormComp = ({
  placeholder,
  icon,
  isSecure,
}: {
  placeholder: string;
  icon: string;
  isSecure: boolean;
}) => {
  const [focus, setFocus] = React.useState(false);
  const [hidePassword, setHidePassword] = React.useState(true);
  const [text, setText] = React.useState('');

  const Label = (
    <Text
      className={`${
        text.length > 0 || focus ? 'text-black' : 'text-gray-400'
      }`}>
      {placeholder}
    </Text>
  );

  useEffect(() => {
    //console.log(text);
  });
  return (
    <TextInput
      className={`${
        focus ? 'border-black' : 'border-gray-300'
      }  border rounded-lg bg-white h-16 text-base mx-2`}
      label={Label}
      underlineColor="transparent"
      activeUnderlineColor="black"
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      underlineStyle={{display: 'none'}}
      onChangeText={text => setText(text)}
      secureTextEntry={isSecure ? hidePassword : false}
      autoCapitalize="none"
      right={
        icon.length > 0 ? (
          <TextInput.Icon
            icon={hidePassword ? 'eye-off' : icon}
            color={'black'}
            onPress={() => setHidePassword(!hidePassword)}
          />
        ) : null
      }
    />
  );
};

export default FormComp;
