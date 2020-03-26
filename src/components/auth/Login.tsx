import * as React from "react";
import { Typography, Button, makeStyles, TextField } from "@material-ui/core";
import { fontSize, colors } from "../../utils/Variables";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router";

// Styling
const useStyle = makeStyles({
  gridContainer: {
    padding: "16px",
    minWidth: "400px"
  },
  title: {
    fontSize: fontSize.large,
    opacity: 0.9,
    textAlign: "center"
  },
  input: {
    width: "100%",
    backgroundColor: "none",
    marginTop: "16px"
  },
  button: {
    textTransform: "none",
    color: "white",
    fontSize: fontSize.normal,
    background: colors.darkGreen,
    padding: 8,
    width: "100%"
  },
  cardActions: {
    padding: 0,
    marginTop: 16
  }
});

//Validation Schema
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email must be valid")
    .required("Required"),
  password: Yup.string().required("Required")
});

// Component
export const Login = () => {
  const classes = useStyle();
  let history = useHistory();

  return (
    <Card className={classes.gridContainer}>
      <CardContent>
        <Typography className={classes.title}>Login to your account</Typography>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={values => {
            if (values.email === 'admin@pos.com' && values.password === 'admin') {
                history.push('/dashboard');
            } else {
                alert('Invalid Credentials !');
            }
          }}
          validationSchema={validationSchema}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              handleChange,
              handleBlur,
              handleSubmit
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <TextField
                  required
                  name="email"
                  onChange={handleChange}
                  label="Email"
                  className={classes.input}
                  type="input"
                  value={values.email}
                  variant="outlined"
                  onBlur={handleBlur}
                  helperText={errors.email && touched.email && errors.email}
                />
                <TextField
                  required
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  label="Password"
                  className={classes.input}
                  type="password"
                  variant="outlined"
                  onBlur={handleBlur}
                  helperText={
                    errors.password && touched.password && errors.password
                  }
                />
                <CardActions className={classes.cardActions}>
                  <Button type="submit" className={classes.button}>
                    Sign in
                  </Button>
                </CardActions>
              </form>
            );
          }}
        </Formik>
      </CardContent>
    </Card>
  );
};
