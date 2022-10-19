import {
  Autocomplete,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { Options } from 'models';
import { Control, useController } from 'react-hook-form';

interface SelectFieldSearchProps {
  name: string;
  control: Control<any>;
  size?: 'medium' | 'small';
  label?: string;
  disabled?: boolean;
  options: Options[];
  setValue: any;
}

export default function SelectFieldSearch({
  name,
  control,
  label,
  disabled,
  options,
  setValue,
  size,
}: SelectFieldSearchProps) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });
  const handelOnChanges = (e: any, value: any) => {
    setValue(name, value, {
      shouldDirty: true,
    });
  };
  return (
    <FormControl
      variant="outlined"
      fullWidth
      disabled={disabled}
      margin="normal"
      component="fieldset"
      error={invalid}
      size={size === undefined ? 'small' : size}
      style={{ marginTop: '0px', marginBottom: '0px' }}
    >
      <Autocomplete
        key={`${name}_label`}
        onChange={handelOnChanges}
        onBlur={onBlur}
        value={value === 0 ? '' : value}
        size={size === undefined ? 'small' : size}
        renderInput={(params) => <TextField {...params} label={label} />}
        options={options.map((option) => option.name)}
        isOptionEqualToValue={(option, value) => option.id === value.id}
      />
      {/* {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))} */}

      {Boolean(error?.message) && <FormHelperText>{error?.message}</FormHelperText>}
    </FormControl>
  );
}
