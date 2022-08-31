import '../../ui/button/button.scss'
import './search.scss'

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string,
  exampleRequired: string,
};

export default function Search() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);


  console.log(watch("example")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className='search' onSubmit={handleSubmit(onSubmit)}>
      <input className='search__input' placeholder='What would you like to do?'  {...register("example")} />
      <input className='search__submit button primary' type="submit" />
    </form>
  );
}
