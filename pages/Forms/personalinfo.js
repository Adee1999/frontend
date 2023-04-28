import React from "react";
import FormInputGroup from "../../components/form/forminputgroup";
function PersonalInfo({ formData, setFormData }) {
  return (
    <>
     
      <FormInputGroup
        label="Whatsapp номер"
        type="text"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
      <FormInputGroup
        label="email"
        type="text"
        value={formData.userName}
        onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
      />
    </>
  );
}

export default PersonalInfo;
