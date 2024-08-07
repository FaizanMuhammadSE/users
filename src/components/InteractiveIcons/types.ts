export enum ICON_NAMES {
  PROFILE = 'Profile',
  EMAIL = 'Email',
  CALENDAR = 'Calendar',
  MAP = 'Location',
  PHONE = 'Phone',
  LOCK = 'Lock',
}

export interface IInteractiveIconsProps {
  onIconClick: (iconName: ICON_NAMES) => void;
  initialSelect: ICON_NAMES;
}
