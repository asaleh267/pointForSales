import React, { useState, useEffect } from "react";
import { POSTabs } from "../../../shared/posTabs/POSTabs";
import { getCategories } from "../../../../api/server";

// Component

export interface IProps {
  onChange?: (value: string) => void;
  onAdd?: () => void;
} 

export const CartTabs: React.FunctionComponent<IProps> = ({
  onChange = () => {},
  onAdd = () => {}
}) => {
  const [cartTabs, setCartTabs] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<string>("");

  useEffect(() => {
    //sessions
    let sessions = localStorage.getItem("cartSessions");
    if (sessions) {
      setCartTabs(JSON.parse(sessions));
    } else {
      setCartTabs(["session1"]);
      localStorage.setItem("activeSession", "session1");
      localStorage.setItem("cartSessions", JSON.stringify(["session1"]));
    }
    // set active tab
    let activeSession = localStorage.getItem("activeSession");
    if (activeSession) {
      setActiveTab(activeSession);
    } else {
      setActiveTab(cartTabs[0]);
    }
  }, []);

  const handleTabChange = (value: string) => {
    changeActiveTab(value);
    onChange(value);
  };

  const handleAddTab = () => {
    let lastSession = cartTabs[cartTabs.length - 1];
    let lastIndex = parseInt(lastSession.charAt(lastSession.length - 1)) + 1;
    let cartSessionTabs = [...cartTabs];
    cartSessionTabs.push("session" + lastIndex);
    changeCartTabs(cartSessionTabs);
    changeActiveTab("session" + lastIndex);
    onAdd();
  };

  const changeCartTabs = (value: string[]) => {
    setCartTabs(value);
    localStorage.setItem("cartSessions", JSON.stringify(value));
  };

  const changeActiveTab = (value: string) => {
    setActiveTab(value);
    localStorage.setItem("activeSession", value);
  };

  const handleRemoveTab = () => {
    let indexOfSelectedTab = cartTabs.indexOf(activeTab);
    let cartSessionTabs = [...cartTabs];
    if (cartTabs.length > 1) {
      cartSessionTabs.splice(indexOfSelectedTab, 1);
      changeCartTabs(cartSessionTabs);
      changeActiveTab(cartTabs[indexOfSelectedTab - 1]);
    } else {
      alert("You can delete the last session");
    }
  };

  return (
    <div>
    { activeTab && cartTabs && (
        <POSTabs
          tabs={cartTabs}
          value={activeTab}
          add={true}
          remove={true}
          onChange={handleTabChange}
          onAddTab={handleAddTab}
          onRemoveTab={handleRemoveTab}
        />
      )}
    </div>
  );
};
