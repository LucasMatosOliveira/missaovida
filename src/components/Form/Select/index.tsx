import { useId } from "react";
import { MultiValue, SingleValue, Theme } from "react-select";
import ReactSelect from "react-select";

export function Select({ options, value, onChange, isMulti }: SelectProps) {

  const theme = (theme: Theme) => ({
    ...theme,
    spacing: {
      ...theme.spacing,
      controlHeight: 26,
      baseUnit: 0,
    },
  });
  const styles = {
    control: (baseStyles: any) => ({
      ...baseStyles,
      borderLeft: 'none',
      borderTop: "none",
      borderRight: 'none',
      paddingTop: '2px',
    }),
    multiValue: (styles: any) => ({
      ...styles,
      paddingLeft: '5px',
      width: '60px',
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: '#c7e7ff',
      //marginTop: '2px',
      marginBottom: '2px',
      marginLeft: '3px'
    }),
    multiValueLabel: (styles: any) => ({
      ...styles,
      width: '50%',
      color: '#008efa'
    }),
    multiValueRemove: (styles: any) => ({
      ...styles,
      height: '21px',
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: '5px',
      width: '40%',
      color: '#008efa',
      ':hover': {
        backgroundColor: '#028ffa',
        color: 'white'
      }
    })
  };
  const handleChange = (option: MultiValue<SelectItem> | SingleValue<SelectItem>) => {
    if (CheckOptionType(option)) {
      onChange(option?.value);
    } else {
      onChange(option.map(item => item.value));
    }
  }
  const selectedOption = Array.isArray(value)
    ? options.filter(option => value.includes(option.value))
    : options.find(option => option.value === value);
  return (
    <ReactSelect onChange={handleChange} value={selectedOption} theme={theme} styles={styles} options={options} instanceId={useId()} isMulti={isMulti} />
  );
}

export interface SelectProps {
  options: SelectItem[];
  value: string | string[];
  onChange: (value: string | string[] | undefined) => void;
  isMulti?: boolean;
}

export interface SelectItem {
  value: string;
  label: string;
}

function CheckOptionType(option: MultiValue<SelectItem> | SingleValue<SelectItem>): option is SingleValue<SelectItem> {
  return (option as SingleValue<SelectItem>)?.value != undefined;
}