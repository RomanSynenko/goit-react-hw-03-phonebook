import s from './List.module.scss';
import PropTypes from 'prop-types'


const ContactListItem = ({ id, name, phone, onRemove }) => {
    return (
        <li className={s.contact_item}>
            <p className={s.contact_name}>{name} </p> :
            <p>{phone}</p>
            <button className={s.delete_button} onClick={() => onRemove(id)}>Delete</button>
        </li>
    )
};
const ContactList = ({ contacts, onRemove }) => {
    if (contacts.length === 0) return null

    return (
        <ul className={s.contact_list}>
            {
                contacts.map((contact) => <ContactListItem key={contact} {...contact} onRemove={onRemove} />
                )
            }
        </ul>
    )
}
ContactListItem.propTypes = {
    contacts: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired,
};
ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
};
export default ContactList;