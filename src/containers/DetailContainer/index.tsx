import { FC } from 'react';
import { User } from '../../api/controllers/users/types';
import { useLocation } from 'react-router-dom';

export const DetailContainer: FC = () => {
  const location = useLocation();
  const user: User = location.state || {};
  return <>Coming Soon... {user.name?.first}</>;
};
