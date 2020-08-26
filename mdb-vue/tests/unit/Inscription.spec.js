import { shallowMount } from "@vue/test-utils";
import Inscription from "@/views/Inscription.vue";

describe("Inscription.vue", () => {
  it("It tries to send the form when no field are filled and check if the check up those fields work", () => {
    const wrapper = shallowMount(Inscription);
    expect(wrapper.vm.titre).toBe("Inscription");
    wrapper.find("#sendForm").trigger("submit");
    expect(wrapper.vm.titre).toBe("Probleme lors de l'inscription");
  });

  it("It tries to send the form with passwords not matching", () => {
    const wrapper = shallowMount(Inscription);
    expect(wrapper.vm.titre).toBe("Inscription");
    wrapper.setData({
      username: "Test",
      full_name: "Test",
      adresse: "Test",
      ville: "Test",
      code_postal: "777",
      email: "test@hotmail.be",
      pwd: "test",
      confirmPwd: "Different",
    });
    wrapper.find("#sendForm").trigger("submit");
    expect(wrapper.vm.titre).toBe("Probleme lors de l'inscription");
  });

  it("It tries to send the form without a username", () => {
    const wrapper = shallowMount(Inscription);
    expect(wrapper.vm.titre).toBe("Inscription");
    wrapper.setData({
      username: "",
      full_name: "Test",
      adresse: "Test",
      ville: "Test",
      code_postal: "777",
      email: "test@hotmail.be",
      pwd: "test",
      confirmPwd: "test",
    });
    wrapper.find("#sendForm").trigger("submit");
    expect(wrapper.vm.titre).toBe("Probleme lors de l'inscription");
  });

  it("It tries to send the form with no full name", () => {
    const wrapper = shallowMount(Inscription);
    expect(wrapper.vm.titre).toBe("Inscription");
    wrapper.setData({
      username: "Test",
      full_name: "",
      adresse: "Test",
      ville: "Test",
      code_postal: "777",
      email: "test@hotmail.be",
      pwd: "test",
      confirmPwd: "test",
    });
    wrapper.find("#sendForm").trigger("submit");
    expect(wrapper.vm.titre).toBe("Probleme lors de l'inscription");
  });

  it("It tries to send the form with no adress", () => {
    const wrapper = shallowMount(Inscription);
    expect(wrapper.vm.titre).toBe("Inscription");
    wrapper.setData({
      username: "Test",
      full_name: "Test",
      adresse: "",
      ville: "Test",
      code_postal: "777",
      email: "test@hotmail.be",
      pwd: "test",
      confirmPwd: "test",
    });
    wrapper.find("#sendForm").trigger("submit");
    expect(wrapper.vm.titre).toBe("Probleme lors de l'inscription");
  });

  it("It tries to send the form with no ville", () => {
    const wrapper = shallowMount(Inscription);
    expect(wrapper.vm.titre).toBe("Inscription");
    wrapper.setData({
      username: "Test",
      full_name: "Test",
      adresse: "Test",
      ville: "",
      code_postal: "777",
      email: "test@hotmail.be",
      pwd: "test",
      confirmPwd: "test",
    });
    wrapper.find("#sendForm").trigger("submit");
    expect(wrapper.vm.titre).toBe("Probleme lors de l'inscription");
  });

  it("It tries to send the form with no code postal", () => {
    const wrapper = shallowMount(Inscription);
    expect(wrapper.vm.titre).toBe("Inscription");
    wrapper.setData({
      username: "Test",
      full_name: "Test",
      adresse: "Test",
      ville: "Test",
      code_postal: "",
      email: "test@hotmail.be",
      pwd: "test",
      confirmPwd: "test",
    });
    wrapper.find("#sendForm").trigger("submit");
    expect(wrapper.vm.titre).toBe("Probleme lors de l'inscription");
  });
  it("It tries to send the form with no email", () => {
    const wrapper = shallowMount(Inscription);
    expect(wrapper.vm.titre).toBe("Inscription");
    wrapper.setData({
      username: "Test",
      full_name: "Test",
      adresse: "Test",
      ville: "Test",
      code_postal: "777",
      email: "",
      pwd: "test",
      confirmPwd: "test",
    });
    wrapper.find("#sendForm").trigger("submit");
    expect(wrapper.vm.titre).toBe("Probleme lors de l'inscription");
  });
  it("It tries to send the form with a wrong email", () => {
    const wrapper = shallowMount(Inscription);
    expect(wrapper.vm.titre).toBe("Inscription");
    wrapper.setData({
      username: "Test",
      full_name: "Test",
      adresse: "Test",
      ville: "Test",
      code_postal: "777",
      email: "cecinestpasunemail",
      pwd: "test",
      confirmPwd: "test",
    });
    wrapper.find("#sendForm").trigger("submit");
    expect(wrapper.vm.titre).toBe("Probleme lors de l'inscription");
  });
});
