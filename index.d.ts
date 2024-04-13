/// <reference types="react" />
import { CSSProperties, SVGAttributes } from 'react'
import {
  Transform,
  IconProp,
  FlipProp,
  SizeProp,
  PullProp,
  RotateProp,
  FaSymbol,
  IconDefinition as FontAwesomeSVGIconDefinition
} from '@fortawesome/fontawesome-svg-core'
import { IconDefinition as FreeSolidSVGIconDefinition } from '@fortawesome/free-solid-svg-icons';

export function FontAwesomeIcon(props: FontAwesomeIconProps): JSX.Element 

/**
 * @deprecated use FontAwesomeIconProps
 */
export type Props = FontAwesomeIconProps

// This is identical to the version of Omit in Typescript 3.5. It is included for compatibility with older versions of Typescript.
type BackwardCompatibleOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export interface FontAwesomeIconProps extends BackwardCompatibleOmit<SVGAttributes<SVGSVGElement>, 'children' | 'mask' | 'transform'> {
  forwardedRef?: ((e: any) => void) | React.MutableRefObject<any> | null
  icon: FreeSolidSVGIconDefinition | FontAwesomeSVGIconDefinition
  mask?: IconProp
  className?: string
  color?: string
  spin?: boolean
  pulse?: boolean
  border?: boolean
  fixedWidth?: boolean
  inverse?: boolean
  listItem?: boolean
  flip?: FlipProp
  size?: SizeProp
  pull?: PullProp
  rotation?: RotateProp
  transform?: string | Transform
  symbol?: FaSymbol
  style?: CSSProperties
  tabIndex?: number;
  title?: string;
  swapOpacity?: boolean;
}
