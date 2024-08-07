import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { paths } from '../constants';
import { Home } from '../pages';
import { Detail } from '../pages/Detail';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.HOMEPAGE} element={<Home />} />
        <Route path={paths.USER_DETAIL} element={<Detail />} />
        <Route path='*' element={<Navigate to={paths.HOMEPAGE} replace />} />
      </Routes>
    </BrowserRouter>
  );
};
