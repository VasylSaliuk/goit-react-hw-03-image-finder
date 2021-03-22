import React, { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import styles from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    value: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleInputChange = evt => {
    const { value } = evt.currentTarget;

    this.setState({
      value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.value.trim() === '') {
      toast.error('You entered an empty request');
      return;
    }

    this.props.onSubmit(this.state.value);

    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles['SearchForm-button']}>
            <span className={styles['SearchForm-button-label']}>Search</span>
          </button>

          <input
            className={styles['SearchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}
