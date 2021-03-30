import React, { Component } from 'react';

import { v4 as uuid } from 'uuid';

import s from './Form.module.scss'
const INITIAL_STATE = {
    name: '',
    phone: '',
}
class ContactForm extends Component {
    state = {
        ...INITIAL_STATE
    }
    handleChangeForm = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    }
    handleFormSubmit = (e) => {
        e.preventDefault();
        const { name, phone } = this.state;
        const { onAdd } = this.props;
        const isValidationForm = this.validationForm();
        if (!isValidationForm) return
        onAdd({ id: uuid(), name, phone });
        this.resetForm();
    }
    validationForm = () => {
        const { name, phone } = this.state;
        const { onCheckUnique } = this.props;
        if (!name || !phone) {
            alert('Some field is empty');
            return false;
        }
        return onCheckUnique(name);
    }
    resetForm = () => this.setState(INITIAL_STATE)
    render() {
        const { name, phone } = this.state;
        return (
            <>
                <h2 className={s.title}>Contact Form</h2>
                <form className={s.contact_form} onSubmit={this.handleFormSubmit}>
                    <input className={s.contact_input} type="text" name='name' placeholder='Enter name' value={name} onChange={this.handleChangeForm} />
                    <input className={s.contact_input} type="tel" name='phone' placeholder='Enter phone number' value={phone} onChange={this.handleChangeForm} />
                    <button className={s.contact_input} type='submit'>Add contact</button>
                </form>
            </>
        )
    }
};

export default ContactForm;