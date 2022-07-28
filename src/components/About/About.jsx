import {
  InputControl,
  SelectControl,
  TextAreaControl,
  CheckboxControl,
  FormButton,
  Fieldset,
} from '../Forms/FormControls.jsx';

import styles from './About.css';

export default function About() {
  return (
    <section className={styles.About}>
      Some text here...
      <form>
        <Fieldset legend="Credentials">
          <InputControl
            label="email"
            name="email"
            placeholder="enter your email"
            type="email"
            required
          />

          <InputControl
            className={styles.PasswordControl}
            label="password"
            name="password"
            placeholder="choose a password"
            type="password"
            required
          />
        </Fieldset>

        <SelectControl label="type">
          <option>Easy</option>
          <option>Breezy</option>
          <option>Beautiful</option>
        </SelectControl>

        <CheckboxControl label="Easy Mode?" text="Yes" />

        <TextAreaControl
          label="bio"
          placeholder="tell me your favorite story"
        />

        <FormButton>Submit</FormButton>
      </form>
    </section>
  );
}
