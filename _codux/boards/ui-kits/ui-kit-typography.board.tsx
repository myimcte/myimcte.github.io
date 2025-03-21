import { createBoard, Variant } from '@wixc3/react-board';
import styles from '../../../src/styles/ui-kit-typography.module.scss';
import classNames from 'classnames';

export default createBoard({
    name: 'UI Kit - Typography',
    Board: () => (
        <div className={styles.container}>
            <div>
                <span className={styles.uikit}>UI Kit</span>
                <span className={styles.foundation}> | Foundation</span>
                <hr className={styles.hrSolid} />
                <h3 className={styles.sectionTitle}>Typography</h3>
            </div>

            <h4 className={styles.sectionHeader}>HEADING</h4>
            <Variant name="Heading 1">
                <h1 className={styles.heading1}>HEADING 1</h1>
            </Variant>
            <p className={classNames(styles.variantName, styles.headlinesSpacing)}>
                --heading1:<span className={styles.fontDetails}> DM Sans (300) / 4rem / 1.4</span>
            </p>

            <Variant name="Heading 2">
                <h6 className={classNames(styles.heading2)}>Heading 6</h6>
            </Variant>
            <p className={classNames(styles.variantName, styles.headlinesSpacing)}>
                --heading2:<span className={styles.fontDetails}> DM Sans (400) / 1rem / 1.3</span>
            </p>

            <hr className={styles.hrLight} />
            <h4 className={styles.sectionHeader}>PARAGRAPH</h4>

            <Variant name="Paragraph 1">
                <p className={styles.paragraph1}>
                    The quick brown fox jumps over the lazy dog. 0123456789
                </p>
            </Variant>
            <p className={classNames(styles.variantName, styles.paragraphSpacing)}>
                --paragraph1:
                <span className={styles.fontDetails}> DM Sans (300) / 1.3rem / 1.3</span>
            </p>

            <Variant name="Paragraph 2">
                <p className={styles.paragraph2}>
                    The quick brown fox jumps over the lazy dog. 0123456789
                </p>
            </Variant>
            <p className={classNames(styles.variantName, styles.paragraphSpacing)}>
                --paragraph2:<span className={styles.fontDetails}> DM Sans (200) / 1rem / 1.3</span>
            </p>
        </div>
    ),
    isSnippet: true,
    environmentProps: { windowHeight: 600, windowWidth: 320 },
    tags: ['UI Kit'],
});
