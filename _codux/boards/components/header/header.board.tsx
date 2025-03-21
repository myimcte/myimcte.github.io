import { createBoard } from '@wixc3/react-board';
import ComponentWrapper from '_codux/board-wrappers/component-wrapper';
import { Header } from '~/components/header/header';

export default createBoard({
    name: 'Header',
    Board: () => (
        <ComponentWrapper>
            <Header />
        </ComponentWrapper>
    ),
});
