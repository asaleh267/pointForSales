import { Product } from "../../../../types/Product";

export const calculateSubTotal = (data: Product[]) => {
  let sum = 0;
  for (let index = 0; index < data.length; index++) {
    sum += data[index]["price"] * data[index]["quantity"];
  }
  return sum;
};

export const calculateTotalAfterTax = (data: Product[]) => {
  const subTotal = calculateSubTotal(data);
  const tax = 17 / 100;
  return subTotal + (1 + tax) * subTotal;
};

export const calculateNumberOfItems = (data: Product[]) => {
  let sum = 0;
  for (let index = 0; index < data.length; index++) {
    sum += data[index]["quantity"];
  }
  return sum;
};

export const calculateFinalTotal = (data: Product[], discount: number) => {
  const totalAfterTax = calculateTotalAfterTax(data);
  const discountPercentage = discount / 100;
  return totalAfterTax - discountPercentage * totalAfterTax;
};
