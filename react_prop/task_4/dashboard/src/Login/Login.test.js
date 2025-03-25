import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe("<Login />", () => {
    it("Login renders without any errors", () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.exists()).toEqual(true);
    });

    it("Verify that the components renders 2 input tags", () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.find("input")).toHaveLength(2);
    });

    it("Verify that the components renders 2 label tags", () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.find("label")).toHaveLength(2);
    });
})
