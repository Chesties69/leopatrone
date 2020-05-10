import React from 'react';
import styles from './Contact.module.scss';
import classnames from 'classnames';
import { TODAY } from 'utils/constants';

const NAME = 'name';
const EMAIL = 'email';
const DATE = 'date';
const PHONE = 'phone';
const LOCATION = 'location';
const REFERRAL = 'referral';
const MESSAGE = 'message';

function getBlankState() {
  return {
    [NAME]: '',
    [EMAIL]: '',
    [DATE]: '',
    [PHONE]: '',
    [LOCATION]: '',
    [REFERRAL]: '',
    [MESSAGE]: '',
  };
}

export default class Contact extends React.Component {
  state = getBlankState();

  render() {
    return (
      <div className={styles.root}>
        <form className={styles.form}>
          <label className={styles.label}>
            <div className={styles.labelText}>name</div>
            <input
              className={styles.input}
              onChange={this._onChange.bind(this, NAME)}
              placeholder="required"
              required
              type="text"
              value={this.state[NAME]}
            />
          </label>

          <label className={styles.label}>
            <div className={styles.labelText}>email</div>
            <input
              className={styles.input}
              onChange={this._onChange.bind(this, EMAIL)}
              placeholder="required"
              required
              type="email"
              value={this.state[EMAIL]}
            />
          </label>

          <label className={styles.label}>
            <div className={styles.labelText}>phone</div>
            <input
              className={styles.input}
              onChange={this._onChange.bind(this, PHONE)}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="000-000-0000"
              type="tel"
              value={this.state[PHONE]}
            />
          </label>

          <label className={styles.label}>
            <div className={styles.labelText}>event date</div>
            <input
              className={styles.input}
              onChange={this._onChange.bind(this, DATE)}
              min={TODAY}
              required
              type="date"
              value={this.state[DATE]}
            />
          </label>

          <label className={styles.label}>
            <div className={styles.labelText}>event location</div>
            <input
              className={styles.input}
              onChange={this._onChange.bind(this, LOCATION)}
              placeholder="required"
              required
              type="text"
              value={this.state[LOCATION]}
            />
          </label>

          <label className={styles.label}>
            <div className={styles.labelText}>referred by</div>
            <input
              className={styles.input}
              onChange={this._onChange.bind(this, REFERRAL)}
              type="text"
              value={this.state[REFERRAL]}
            />
          </label>
          <label className={classnames(styles.label, styles.full)}>
            <div className={styles.labelText}>message</div>
            <textarea
              className={styles.textarea}
              onChange={this._onChange.bind(this, MESSAGE)}
              value={this.state[MESSAGE]}
            />
          </label>
          <button className={styles.submit} onClick={this._onClick} type="submit">
            submit
          </button>
        </form>
      </div>
    );
  }

  _onChange(key, evt) {
    this.setState({ [key]: evt.target.value });
  }

  _onClick = (evt) => {
    evt.preventDefault();
    this.setState(getBlankState());
  };
}
