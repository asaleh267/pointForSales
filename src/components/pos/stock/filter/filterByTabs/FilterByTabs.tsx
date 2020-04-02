import * as React from "react";
import { POSTabs } from "../../../../shared/posTabs/POSTabs";
import { getCategories } from "../../../../../api/server";

// Component
export const FilterByTabs: React.FunctionComponent = props => {
  const [categoriesTabs, setCategoriesTabs] = React.useState([]);
  getCategories().then((res: { data: any }) => {
    let tabs = res.data;
    setCategoriesTabs(Object.values(tabs));
  });

  return (
    <div>
      <POSTabs tabs={categoriesTabs} value={-1}></POSTabs>
    </div>
  );
};
