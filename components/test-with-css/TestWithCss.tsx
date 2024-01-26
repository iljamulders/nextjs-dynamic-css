import styles from './TestWithCss.module.scss'

export default function TestWithCss() {
    return (
      <div className={styles.background}>
        <p>
          In the pages router the css is loaded as soon as possible: correct <br />
          In the app router the css is loaded way to late: incorrect
        </p>
        <p>
          This leads to <a href="https://web.dev/articles/cls">Cumulative Layout Shift (CLS)</a> and an ugly website
        </p>
      </div>
    );
  }
  