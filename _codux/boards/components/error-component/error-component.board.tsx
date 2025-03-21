import { ErrorComponent } from '~/components/error-component/error-component';
import { createBoard } from '@wixc3/react-board';
import ComponentWrapper from '_codux/board-wrappers/component-wrapper';

export default createBoard({
    name: 'ErrorComponent',
    Board: () => (
        <ComponentWrapper>
            <ErrorComponent
                title="Page Not Found"
                message="Looks like the page you're trying to visit doesn't exist"
            />
        </ComponentWrapper>
    ),
    environmentProps: {
        windowHeight: 220,
    },
});
