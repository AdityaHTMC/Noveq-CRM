import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SendIcon from "@mui/icons-material/Send";

const AddLead = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "MycontactPersons",
  });

  if (fields.length === 0) {
    append({});
  }

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
  };

  return (
    <>
      <Card>
        <CardContent>
          <h2 className="m0" style={{ color: "#00c2c1" }}>
            Add Lead
          </h2>
          <hr />
          <br />

          <Paper className="customTable" sx={{ width: "100%" }}>
            <div>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  Sales Employee Code : <b>AECLW1234589TX</b>
                </Grid>
                <Grid item xs={6}>
                  Sales Employee Name : <b>Ramesh Shaw</b>
                </Grid>
              </Grid>
            </div>
            <div className="mt20">
              <Grid container spacing={4}>
                <Grid item xs={3}>
                  <TextField
                    size="small"
                    className="width100 mb20"
                    label="Lead Name"
                    {...register("leadName", { required: true })}
                    aria-invalid={errors.leadName ? "true" : "false"}
                    error={!!errors.leadName} // Set error prop based on presence of errors
                  />
                  {errors.leadName?.type === "required" && (
                    <p role="alert">Lead name is required</p>
                  )}
                </Grid>
                <Grid item xs={3}>
                  <FormControl fullWidth>
                    <InputLabel size="small" id="selectDropdown">
                      Select from Dropdown
                    </InputLabel>
                    <Select
                      size="small"
                      labelId="selectDropdown"
                      label="Select from Dropdown"
                      {...register("selectFromDropdowns")}
                    >
                      <MenuItem value={1}>Dropdown 1</MenuItem>
                      <MenuItem value={2}>Dropdown 2</MenuItem>
                      <MenuItem value={3}>Dropdown 3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    size="small"
                    className="width100 mb20"
                    label="Pan No"
                    {...register("panNo")}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    size="small"
                    className="width100 mb20"
                    label="Lead Code"
                    {...register("leadCode")}
                  />
                </Grid>
              </Grid>
            </div>

            {fields.map((field, index) => (
              <div key={field.id} className="grayBg mb15 p15">
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <h3 className="mt0 mb0" style={{ color: "#00c2c1" }}>
                      Contact Person Details
                    </h3>
                  </Grid>
                  {index !== 0 && (
                    <Grid align="right" item xs={6}>
                      <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteOutlineIcon />}
                        onClick={() => remove(index)}
                      >
                        Delete
                      </Button>
                    </Grid>
                  )}
                </Grid>
                <hr className="mb20" />
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <TextField
                      size="small"
                      className="width100"
                      label="Contact Person ID"
                      {...register(`MycontactPersons.${index}.id`)}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      size="small"
                      className="width100"
                      label="Contact Person First Name"
                      {...register(`MycontactPersons.${index}.firstName`)}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      size="small"
                      className="width100"
                      label="Contact Last Name"
                      {...register(`MycontactPersons.${index}.lastName`)}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      size="small"
                      className="width100"
                      label="Contact Person Designation/Department"
                      {...register(`MycontactPersons.${index}.designation`)}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      size="small"
                      className="width100"
                      label="Contact Person Phone No."
                      {...register(`MycontactPersons.${index}.phone`)}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      size="small"
                      className="width100"
                      label="Contact Person Email ID"
                      {...register(`MycontactPersons.${index}.email`, {
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email format",
                        },
                      })}
                      error={!!errors?.MycontactPersons?.[index]?.email} // Set error prop based on presence of errors
                      helperText={
                        errors?.MycontactPersons?.[index]?.email?.message
                      } // Display error message
                    />
                  </Grid>
                </Grid>
              </div>
            ))}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button
                  variant="contained"
                  startIcon={<AddCircleOutlineIcon />}
                  onClick={() => append({})}
                >
                  Add
                </Button>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <div className="grayBg mt15 p15">
                  <h3 className="mt0 mb0" style={{ color: "#00c2c1" }}>
                    Bill To Address
                  </h3>
                  <hr className="mb20" />
                  <TextField
                    size="small"
                    className="width100 mb15"
                    label="Address ID"
                    {...register("billToAddress.addressId")}
                  />
                  <TextField
                    size="small"
                    className="width100 mb15"
                    label="Street/PO Box"
                    {...register("billToAddress.street")}
                  />
                  <TextField
                    size="small"
                    className="width100 mb15"
                    label="Block"
                    {...register("billToAddress.block")}
                  />
                  <TextField
                    size="small"
                    className="width100 mb15"
                    label="City"
                    {...register("billToAddress.city")}
                  />
                  <TextField
                    size="small"
                    className="width100 mb15"
                    label="State"
                    {...register("billToAddress.state")}
                  />
                  <TextField
                    size="small"
                    className="width100 mb15"
                    label="ZipCode"
                    {...register("billToAddress.zipCode")}
                  />
                  <TextField
                    size="small"
                    className="width100 mb15"
                    label="Country"
                    {...register("billToAddress.country")}
                  />
                  <FormControl fullWidth className="mb15">
                    <InputLabel size="small" id="selectDropdown">
                      GST Type
                    </InputLabel>
                    <Select
                      size="small"
                      labelId="selectDropdown"
                      label="Select from Dropdown"
                      {...register("billToAddress.gstType")}
                    >
                      <MenuItem value={1}>Dropdown 1</MenuItem>
                      <MenuItem value={2}>Dropdown 2</MenuItem>
                      <MenuItem value={3}>Dropdown 3</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    size="small"
                    className="width100 mb15"
                    label="GST Number "
                    {...register("billToAddress.gstNumber")}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="grayBg mt15 p15">
                  <h3 className="mt0 mb0" style={{ color: "#00c2c1" }}>
                    Ship To Address
                  </h3>
                  <hr className="mb20" />
                  <TextField
                    size="small"
                    className="width100 mb15"
                    label="Address ID"
                    {...register("shipToAddress.addressId")}
                  />
                  <TextField
                    size="small"
                    className="width100 mb15"
                    label="Street/PO Box"
                    {...register("shipToAddress.street")}
                  />
                  <TextField
                    size="small"
                    className="width100 mb15"
                    label="Block"
                    {...register("shipToAddress.block")}
                  />
                  <TextField
                    size="small"
                    className="width100 mb15"
                    label="City"
                    {...register("shipToAddress.city")}
                  />
                  <TextField
                    size="small"
                    className="width100 mb15"
                    label="State"
                    {...register("shipToAddress.state")}
                  />
                  <TextField
                    size="small"
                    className="width100 mb15"
                    label="ZipCode"
                    {...register("shipToAddress.zipCode")}
                  />
                  <TextField
                    size="small"
                    className="width100 mb15"
                    label="Country"
                    {...register("shipToAddress.country")}
                  />
                  <FormControl fullWidth className="mb15">
                    <InputLabel size="small" id="selectDropdown">
                      GST Type
                    </InputLabel>
                    <Select
                      size="small"
                      labelId="selectDropdown"
                      label="Select from Dropdown"
                      {...register("shipToAddress.gstType")}
                    >
                      <MenuItem value={1}>Dropdown 1</MenuItem>
                      <MenuItem value={2}>Dropdown 2</MenuItem>
                      <MenuItem value={3}>Dropdown 3</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    size="small"
                    className="width100 mb15"
                    label="GST Number"
                    {...register("shipToAddress.gstNumber")}
                  />
                </div>
              </Grid>
            </Grid>
            <div className="mt15" align="center">
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={handleSubmit(onSubmit)}
              >
                Submit
              </Button>
            </div>
          </Paper>
        </CardContent>
      </Card>
    </>
  );
};

export default AddLead;
