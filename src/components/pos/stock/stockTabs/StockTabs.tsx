import * as React from "react";
import { POSTabs } from "../../../shared/posTabs/POSTabs";
import { getCategories } from "../../../../api/server";
import { WithStyles } from "@material-ui/core";

// Component

export interface IProps {
  value: any;
  onChange?: (category: string, value: any) => void;
}
export const StockTabs: React.FunctionComponent<IProps> = ({
  value = 0,
  onChange = () => {},
}) => {
  const [categoriesTabs, setCategoriesTabs] = React.useState([]);

  React.useEffect(() => {
    getCategories().then((res: { data: any }) => {
      let tabs = res.data;
      setCategoriesTabs(Object.values(tabs));
    });
  }, []);

  const handleTabChange = (value: any) => {
    onChange(value, value);
  };

  return (
    <div>
      <POSTabs
        tabs={categoriesTabs}
        value={value}
        all={true}
        onChange={handleTabChange}
      ></POSTabs>
    </div>
  );
};
