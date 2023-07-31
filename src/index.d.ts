import React from "react";
import type Flickity from "@types/flickity";

export interface ReactFlickityComponentProps {
  children?: React.ReactNode;
  className?: string;
  disableImagesLoaded?: boolean;
  elementType?: string;
  flickityRef?: (ref: Flickity) => void;
  options?: Flickity.Options;
  reloadOnUpdate?: boolean;
  static?: boolean;
}

declare class ReactFlickityComponent extends React.Component<ReactFlickityComponentProps, any> { }

export default ReactFlickityComponent;