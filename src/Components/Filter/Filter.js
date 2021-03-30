import s from './Filter.module.scss';
import PropTypes from 'prop-types';
const Filter = ({ filter, onChange }) => {
    return (
        <div className={s.search_block}>
            <h2 className={s.title}>Contacts list</h2>
            <input
                className={s.contact_input}
                type="text"
                name='filter'
                value={filter}
                onChange={({ target }) => onChange(target.value)}
                placeholder='Enter name for your Search'
            />
        </div>
    )
}
Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
export default Filter;