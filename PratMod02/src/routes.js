import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Welcome from 'pages/welcome';
import Organizations from 'pages/organizations';
import Repositories from 'pages/repositories';
import Header from 'components/header';
import { colors } from 'styles';

const createRoutes = (userExists = false) =>
  StackNavigator(
    {
      Welcome: { screen: Welcome },
      User: {
        screen: TabNavigator(
          {
            Repositories: { screen: Repositories },
            Organizations: { screen: Organizations },
          },
          {
            swipeEnabled: true,
            animationEnabled: true,
            tabBarPosition: 'bottom',
            tabBarOptions: {
              showLabel: false,
              activeTintColor: colors.white,
              inactiveTintColor: colors.inactive,
              style: {
                backgroundColor: colors.primary,
              },
            },
          },
        ),
      },
    },
    {
      initialRouteName: userExists ? 'User' : 'Welcome',
      navigationOptions: {
        header: props => <Header {...props} />,
      },
    },
  );

export default createRoutes;
