import React from "react";
import FormInputGroup from "../../components/form/forminputgroup";

function Address({ formData, setFormData }) {
  return (
    <form>
      <FormInputGroup
        label="Город, Район"
        value={formData.street}
        onChange={(e) => setFormData({ ...formData, street: e.target.value })}
      />{" "}
      <FormInputGroup
        label="Улица дом"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
      <FormInputGroup
        label="Почта индекс"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
    </form>
  );
}

export default Address;
