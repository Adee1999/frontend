import React from "react";
import FormInputGroup from "../../components/form/forminputgroup";
function PersonalInfo({ formData, setFormData }) {
  return (
    <form>
     <FormInputGroup
        label="Имя"
        type="text"
        value={formData.firstName}
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
      />{" "}
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
     
    </form>
  );
}

export default PersonalInfo;
