import './registerForm.scss';
import { useForm, SubmitHandler } from "react-hook-form";
import Button from '../button/Button';

interface IFormInput {
  mail: string;
  password: string;
}

export default function RegisterForm() {
  const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  return (
    <form className='register' onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2 className='register__title'>Log in to your account</h2>
      </div>
      <div className='register__with-social'>
        <Button title='Sign In with Facebook ' bg_img='facebook' style_type='signInWith' />
        <Button title='Sign In with Google' bg_img='google' style_type='signInWith' />
      </div>
      <div className='register__divider'><span>or</span></div>
      <div>
        <label>E-mail</label>
        <input className='register__input' type='mail' {...register("mail", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
        <p className='register__error-msg'>
          {errors.mail && "Email is required and must contain the @ symbol"}
        </p>

      </div>
      <div>
        <label>Password</label>
        <input className='register__input' type='password' {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/ })} />
        <p className='register__error-msg'>
          {errors.password && "Password is required and and must contain between 8 and 16 characters containing at least one lowercase letter, one uppercase letter, one numeric value, and at least one special character(!@#$%^&*=+-_)"}
        </p>

        <input className='register__submit button primary' type="Submit" value='Sign In' />
      </div>

    </form>
  );
}