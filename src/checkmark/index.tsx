import styles from './index.module.scss';

interface Props {
  readonly checked: boolean;
  readonly [propName: string]: any;
}

export default function AnimatedCheckmark(props: Props) {
  return (
    <svg
      {...props}
      className={
        styles.checkmark +
        (props.className ? ' ' + props.className : '') +
        (props.checked ? ' ' + styles.checkmarkChecked : '')
      }
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 52 52'
    >
      <circle
        className={styles.checkmarkCircle}
        cx='26'
        cy='26'
        r='25'
        fill='none'
      />
      <path
        className={styles.checkmarkCheck}
        fill='none'
        d='M14.1 27.2l7.1 7.2 16.7-16.8'
      />
    </svg>
  );
}
