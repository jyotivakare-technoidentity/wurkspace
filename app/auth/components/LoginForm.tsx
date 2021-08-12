import { AuthenticationError, Link, useMutation, Routes } from "blitz"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/core/components/Form"
import login from "app/auth/mutations/login"
import { Login } from "app/auth/validations"

type LoginFormProps = {
  onSuccess?: () => void
}

export const LoginForm = (props: LoginFormProps) => {
  const [loginMutation] = useMutation(login)

  return (
    //<div className = "flex justify-end 	items-center h-screen mr-20" >
    <div className="shadow-2xl w-1/3 rounded-xl ml-40 mt-20 ">
      <div className="ml-8 m-2">
        <Form
          submitText=""
          schema={Login}
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values) => {
            try {
              await loginMutation(values)
              props.onSuccess?.()
            } catch (error) {
              if (error instanceof AuthenticationError) {
                return { [FORM_ERROR]: "Sorry, those credentials are invalid" }
              } else {
                return {
                  [FORM_ERROR]:
                    "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
                }
              }
            }
          }}
        >
          <button type="submit" className="w-1/3 bg-red-500 text-white p-1.5	rounded-lg m-4 ">
            {" "}
            <a href="/api/auth/google">Google</a>
          </button>
        </Form>
      </div>
    </div>
    //</div>
  )
}

export default LoginForm
