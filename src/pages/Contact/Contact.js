import { useState, useRef } from 'react';
import styles from './Contact.module.scss';
import classnames from 'classnames';
import { LEO_EMAIL, TODAY } from 'utils/constants';
import { prepend } from '@danehansen/format';

const NAME = 'name';
const EMAIL = 'email';
const DATE = 'date';
const PHONE = 'phone';
const LOCATION = 'location';
const REFERRAL = 'referral';
const MESSAGE = 'message';
const REQUIRED = '(Required)';
const SUBMITTING = 'submitting';
const SUCCESS = 'success';
const FAIL = 'fail';
const TODAY_AS_MIN = `${TODAY.getFullYear()}-${prepend(TODAY.getMonth() + 1, 2)}-${prepend(
  TODAY.getDate(),
  2,
)}`;
const BLANK_INPUT = {
  [NAME]: '',
  [EMAIL]: '',
  [DATE]: '',
  [PHONE]: '',
  [LOCATION]: '',
  [REFERRAL]: '',
  [MESSAGE]: '',
};

export default function Contact() {
  const nameNode = useRef();
  const emailNode = useRef();
  const dateNode = useRef();
  const locationNode = useRef();
  const [input, setInput] = useState({ ...BLANK_INPUT });
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [displayRequired, setDisplayRequired] = useState(false);

  function onChange(key, evt) {
    if (submissionStatus) {
      return;
    }

    setInput({
      ...input,
      [key]: evt.target.value,
    });
  }

  function onClick(evt) {
    evt.preventDefault();
    if (submissionStatus) {
      return;
    }

    if (
      !nameNode.current.checkValidity() ||
      !emailNode.current.checkValidity() ||
      !dateNode.current.checkValidity() ||
      !locationNode.current.checkValidity()
    ) {
      setDisplayRequired(true);
      return;
    }

    new Promise((resolve, fail) => {
      setSubmissionStatus(SUBMITTING);

      // start placeholder email code
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve();
        } else {
          fail();
        }
      }, Math.random() * 2000 + 1000);
      // end placeholder email code
    })
      .then(() => {
        setSubmissionStatus(SUCCESS);
        setTimeout(() => {
          setDisplayRequired(false);
          setInput({ ...BLANK_INPUT });
          setSubmissionStatus(null);
        }, 3000);
      })
      .catch(() => {
        setSubmissionStatus(FAIL);
      });
  }

  let submittingNode;
  switch (submissionStatus) {
    case SUBMITTING:
      submittingNode = <div className={styles.submitting}>Submitting...</div>;
      break;
    case SUCCESS:
      submittingNode = (
        <div className={styles.submitting}>Thank you for your inquiry. I will respond shortly.</div>
      );
      break;
    case FAIL:
      submittingNode = (
        <div className={styles.submitting}>
          An error has occured. Please try again another time or email me directly at&nbsp;
          <a href={`mailto:${LEO_EMAIL}`}>{LEO_EMAIL}</a>.
        </div>
      );
      break;
    // no default
  }

  return (
    <form className={styles.root}>
      <label className={styles.label}>
        <div className={styles.labelText}>name</div>
        <input
          className={classnames(styles.input, displayRequired && styles.displayRequired)}
          name="name"
          onChange={onChange.bind(null, NAME)}
          placeholder={REQUIRED}
          ref={nameNode}
          required
          type="text"
          value={input[NAME]}
        />
      </label>

      <label className={styles.label}>
        <div className={styles.labelText}>email</div>
        <input
          className={classnames(styles.input, displayRequired && styles.displayRequired)}
          name="email"
          onChange={onChange.bind(null, EMAIL)}
          placeholder={REQUIRED}
          ref={emailNode}
          required
          type="email"
          value={input[EMAIL]}
        />
      </label>

      <label className={styles.label}>
        <div className={styles.labelText}>phone</div>
        <input
          className={styles.input}
          name="phone"
          onChange={onChange.bind(null, PHONE)}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="000-000-0000"
          type="tel"
          value={input[PHONE]}
        />
      </label>

      <label className={styles.label}>
        <div className={styles.labelText}>event date</div>
        <input
          className={classnames(styles.input, displayRequired && styles.displayRequired)}
          name="event_date"
          onChange={onChange.bind(null, DATE)}
          min={TODAY_AS_MIN}
          ref={dateNode}
          required
          type="date"
          value={input[DATE]}
        />
      </label>

      <label className={styles.label}>
        <div className={styles.labelText}>event location</div>
        <input
          className={classnames(styles.input, displayRequired && styles.displayRequired)}
          name="event_location"
          onChange={onChange.bind(null, LOCATION)}
          placeholder={REQUIRED}
          ref={locationNode}
          required
          type="text"
          value={input[LOCATION]}
        />
      </label>

      <label className={styles.label}>
        <div className={styles.labelText}>referred by</div>
        <input
          className={styles.input}
          name="referred_by"
          onChange={onChange.bind(null, REFERRAL)}
          type="text"
          value={input[REFERRAL]}
        />
      </label>

      <label className={classnames(styles.label, styles.full)}>
        <div className={styles.labelText}>message</div>
        <textarea
          className={styles.textarea}
          name="message"
          onChange={onChange.bind(null, MESSAGE)}
          value={input[MESSAGE]}
        />
      </label>

      <button className={styles.submit} onClick={onClick} type="submit">
        submit
      </button>

      {submittingNode}
    </form>
  );
}
