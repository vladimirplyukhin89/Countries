import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Main } from './Main';

export const Layout = () => {
    return (
        <div>
            <Header />
            <Main>
                <Outlet />
            </Main>
        </div>
    );
};