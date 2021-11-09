import React, {useContext} from 'react';
import Animated, {interpolate} from 'react-native-reanimated';
import styled from 'styled-components/native';
import {AnimatedContext} from '../Navigator/DrawerNav';
import {Colors} from '../Utils/Colors';

// Higher-Order-component is created to make the Screen view animated
// directly from here instead of passing props to the particular screen view
// And used generic type-T instead of defining type-ANY
function withTransitionHOC<T>(Component: React.ComponentType<T>) {
  type WrapperProps = {children: React.ReactChild};
  const Wrapper: React.FC<WrapperProps> = ({children}) => {
    // Used context for passing props effectively
    const animated = useContext(AnimatedContext);
    //Interpolating the View by X-Axis(Horizontally) from 0 to 30
    const translateX = interpolate(animated, {
      inputRange: [0, 1],
      outputRange: [0, 30],
    });
    //Interpolating the View by Y-Axis(Vertically) from 0 to 60
    const translateY = interpolate(animated, {
      inputRange: [0, 1],
      outputRange: [0, 60],
    });
    //Interpolating the View by rotating -10 Degree from 0 Degree
    const spin = {
      rotate: interpolate(animated, {
        inputRange: [0, 1],
        outputRange: ['0deg', '-10deg'],
      }),
    };
    //Interpolating the View for changing the border radius from 0 to 50
    const borderRadius = interpolate(animated, {
      inputRange: [0, 1],
      outputRange: [0, 30],
    });
    // Returning the custom interpolated component view with user
    // action's like swipe and tap on hamburger menu
    return (
      <TransitionContainer>
        <CardView
          style={{
            transform: [{translateX, translateY}, spin],
            borderRadius,
          }}>
          {children}
        </CardView>
      </TransitionContainer>
    );
  };

  // Returning the Wrapper Component with wrapped child component
  return (props: T) => (
    <Wrapper>
      <Component {...props} />
    </Wrapper>
  );
}

export default withTransitionHOC;

// Instead of using the View and Animated View I've tried to use Styled components. Just to try something new
const TransitionContainer = styled.View`
  flex: 1;
  background-color: ${Colors.DRAWER_BG_COLOR};
`;
const CardView = styled(Animated.View)`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  position: absolute;
  overflow: hidden;
  background-color: ${Colors.COLOR_WHITE};
`;
