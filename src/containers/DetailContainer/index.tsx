import { FC, useState } from 'react';
import { User } from '../../api/controllers/users/types';
import { useLocation } from 'react-router-dom';
import { Box, Paper } from '@mui/material';
import { ICON_NAMES } from '../../components/InteractiveIcons/types';
import { convertUTCIntoLocalDateTime } from '../../utils';
import { InteractiveIcons, BriefInfo, MapBox } from '../../components';
import styles from './DetailContainer.module.scss';

export const DetailContainer: FC = () => {
  const location = useLocation();
  const user: User = location.state || {};
  const { name, dob, location: userLocation, phone, login } = user;
  const longitude = +(userLocation?.coordinates.longitude ?? 0);
  const latitude = +(userLocation?.coordinates.latitude ?? 0);
  const initialSelect = ICON_NAMES.PROFILE;
  const [texts, setTexts] = useState(getProfileTexts());

  const handleIconClick = (iconName: ICON_NAMES) => {
    switch (iconName) {
      case ICON_NAMES.PROFILE: {
        setTexts(getProfileTexts());
        break;
      }
      case ICON_NAMES.EMAIL: {
        setTexts(getEmailTexts());
        break;
      }
      case ICON_NAMES.CALENDAR: {
        setTexts(getCalendarTexts());
        break;
      }
      case ICON_NAMES.MAP: {
        setTexts(getLocationTexts());
        break;
      }
      case ICON_NAMES.PHONE: {
        setTexts(getContactTexts());
        break;
      }
      case ICON_NAMES.LOCK: {
        setTexts(getPasswordTexts());
        break;
      }
    }
  };

  function getProfileTexts() {
    return {
      text1: 'Hi, My name is',
      text2: `${name?.first} ${name?.last}`,
    };
  }

  function getEmailTexts() {
    return {
      text1: 'My email address is',
      text2: user.email ?? '',
    };
  }

  function getCalendarTexts() {
    return {
      text1: 'My birthday is',
      text2: convertUTCIntoLocalDateTime(dob?.date ?? ''),
    };
  }

  function getLocationTexts() {
    const { number, name } = userLocation?.street ?? {};
    return {
      text1: 'My address is',
      text2: `${number} ${name}`,
    };
  }

  function getContactTexts() {
    return {
      text1: 'My phone number is',
      text2: `${phone}`,
    };
  }

  function getPasswordTexts() {
    return {
      text1: 'My password is',
      text2: `${login?.password}`,
    };
  }

  return (
    <Box component={Paper} borderRadius='10px'>
      <Box className={styles.mediaBackground}>
        <img src={user.picture?.large} className={styles.media} />
      </Box>
      <BriefInfo
        text1={texts.text1}
        text2={texts.text2}
        pt='100px'
        key={texts.text1} // remount on key change
      />
      <InteractiveIcons
        onIconClick={handleIconClick}
        initialSelect={initialSelect}
      />
      <MapBox latitude={latitude} longitude={longitude} />
    </Box>
  );
};
