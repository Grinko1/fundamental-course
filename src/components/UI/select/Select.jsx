import style from './Select.module.css';

const Select = ({ options, defaultValue , value, onChange}) => {
  return (
    <select
    value={value}
    onChange={e => onChange(e.target.value)}
    >
      <option disabled value="">{defaultValue}</option>
      {options.map((item) => (
        <option value={item.value} key={item.value}>{item.name}</option>
      ))}
    </select>
  );
};

export default Select;
