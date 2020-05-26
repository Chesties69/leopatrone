import React from 'react';
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

export default class Contact extends React.Component {
  state = {
    input: { ...BLANK_INPUT },
    submissionStatus: null,
    displayRequired: false,
  };

  _nameNode = React.createRef();
  _emailNode = React.createRef();
  _dateNode = React.createRef();
  _locationNode = React.createRef();

  render() {
    const { displayRequired, input, submissionStatus } = this.state;

    let submittingNode;
    switch (submissionStatus) {
      case SUBMITTING:
        submittingNode = <div className={styles.submitting}>Submitting...</div>;
        break;
      case SUCCESS:
        submittingNode = (
          <div className={styles.submitting}>
            Thank you for your inquiry. I will respond shortly.
          </div>
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

    if (submissionStatus === SUBMITTING) {
      submittingNode = <div className={styles.submitting}>submitting...</div>;
    }

    return (
      <form className={styles.root}>
        <label className={styles.label}>
          <div className={styles.labelText}>name</div>
          <input
            className={classnames(styles.input, displayRequired && styles.displayRequired)}
            name="name"
            onChange={this._onChange.bind(this, NAME)}
            placeholder={REQUIRED}
            ref={this._nameNode}
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
            onChange={this._onChange.bind(this, EMAIL)}
            placeholder={REQUIRED}
            ref={this._emailNode}
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
            onChange={this._onChange.bind(this, PHONE)}
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
            onChange={this._onChange.bind(this, DATE)}
            min={TODAY_AS_MIN}
            ref={this._dateNode}
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
            onChange={this._onChange.bind(this, LOCATION)}
            placeholder={REQUIRED}
            ref={this._locationNode}
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
            onChange={this._onChange.bind(this, REFERRAL)}
            type="text"
            value={input[REFERRAL]}
          />
        </label>

        <label className={classnames(styles.label, styles.full)}>
          <div className={styles.labelText}>message</div>
          <textarea
            className={styles.textarea}
            name="message"
            onChange={this._onChange.bind(this, MESSAGE)}
            value={input[MESSAGE]}
          />
        </label>

        <button className={styles.submit} onClick={this._onClick} type="submit">
          submit
        </button>

        {submittingNode}
      </form>
    );
  }

  _onChange(key, evt) {
    const { input, submissionStatus } = this.state;
    if (submissionStatus) {
      return;
    }
    this.setState({
      input: {
        ...input,
        [key]: evt.target.value,
      },
    });
  }

  _onClick = (evt) => {
    evt.preventDefault();
    const { submissionStatus } = this.state;
    if (submissionStatus) {
      return;
    }

    if (
      !this._nameNode.current.checkValidity() ||
      !this._emailNode.current.checkValidity() ||
      !this._dateNode.current.checkValidity() ||
      !this._locationNode.current.checkValidity()
    ) {
      this.setState({ displayRequired: true });
      return;
    }

    new Promise((resolve, fail) => {
      this.setState({ submissionStatus: SUBMITTING });

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
        this.setState({ submissionStatus: SUCCESS });
        setTimeout(() => {
          this.setState({
            displayRequired: false,
            input: { ...BLANK_INPUT },
            submissionStatus: null,
          });
        }, 3000);
      })
      .catch(() => {
        this.setState({ submissionStatus: FAIL });
      });
  };
}
