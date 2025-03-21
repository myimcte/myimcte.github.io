import { createBoard } from '@wixc3/react-board';
import { createRemixStub } from '@remix-run/testing';
import App from 'app/root';
import HomePage from 'app/routes/_index/route';
import AboutPage from 'app/routes/about/route';

const AppWrapper = createRemixStub([
    {
        Component: () => {
            return <App />;
        },
        children: [
            {
                path: '/',
                Component: HomePage,
            },
            {
                path: '/about',
                Component: AboutPage,
            },
        ],
    },
]);

export default createBoard({
    name: 'App',
    Board: () => <AppWrapper />,
});
