import React, {memo} from 'react';
import {View, TextInput, Text, TouchableOpacity, Image} from 'react-native';
import {theme} from '../../infrastructure/theme';
import {commonStyles} from '../../styles/commonStyles';
import {Spacer} from '../tools';
import {InputFieldProps} from '@/src/types/components/inputField';
import {useViewModal} from './viewModal';
import {inputStyles as styles} from './style';

const InputField: React.FC<InputFieldProps> = props => {
  const {
    topLabel,
    placeholder,
    validationMessage,
    style,
    inputStyle,
    labelStyle,
    validationStyle,
    textInputProps,
    editable,
    isSecureEntry,
    handleInputChange,
    inputValue,
    isValid,
    multiline,
    error,
    success,
    largeInput,
    halfWidth,
    capitalize,
  } = useViewModal(props);

  const color = error
    ? theme.colors.ui.error
    : success
    ? theme.colors.ui.success
    : theme.colors.ui.text;

  return (
    <View
      style={[styles.container, halfWidth && commonStyles.halfWidth, style]}>
      {topLabel && (
        <Text style={[styles.topLabel, labelStyle]}>{topLabel}</Text>
      )}
      <View
        style={[
          styles.inputContainer,
          multiline && styles.multiLineInput,
          (error || success) && {borderColor: color},
        ]}>
        {largeInput && (
          <>
            <Spacer position="left" size={16} />
            <Text style={[commonStyles.text16, styles.moneyText]}>₱</Text>
          </>
        )}
        <TextInput
          autoCapitalize={capitalize ? 'words' : 'sentences'}
          placeholder={placeholder}
          secureTextEntry={isSecureEntry}
          placeholderTextColor={theme.colors.ui.placeholder}
          style={[
            styles.input,
            largeInput && styles.moneyText,
            inputStyle,
            (error || success) && {color},
          ]}
          onChangeText={handleInputChange}
          value={inputValue}
          editable={editable}
          {...textInputProps}
        />
      </View>
      {!isValid && validationMessage && (
        <Text style={[commonStyles.errorMessage, validationStyle]}>
          {validationMessage}
        </Text>
      )}
    </View>
  );
};

export default memo(InputField);
