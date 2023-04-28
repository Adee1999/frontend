import React from "react";
import FormInputGroup from "../../components/form/forminputgroup";

function Address({ formData, setFormData }) {
  return (
    <>
      <FormInputGroup
        type="text"
        label="Город, Район"
        value={formData.street}
        onChange={(e) => setFormData({ ...formData, street: e.target.value })}
      />{" "}
      <FormInputGroup
        type="text"
        label="Улица дом"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
      <FormInputGroup
        type="text"
        label="Почта индекс"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
    </>
  );
}

export default Address;