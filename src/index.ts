import {
  NativeModulesProxy,
  EventEmitter,
  Subscription,
} from "expo-modules-core";

// Import the native module. On web, it will be resolved to ReactNativeFastInput.web.ts
// and on native platforms to ReactNativeFastInput.ts
import {
  ChangeEventPayload,
  ReactNativeFastInputViewProps,
} from "./ReactNativeFastInput.types";
import ReactNativeFastInputModule from "./ReactNativeFastInputModule";
import ReactNativeFastInputView from "./ReactNativeFastInputView";

// Get the native constant value.
export const PI = ReactNativeFastInputModule.PI;

export function hello(): string {
  return ReactNativeFastInputModule.hello();
}

export async function setValueAsync(value: string) {
  return await ReactNativeFastInputModule.setValueAsync(value);
}

const emitter = new EventEmitter(
  ReactNativeFastInputModule ?? NativeModulesProxy.ReactNativeFastInput
);

export function addChangeListener(
  listener: (event: ChangeEventPayload) => void
): Subscription {
  return emitter.addListener<ChangeEventPayload>("onChange", listener);
}

export {
  ReactNativeFastInputView,
  ReactNativeFastInputViewProps,
  ChangeEventPayload,
};
