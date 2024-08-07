import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { paths } from '../constants';
import { Home } from '../pages';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.HOMEPAGE} element={<Home />} />
        <Route path={paths.USER_DETAIL} element={<>Detail Coming Soon</>} />
        <Route path='*' element={<Navigate to={paths.HOMEPAGE} replace />} />
      </Routes>
    </BrowserRouter>
  );
};
