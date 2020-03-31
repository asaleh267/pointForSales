import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { POSTabs } from '../../../shared/POSTabs';
import { getCategories } from "../../../../api/server"


const useStyles = makeStyles((theme) => ({
 
}));

export default function FilterByTabs() {
  const classes = useStyles();
  let categoriesTabs: string[];
  categoriesTabs = getCategories().then((res: { data: any; }) => {    
    let tabs = res.data;
    return Object.values(tabs);    
  });
  
  return (
    <div>
        <POSTabs tabs={['Drinks', 'Fruits', 'Sweets']} value={-1}>
        </POSTabs>
    </div>
  );
}