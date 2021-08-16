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
          <div className="flex flex-col justify-center items-center content-center ">
            <div className="flex justify-center">
              <h1 className="font-black	text-2xl mt-6 flex text-blue-700 ">
                <img className="mr-4 h-8 w-8" src="logowurkspace.png"></img>WurkSpace
              </h1>
            </div>
            <h2 className="font-semibold text-l mt-6">Welcome</h2>
            <h3 className="font-normal text-l mt-4">Log in to wurkspace to continue.</h3>
            <button type="submit" className="w-4/5 bg-red-500 text-white p-2 rounded-lg m-4">
              {" "}
              <a href="/api/auth/google">Continue with Google</a>
            </button>
          </div>
        </Form>
      </div>
    </div>
    //</div>
  )
}

export default LoginForm
