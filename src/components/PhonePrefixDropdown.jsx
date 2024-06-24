import { ErrorMessage } from 'formik';
import Select from 'react-select';

const countryCodes = [
  '+237', '+234', '+27', '+212', '+213', '+251', '+255', '+256', '+258', '+260'
];

const PhonePrefixDropdown = () => {
  return (
    <div className="phone-prefix">
      <Select
        options={countryCodes.map(code => ({ value: code, label: code }))}
        placeholder="+598"
        isSearchable={true}
        name="phonePrefix"
        className="basic-multi-select"
        classNamePrefix="select"
        styles={{
            control: (provided, state) => ({
              ...provided,
              borderColor: state.isFocused ? '#6200ee' : '#ccc',
              outline: state.isFocused && 'none',
              height: '47px',
            }),
            option: (provided, state) => ({
                ...provided,
                backgroundColor: state.isSelected ? '#6200ee' : 'white',
            })
          }}
      />
      <ErrorMessage name="phonePrefix" />
    </div>
  );
};

export default PhonePrefixDropdown;