import {useForm} from "react-hook-form";
import "./_newFormStyle.scss";

function NewForm () {
    const { handleSubmit, register, formState: {errors} } = useForm();

    function OnSubmit(values) {
        console.log(values);
    }
    
    return (
    <>
    <div className="text-wrapper">
      <h2>wellcome!</h2>
      <p>We're happy to inform you of our latest updates!</p>
    </div>
    <div className="form-wrapper">
      <form onSubmit={handleSubmit(OnSubmit)}>
        <div className="form-item">
          <input
          className = {errors.name ? 'error' : ''}
          type = "text"
          placeholder="Enter your full name"
          {...register("name", {
            required: "Required",
            pattern :{
                value: /^[a-z ,.'-]+$/i,
                message: "Invalid characters"
            }
          })}
          />
          <p className="error-mesage">{errors.name && errors.name.message}</p>
        </div>
        <div className="form-item">
          <input
          className = {errors.email ? 'error' : ''}
          type = "email"
          placeholder="Enter your email address"
          {...register("email", {
            required: "Required",
            pattern :{
                value: "^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_`\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$",
                message: "Invalid characters"
            }
          })}
          />
          <p className="error-mesage">{errors.email && errors.email.message}</p>
        </div>
        <div className="form-item">
          <input
          className = {errors.number ? 'error' : ''}
          type = "phone number"
          placeholder="Enter your phone number"
          {...register("number", {
            required: "Required",
            pattern :{
                value: "[1-9][0-9]*|0",
                message: "Invalid characters"
            }
          })}
          />
          <p className="error-mesage">{errors.number && errors.number.message}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
    )
}

export default NewForm