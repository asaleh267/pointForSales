import React, {useState, useEffect} from "react";
import { POSTabs } from "../../../shared/posTabs/POSTabs";
import { getCategories } from "../../../../api/server";

// Component

export interface IProps {
  value: any;
  onChange?: (category: string, value: any) => void;
}


export const CartTabs: React.FunctionComponent<IProps> = ({
  value = 0,
  onChange = () => {},
}) => {
  const [sessionTabs, setSessionTabs] = useState<string[]>([]);

  useEffect(() => {
    // read from local storage
    setSessionTabs(JSON.parse(localStorage.getItem("sessions") || "[]"));
    setSessionTabs(['Session 1', 'Session 2']);
  }, []);

  const handleTabChange = (value: any) => {
    alert("Get Sessions data");
  };

  const handleAddTab = () => {
    setSessionTabs(['Session 1', 'Session 2', 'Session 3'])
    alert('Add Session');
  }

  const handleRemoveTab = () => {
    setSessionTabs(['Session 1'])
    alert('Remove Last Session');
  }

  return (
    <div>
      <POSTabs
        tabs={sessionTabs}
        value={value}
        add={true}
        remove={true}
        onChange={handleTabChange}
        addTab={handleAddTab}
        removeTab={handleRemoveTab}
      ></POSTabs>
    </div>
  );
};
