import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";

import { ReactNativeFastInputViewProps } from "./ReactNativeFastInput.types";

const NativeView: React.ComponentType<ReactNativeFastInputViewProps> =
  requireNativeViewManager("ReactNativeFastInput");

export default function ReactNativeFastInputView(
  props: ReactNativeFastInputViewProps
) {
  return <NativeView {...props} />;
}
