import React, { useState } from "react";
import SingUp from "../../pages/Forms/signup";
import PersonalInfo from "../../pages/Forms/personalinfo";
import Address from "../../pages/Forms/adress";
import Button from "../form/button";
import Welcome from "../../pages/Forms/welcome";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: ``,
    password: ``,
    confirmPassword: ``,
    firstName: ``,
    lastName: ``,
    userName: ``,
    street: ``,
    city: ``,
  });
  const FormTitle = ["", "Ваш данный", "Адресс", "Done"];

  const PageDisplay = () => {
    if (page === 0) {
      //   console.log(page);
      return <SingUp formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      //   console.log(page);
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      //   console.log(page);
      return <Address formData={formData} setFormData={setFormData} />;
    } else {
      //   console.log(page);

      return <Welcome formData={formData} />;
    }
  };
  return (
    <main
      className="container shadow p-5 mt-5 rounded-3"
      style={{ maxWidth: 500 }}
    >
      <div className="progress-bar shadow bg-secondary rounded-7">
        <div
          className="div"
          style={{
            width:
              page === 0
                ? "1%"
                : page === 1
                ? "33.3%"
                : page === 2
                ? "66.6%"
                : "100%",
            backgroundColor: page === 3 ? "green" : "var(--purple)",
          }}
        ></div>
      </div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1
          className={`"display-2" ${
            page === 3 ? "text-success" : "text-purple"
          }`}
        >
          {FormTitle[page]}
        </h1>
        <div className="block text-gray-700 text-sm font-bold mb-2">{PageDisplay()}</div>
        <div className="w-full py-3 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center">
          {page !== 0 && page !== 3 ? (
            <Button
              text="Назад"
              color="dark me-3"
              onClick={(e) => {
                e.preventDefault();
                setPage((currPage) => currPage - 1);
              }}
            />
          ) : null}
          <Button
            text={page !== 3 ? "Оформить заказ" : "Whatsapp PDF"}
            color={page !== 3 ? "purple" : "success"}
            onClick={(e) => {
              e.preventDefault();
              if (page === FormTitle.length - 1) {
                //console.log(formData);
                //window.alert("Are you done with the registration");
                
                window.print();
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          />
        </div>
      </form>
    </main>
  );
}

export default Form;
