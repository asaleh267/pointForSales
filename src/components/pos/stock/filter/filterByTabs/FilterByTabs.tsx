import * as React from "react";
import { POSTabs } from "../../../../shared/posTabs/POSTabs";
import { getCategories } from "../../../../../api/server";

// Component
export const FilterByTabs: React.FunctionComponent = props => {
  const [categoriesTabs, setCategoriesTabs] = React.useState([]);
  const [activeTab, setActiveTab] = React.useState();

  React.useEffect(() => {
    getCategories().then((res: { data: any }) => {
      let tabs = res.data;
      setCategoriesTabs(Object.values(tabs));
    });
  }, []);

  const handleTabChange = (event: React.ChangeEvent<{}>) => {
    console.log(event);
  };
  

  return (
    <div>
      <POSTabs tabs={categoriesTabs} value={-1} onChange={handleTabChange}></POSTabs>
    </div>
  );
};
