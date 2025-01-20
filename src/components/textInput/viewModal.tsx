import {InputFieldProps} from '@/src/types/components/inputField';
import {useEffect, useState} from 'react';

export const useViewModal = (props: InputFieldProps) => {
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
    multiline,
    error,
    success,
    largeInput,
    halfWidth,
    capitalize,
    defaultValue,
    secureTextEntry,
    forceValidation,
    validate,
    onInputChange,
  } = props;

  const [inputValue, setInputValue] = useState(defaultValue || '');
  const [isValid, setIsValid] = useState(true);
  const [isTouched, setIsTouched] = useState(false);
  const [isSecureEntry, setIsSecureEntry] = useState(secureTextEntry);

  useEffect(() => {
    if ((isTouched || forceValidation) && validate) {
      setIsValid(validate(inputValue));
    }
  }, [inputValue, isTouched, forceValidation, validate]);
  useEffect(() => {
    setInputValue(defaultValue || '');
  }, [defaultValue]);
  const handleInputChange = (text: string) => {
    if (!isTouched) {
      setIsTouched(true);
    }
    setInputValue(text);
    if (onInputChange) {
      onInputChange(text);
    }
  };

  const togglePassword = () => {
    setIsSecureEntry(prev => !prev);
  };
  return {
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
    setInputValue,
    isValid,
    multiline,
    togglePassword,
    error,
    success,
    secureTextEntry,
    largeInput,
    halfWidth,
    capitalize,
  };
};
