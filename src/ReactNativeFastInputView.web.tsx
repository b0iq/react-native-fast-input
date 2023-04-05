import * as React from "react";

import { ReactNativeFastInputViewProps } from "./ReactNativeFastInput.types";

export default function ReactNativeFastInputView(
  props: ReactNativeFastInputViewProps
) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
