import { Oops as OopsVector } from 'assets/img/Oops/Oops.vector';
import _ from 'lodash';
import React from 'react';
import { Image } from 'react-native';

import {
  Button, Center, Headlines, Link, Spacer, Text,
} from 'components';

import { Background } from './Modal.styled';

const { H2 } = Headlines;

export const Modal = ({ navigation, route }) => {
  const {
    title = 'Oeps! Er gaat iets mis.',
    text = '',
    buttons = [{ title: 'Ok' }],
    imageSource,
    ImageInstance = <OopsVector width="40%" />,
  } = route?.params || {};
  const goTo = (routeConf) => () => (typeof routeConf === 'string'
    ? navigation.navigate(routeConf)
    : navigation.replace(...routeConf));

  return (
    <Background>
      <Center isFlex>
        {imageSource
          ? <Image resizeMode="contain" source={imageSource} style={{ maxWidth: '55%' }} />
          : ImageInstance}

        <Spacer v={0.5} />
        <H2 center>{title}</H2>

        <Spacer v={0.5} />
        <Text center>{text}</Text>
        <Spacer v={0.5} />

        {_.map(buttons, (ButtonItem) => {
          if (React.isValidElement(ButtonItem)) return ButtonItem;
          const {
            to, as = 'Button', onPress, popOnCallback, ...btn
          } = ButtonItem;
          const Btn = as === 'Link' ? Link : Button;
          const btnLabel = _.defaultTo(btn.title, '');
          const action = to ? goTo(to) : navigation.goBack;

          return (
            <React.Fragment key={btnLabel}>
              <Btn
                onPress={(
                  popOnCallback
                    ? () => onPress().finally(() => navigation.goBack())
                    : onPress
                ) || action}
                style={{ marginVertical: 13 }}
                title={btnLabel}
              />
            </React.Fragment>
          );
        })}
      </Center>
    </Background>
  );
};
