import {Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {theme} from '../../infrastructure/theme';
import {commonStyles} from '../../styles/commonStyles';
import {Row} from '../tools';
import {useNavigation} from '@react-navigation/native';

const Header = ({
  title,
  hideRightButtons,
  hideBackButton,
}: {
  title: string;
  hideRightButtons?: boolean;
  hideBackButton?: boolean;
}) => {
  const navigation = useNavigation();
  return (
    <>
      <Row alignItems="center" justifyContent="space-between">
        <TouchableOpacity
          onPress={() => (hideBackButton ? {} : navigation.goBack())}>
          <Row alignItems="center" gap={10} style={[commonStyles.padding16]}>
            {!hideBackButton && (
              <Icon
                name="chevron-back-outline"
                size={22}
                color={theme.colors.ui.white}
              />
            )}
            <Text
              style={[
                commonStyles.text16,
                commonStyles.whiteText,
                commonStyles.bold600,
              ]}>
              {title}
            </Text>
          </Row>
        </TouchableOpacity>
        {!hideRightButtons && (
          <Row alignItems="center">
            <TouchableOpacity style={[commonStyles.padding16]}>
              <Icon
                name="search-outline"
                size={22}
                color={theme.colors.ui.white}
              />
            </TouchableOpacity>
            <TouchableOpacity style={[commonStyles.padding16]}>
              <Icon
                name="notifications-outline"
                size={22}
                color={theme.colors.ui.white}
              />
            </TouchableOpacity>
            <TouchableOpacity style={[commonStyles.padding16]}>
              <Icon
                name="ellipsis-vertical-outline"
                size={22}
                color={theme.colors.ui.white}
              />
            </TouchableOpacity>
          </Row>
        )}
      </Row>
    </>
  );
};

export default memo(Header);
