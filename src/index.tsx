import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-heverex-ui' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

type HeverexUiProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'HeverexUiView';

export const HeverexUiView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<HeverexUiProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
