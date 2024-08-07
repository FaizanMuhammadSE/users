import { FC, useState } from 'react';
import { IconButton } from '@mui/material';
import {
  AccountCircle,
  Email,
  CalendarToday,
  LocationOn,
  Phone,
  Lock,
} from '@mui/icons-material';
import styles from './InteractiveIcons.module.scss'; // Import the Sass module
import { IInteractiveIconsProps, ICON_NAMES } from './types';

const iconList = [
  {
    name: ICON_NAMES.PROFILE,
    icon: <AccountCircle fontSize='large' />,
  },
  { name: ICON_NAMES.EMAIL, icon: <Email fontSize='large' /> },
  { name: ICON_NAMES.CALENDAR, icon: <CalendarToday fontSize='large' /> },
  { name: ICON_NAMES.MAP, icon: <LocationOn fontSize='large' /> },
  { name: ICON_NAMES.PHONE, icon: <Phone fontSize='large' /> },
  { name: ICON_NAMES.LOCK, icon: <Lock fontSize='large' /> },
];

export const InteractiveIcons: FC<IInteractiveIconsProps> = ({
  initialSelect,
  onIconClick,
}) => {
  const [selectedIcon, setSelectedIcon] = useState(initialSelect);

  const handleClick = (iconName: ICON_NAMES) => {
    setSelectedIcon(iconName);
    if (onIconClick) {
      onIconClick(iconName);
    }
  };

  return (
    <div className={styles.iconsContainer}>
      {iconList.map((item) => (
        <IconButton
          key={item.name}
          className={`${styles.iconButton} ${
            selectedIcon === item.name ? styles.selected : ''
          }`}
          onClick={() => handleClick(item.name)}
        >
          {item.icon}
        </IconButton>
      ))}
    </div>
  );
};
