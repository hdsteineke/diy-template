import classNames from 'classnames';
import styles from './FormControls.css';
import { Children, cloneElement, forwardRef } from 'react';

function FormControl({
  label,
  children,
  className: customClassName,
}) {
  const className = classNames(styles.FormControl, customClassName);

  return (
    <label className={className}>
      <LabelText text={label} />
      {children}
    </label>
  );
}

function LabelText({ text, as: Tag = 'span' }) {
  if (!text) return null;

  const className = classNames(styles.Label, 'label-text');
  return <Tag className={className}>{text}</Tag>;
}

//allows for easy customization of different option types (options of options!)
function Option({ text, type, ...rest }) {
  return (
    <label>
      <input type={type} {...rest} />
      {text}
    </label>
  );
}


export function CheckboxOption(props) {
  return <Option type="checkbox" {...props} />;
}

export function RadioOption(props) {
  return <Option type="radio" {...props} />;
}


export function CheckboxControl({ label, ...rest }) {
  return (
    <div className={styles.FormControl}>
      <LabelText text={label} />
      <CheckboxOption {...rest} />
    </div>
  );
}

//?? maybe a way of keeping formatting consistent across options?
export function OptionGroupControl({
  label,
  name,
  onChange,
  children,
}) {
  return(
    <div>
      <fieldset>
        <LabelText text={label} as="legend" />
        <div>
          {Children.map(children, (child) =>
            cloneElement(child, { name, onChange })
          )}
        </div>
      </fieldset>
    </div>
  );
}

const verifyValue = (props) => {
  if (Object.prototype.hasOwnProperty.call(props, 'value'))
    props.value = props.value ?? '';
};


//?? What is going on here with forwardRef?
export const InputControl = forwardRef((props, ref) => {
  const { label, className, children, ...rest } = props;
  verifyValue(rest);

  return (
    <FormControl label={label} className={className}>
      <input ref={ref} {...rest} />
      {children}
    </FormControl>
  );
}
);

InputControl.displayName = 'InputControl';


export const SelectControl = forwardRef((props, ref) => {
  const { label, children, ...rest } = props;
  verifyValue(rest);

  return (
    <FormControl label={label}>
      <select ref={ref} {...rest}>
        {children}
      </select>
    </FormControl>
  );
});

SelectControl.displayName = 'SelectControl';

export const TextAreaControl = forwardRef((props, ref) => {
  const { label, ...rest } = props;
  verifyValue(rest);

  return (
    <FormControl label={label}>
      <textarea ref={ref} {...rest}></textarea>
    </FormControl>
  );
});

TextAreaControl.displayName = 'TextAreaControl';

export function FormButton({
  children,
  icon = false,
  className: customClassName,
  ...rest
}) {
  const className = classNames(styles.FormButton, customClassName, {
    [styles.Icon]: icon,
  });

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}


export function FormButtonControl(props) {
  return <FormButton className={styles.FormControl} {...props} />;
}

export function Fieldset({ legend, children }) {
  return (
    <fieldset className={styles.Fieldset}>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
}
