import { useSelector } from 'react-redux';
import MainCard from 'ui-component/cards/MainCard';
import { CardContent, Grid, Typography } from '@mui/material';


const AccountSettings = () => {
  // Retrieve user data from Redux store
  const userData = useSelector((state) => state.authorization.userData);

  // Define user data fields based on name availability
  let userFields;
  if (userData.name) {
    userFields = [
      { label: 'Name', value: userData.name },
      { label: 'Last Name', value: userData.lastName },
      { label: 'Email', value: userData.email },
      { label: 'Area', value: userData.area },
      { label: 'Gender', value: userData.gender },
      { label: 'Phone Number', value: userData.phone_number },
      { label: 'Nationality', value: userData.nationality },
      { label: 'Role Experience', value: userData.role_exp },
      { label: 'Expected Salary', value: userData.expected_salary },
      // Add more user data fields as needed
    ];
  } else {
    userFields = [
      { label: 'Company Name', value: userData.company_name },
      { label: 'Email', value: userData.email },
      { label: 'Registration Number', value: userData.registration_number },
      { label: 'Phone Number', value: userData.phone_number },
      // Add more user data fields as needed
    ];
  }

  return (
    <MainCard content={false}>
      <CardContent>
        <Grid container spacing={2}>
          {userFields.map((field, index) => (
            <Grid item xs={12} key={index}>
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <Typography variant="subtitle1" color="inherit">
                    {field.label}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" color="grey">
                    {field.value}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </MainCard>
  );
};

export default AccountSettings;
