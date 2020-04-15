import * as React from "react";
import {
  WithStyles,
  withStyles,
  FormControl,
  InputLabel,
  Select,
  Typography,
  TextField,
} from "@material-ui/core";
import { getClients, submitPayment } from "../../../../api/server";

import styles from "./styles";
import POSDialog from "../../../shared/posDialog";
import { Product } from "../../../../types/Product";
import { calculateFinalTotal, calculateNumberOfItems } from "../utils/utils";

export interface IProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  client: string;
  data: Product[];
}
// Component
export const PaymentComponent: React.FunctionComponent<
  IProps & WithStyles<typeof styles>
> = (props) => {
  const {
    classes,
    open,
    client,
    data,
    onCancel = () => {},
    onConfirm = () => {}
  } = props;
  const [clients, setClients] = React.useState([]);
  const [paymentMethod, setPaymentMethod] = React.useState("Cash");
  const paymentMethods = ["Cash", "Cheque"];
  let paymentValue = "";

  React.useEffect(() => {
    getClients().then((res: { data: any }) => {
      setClients(Object.values(res.data));
    });
  }, []);

  const handleSelectChange = (event: any) => {
    setPaymentMethod(event.target.value);
  };

  const handleOnConfirm = () => {
    let paymentData = {
      "clientName": client,
      "total": calculateFinalTotal(data, 0),
      "noOfItems": calculateNumberOfItems(data),
      "paymentMethod": paymentMethod,
      "paymentValue": paymentValue
    }
    submitPayment(paymentData);
    onConfirm();
  }

  const handleOnChangePaymentValue = (event: any) => {
    paymentValue = event.target.value;
  }

  return (
    <>
      <POSDialog
        open={open}
        onConfirm={handleOnConfirm}
        onCancel={onCancel}
        title="Add Sales"
      >
        <Typography variant="h6">Customer {client} </Typography>
        <Typography variant="h6">
          Items {calculateNumberOfItems(data)}
        </Typography>
        <Typography variant="h6">
          Total {calculateFinalTotal(data, 0)}
        </Typography>
        <div>
          <Typography variant="h6">Payment </Typography>
          <Select native onChange={handleSelectChange}>
            {paymentMethods.map((element, index) => (
              <option key={index} value={element}>
                {element}
              </option>
            ))}
          </Select>
        </div>
            <TextField
              id="outlined-basic"
              onChange={handleOnChangePaymentValue}
              label={paymentMethod === "Cash" ? "Paid" : "Cheque Number"}
            />
      </POSDialog>
    </>
  );
};

const StyledPaymentComponent = withStyles(styles)(PaymentComponent);
export { StyledPaymentComponent as Payment };
