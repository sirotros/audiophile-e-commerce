import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { GoPackage } from "react-icons/go";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import Input from "./Input";
import { useEffect } from "react";

const schema = yup.object({
  name: yup
    .string()
    .required("Field cannot be empty")
    .min(5, "The field must be at least 5 characters"),
  email: yup
    .string()
    .required("Field cannot be empty")
    .email("This field must be in mail format"),
  phoneNumber: yup.number().required("Field cannot be empty"),
  address: yup.string().required("Field cannot be empty"),
  zipCode: yup.number().required("Field cannot be empty"),
  city: yup.string().required("Field cannot be empty"),
  country: yup.string().required("Field cannot be empty"),
  eMoney: yup.number(),
  eMoneyPin: yup.number(),
});

function CheckoutForm({
  form,
  setForm,
  trigger,
  setTrigger,
  paymentUtility,
  toggleModal,
}) {
  const buttonRef = useRef();
  const basketItems = useSelector((state) => state.baskets.baskets);

  const submitForm = () => {
    if (trigger) {
      buttonRef.current.click();
      setTrigger(false);
    }
    if (form === undefined) return;
    paymentUtility(form, basketItems);
    toggleModal();
  };

  useEffect(() => {
    submitForm();
  }, [trigger]);

  const [paymentMethod, setPaymentMethod] = useState("emoney");
  const eMoney = () => {
    setPaymentMethod("emoney");
  };
  const cash = () => {
    setPaymentMethod("cash");
  };

  return (
    <div className="w-8/12  py-10 h-max bg-white">
      <h1 className="font-semibold text-3xl ml-8 my-7">CHECKOUT</h1>
      <h5 className="text-orange font-medium text-sm ml-9">BILLING DETAILS</h5>

      <Formik
        initialValues={{
          name: "",
          email: "",
          phoneNumber: "",
          zipCode: "",
          city: "",
          country: "",
          eMoney: "",
          eMoneyPin: "",
        }}
        validateOnChange={true}
        onSubmit={(values) => {
          setForm(values);
        }}
        validationSchema={schema}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form onSubmit={handleSubmit}>
            <div className="flex justify-around flex-wrap mt-3">
              <Field
                as={Input}
                name="name"
                label="Name"
                error={errors.name}
                placeholder="Alexei Ward"
                onChange={handleChange}
                value={values.name}
              />
              <Field
                as={Input}
                name="email"
                label="Email"
                error={errors.email}
                placeholder="alexei@mail.com"
                onChange={handleChange}
                value={values.email}
              />
            </div>

            <Field
              as={Input}
              name="phoneNumber"
              label="Phone Number"
              error={errors.phoneNumber}
              placeholder="+1 202-555-0136"
              onChange={handleChange}
              value={values.phoneNumber}
              className="ml-9"
            />
            <div className="mt-5">
              <h5 className="text-orange font-medium text-sm ml-9">
                SHIPPING INFO
              </h5>

              <Field
                as={Input}
                name="address"
                label="Your Address"
                error={errors.address}
                placeholder="1137 Williams Avenue"
                onChange={handleChange}
                value={values.address}
                full
              />

              <div className="flex justify-around">
                <Field
                  as={Input}
                  name="zipCode"
                  label="ZIP CODE"
                  error={errors.zipCode}
                  placeholder="10001"
                  onChange={handleChange}
                  value={values.zipCode}
                />

                <Field
                  as={Input}
                  name="city"
                  label="City"
                  error={errors.city}
                  placeholder="New York"
                  onChange={handleChange}
                  value={values.city}
                />
              </div>

              <Field
                as={Input}
                name="country"
                label="Country"
                error={errors.country}
                placeholder="New York"
                onChange={handleChange}
                value={values.country}
                className="ml-9"
              />
            </div>
            <div className="mt-5">
              <h5 className="text-orange font-medium text-sm ml-9">
                PAYMENT DETAILS
              </h5>
              <div className="flex justify-between w-11/12 mx-auto mt-5">
                <h5>Payment Method</h5>
                <div>
                  <div
                    className="border-[1px] border-gray w-64 h-14 px-3 rounded-md flex items-center hover:cursor-pointer"
                    onClick={() => eMoney()}
                  >
                    <input
                      type="radio"
                      id="emoney"
                      onClick={() => eMoney()}
                      checked={paymentMethod === "emoney"}
                      name="payment-method"
                    />
                    <label
                      htmlFor="emoney"
                      className="px-5 hover:cursor-pointer"
                    >
                      E-Money
                    </label>
                  </div>
                  <div
                    className="border-[1px] border-gray w-64 h-14 px-3 mt-5 rounded-md flex items-center hover:cursor-pointer"
                    onClick={() => cash()}
                  >
                    <input
                      type="radio"
                      id="cash"
                      name="payment-method"
                      checked={paymentMethod === "cash"}
                    />
                    <label htmlFor="cash" className="px-5 hover:cursor-pointer">
                      Cash on Delivery
                    </label>
                  </div>
                </div>
              </div>
              <div>
                {paymentMethod === "emoney" ? (
                  <div className="flex justify-around">
                    <Field
                      as={Input}
                      name="eMoney"
                      label="e-Money Number"
                      error={errors.eMoney}
                      placeholder="238521993"
                      onChange={handleChange}
                      value={values.eMoney}
                      className="ml-9"
                    />

                    <Field
                      as={Input}
                      name="eMoneyPin"
                      label="e-Money PIN"
                      error={errors.eMoneyPin}
                      placeholder="238521993"
                      onChange={handleChange}
                      value={values.eMoneyPin}
                      className="ml-9"
                    />
                  </div>
                ) : (
                  <div className="flex justify-evenly items-center mx-auto mt-5 w-11/12">
                    <GoPackage className="text-orange text-4xl" />
                    <p className="w-3/4">
                      The ‘Cash on Delivery’ option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so that your order will
                      not be cancelled.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <button type="submit" className="hidden" ref={buttonRef}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CheckoutForm;
