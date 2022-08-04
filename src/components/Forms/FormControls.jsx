import classNames from 'classnames';
import styles from './FormControls.css';
import { Children, cloneElement, forwardRef } from 'react';

function FormControl({
  label,
  children,
  className: customClassName,
}) {
  const className = classNames(
    styles.FormControl,
    customClassName
  );

  return (
    <label className={className}>
      <Label text={label} />
      {children}
    </label>
  );
}

function Label({ text }) {
  if (!text) return null;

  return <span className="label-text">{text}</span>;
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
      <Label text={label} />
      <CheckboxOption {...rest} />
    </div>
  );
}

//?? maybe a way of keeping formatting consistent across options?
export function OptionGroupControl({
  label,
  name,
  children,
}) {
  return(
    <div>
      <fieldset>
        <Label text={label} as="legend" />
        <div>
          {Children.map(children, (child) =>
            cloneElement(child, { name })
          )}
        </div>
      </fieldset>
    </div>
  );
}

//?? What is going on here with forwardRef?
export const InputControl = forwardRef(
  ({ label, className, value, ...rest }, ref) => {
    return (
      <FormControl label={label} className={className}>
        <input ref={ref} value={value || ''} {...rest} />
      </FormControl>
    );
  }
);

InputControl.displayName = 'InputControl';


export function SelectControl({
  label,
  children,
  value,
  ...rest
}) {
  return (
    <FormControl label={label}>
      <select value={value || ''} {...rest}>
        {children}
      </select>
    </FormControl>
  );
}

export function TextAreaControl({ label, ...rest }) {
  return (
    <FormControl label={label}>
      <textarea {...rest}></textarea>
    </FormControl>
  );
}

export function FormButton({ children, ...rest }) {
  return (
    <button className={styles.FormButton} {...rest}>
      {children}
    </button>
  );
}


export function FormButtonControl(props) {
  return <FormButton {...props} />;
}

export function Fieldset({ legend, children }) {
  return (
    <fieldset className={styles.Fieldset}>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
}
