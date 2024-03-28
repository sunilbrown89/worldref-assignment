/* eslint-disable @next/next/no-img-element */
import { InputField, LoadingButton } from "@/components/core";
import { Field, FieldProps, Form, Formik } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";
import {
  formikProps,
  loginInitialValues,
  loginSchema,
  loginValidationSchema,
  loginValueType,
} from "@/schemas";
import { FiEyeOff, FiLogIn } from "react-icons/fi";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { BsEye } from "react-icons/bs";
import { useTabsStore } from "@/hooks";

export default function AdminLogin() {
  const { push } = useRouter();
  const [setUser, IsSetUser] = useState<any>();
  const [setLogin, IsSetLogin] = useState<any>(false);
  // console.log("setLogin--------->", setLogin);
  const [showPassword, setShowPassword] = useState(false);
  const {
    manageLogin,
    setManageLogin,
    manageUserLoginName,
    setManageUserLoginName,
  } = useTabsStore();
  // const { manageUserLoginName, setManageUserLoginName } = useTabsStore();

  useEffect(() => {
    setManageLogin(manageLogin);
    setManageUserLoginName(manageUserLoginName);
  }, [
    manageLogin,
    setManageLogin,
    manageUserLoginName,
    setManageUserLoginName,
  ]);
  const handleNewsOperation = async (
    values: loginValueType,
    props: formikProps
  ) => {
    try {
      if (
        values.name !== "sunil" ||
        values.email !== "sunil@sahu.com" ||
        values.password !== "sunil@sahu.com"
      ) {
        throw new Error("Invalid credentials!");
      }

      IsSetUser({
        // Hardcoded user data
        id: "hardcodedUserId",
        name: values.name,
        role: "admin",
        email: values.email,
        password: values.password,
      });
      IsSetLogin(true);
      setManageLogin(true);
      setManageUserLoginName(values.name);
      push(`/`);
      // push(`/?success=${setLogin ? false : true}`);
      Swal.fire("Success", "Login successful", "success");
    } catch (error: unknown) {
      // toast.error("Enter valid credentials");
      Swal.fire("Error", "Enter valid credentials", "error");
    }
  };

  return (
    <section className="w-full bg-[url('/home/feature-bg.png')] bg-cover bg-no-repeat flex flex-col justify-center items-center px-3 bg-light md:bg-light h-screen">
      <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-xl md:rounded-3xl p-3 2xl:w-3/5 min-[1800px]:w-[55%] items-center  md:w-4/5 gap-6 md:gap-0">
        <div className="w-full h-full hidden md:flex items-center justify-center bg-light md:bg-orange-200 rounded-[0.75rem]">
          <img src="/login/login-bg.png" alt="" className="w-full h-full" />
        </div>
        <div className="flex flex-col py-8 px-1 md:p-6 w-full gap-4 md:gap-12 lg:gap-8">
          <div className="flex flex-col">
            <h1 className="text-theme-blue-dark text-2xl md:text-3xl font-semibold leading-4 md:leading-6">
              Welcome Back !
            </h1>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <Formik
              initialValues={loginInitialValues}
              validationSchema={Yup.object(loginValidationSchema)}
              onSubmit={handleNewsOperation}
              enableReinitialize={true}
            >
              {(formik) => (
                <Form className="w-full grid grid-cols-12 gap-3 md:gap-4">
                  {loginSchema.map((inputItem) => (
                    <Field name={inputItem.name} key={inputItem.key}>
                      {(props: FieldProps<string>) => (
                        <div
                          className={`flex flex-col justify-center gap-2 ${inputItem.className}`}
                        >
                          <div className="text-sm">{inputItem.label}</div>
                          <div className="col-span-6 w-full relative">
                            {/* Step 2: Add Show/Hide Password button */}
                            <InputField
                              fullWidth
                              key={inputItem?.key}
                              placeholder={inputItem.placeholder}
                              id={inputItem?.key}
                              name={inputItem?.name}
                              type={
                                inputItem?.type &&
                                inputItem?.type === "password"
                                  ? showPassword
                                    ? "text"
                                    : "password"
                                  : "none"
                              }
                              value={formik?.values[inputItem?.name]}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={Boolean(
                                formik?.touched[inputItem?.name] &&
                                  formik?.errors[inputItem?.name]
                              )}
                              helperText={
                                formik?.touched[inputItem?.name] &&
                                formik?.errors[inputItem?.name]
                              }
                            />

                            {/* Show/Hide Password button */}
                            {inputItem?.type === "password" && (
                              <button
                                type="button"
                                className="absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? <BsEye /> : <FiEyeOff />}
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                    </Field>
                  ))}
                  <div className="flex items-center col-span-12 justify-center flex-col gap-2 pt-2">
                    <LoadingButton
                      type="submit"
                      sx="w-full bg-primary text-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] h-10 flex items-center justify-center"
                      disabled={formik.isSubmitting || formik.isValidating}
                      // loading={isLoading}
                      circularProgressClass="loading-sm text-secondary"
                    >
                      <div className="flex items-center gap-2">
                        <FiLogIn />
                        {formik.isSubmitting ? "Submitting..." : "Login"}
                      </div>
                    </LoadingButton>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
