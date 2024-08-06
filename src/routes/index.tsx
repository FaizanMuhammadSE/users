import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { paths } from '../constants';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.HOMEPAGE} element={<>Home Page Coming Soon</>} />
        <Route path={paths.USER_DETAIL} element={<>Detail Coming Soon</>} />
        <Route path='*' element={<Navigate to={paths.HOMEPAGE} replace />} />
      </Routes>
    </BrowserRouter>
  );
};
