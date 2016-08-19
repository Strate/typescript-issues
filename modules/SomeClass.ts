import * as React from "react"

enum SomeEnum {
  one,
}
export default class SomeClass extends React.Component<void, void> {
  public static SomeEnum = SomeEnum;
}
