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
        <h1 className="font-bold ml-4 text-2xl mt-20	">Login</h1>

        <Form
          submitText="Login"
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
          <LabeledTextField
            name="email"
            label=""
            placeholder="Username"
            className=" w-2/3 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white my-2 ml-4"
          />
          <LabeledTextField
            name="password"
            label=""
            placeholder="Password"
            type="password"
            className="w-2/3 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ml-4"
          />
        </Form>
        <div>
          <Link href={Routes.ForgotPasswordPage()}>
            <a className="text-blue-600	m-4">Forgot your password?</a>
          </Link>
        </div>

        <button type="submit" className="w-1/3 bg-red-500 text-white p-1.5	rounded-lg m-4 ">
          {" "}
          Google
        </button>

        <button type="submit" className="w-1/3 bg-purple-500 text-white p-1.5	rounded-lg m-4 ">
          {" "}
          Linkedin
        </button>
      </div>
    </div>
    //</div>
  )
}

export default LoginForm
