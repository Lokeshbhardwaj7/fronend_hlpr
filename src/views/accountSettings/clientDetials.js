// react import
import { useEffect } from 'react';

// mui import
import { useTheme } from '@mui/material/styles';
import { Grid, useMediaQuery, Box, Button, CircularProgress } from '@mui/material';

//  project import
import { useForm } from 'react-hook-form';
import MainCard from 'ui-component/cards/MainCard';
import PasswordField from 'ui-component/passwordField';
import { useAppSelector } from '../../store';

const ClientDetails = (props) => {
  const { updateClientDetails } = props;
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const userDetails = useAppSelector((state) => state.authorization.userDetails);
  const updateClinetId = useAppSelector((state) => state.updateClientLoading);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm({
    mode: 'onTouched',
    defaultValues: {
      client_id: '',
      client_secret: ''
    }
  });

  useEffect(() => {
    if (userDetails.data && userDetails.data.usersSettings) {
      reset({
        client_id: userDetails.data.usersSettings.client_id,
        client_secret: userDetails.data.usersSettings.client_secret
      });
    }
  }, [userDetails]);

  //  function for client id and secret
  const onSubmit = (data) => {
    updateClientDetails(data);
  };

  return (
    <MainCard style={{ marginTop: '10px' }} title="Wallmatrics Client Details">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={matchDownSM ? 0 : 2}>
          <Grid item xs={12} sm={6}>
            <PasswordField
              label="Client Id"
              control={control}
              rules={{ required: true }}
              name={'client_id'}
              errors={errors}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PasswordField
              label="Client Secret"
              control={control}
              rules={{ required: true }}
              name={'client_secret'}
              errors={errors}
              fullWidth
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 2 }}>
          <Button
            disabled={updateClinetId.loading}
            type="submit"
            sx={{ mr: 2 }}
            variant="contained"
            color={'secondary'}
            size="large"
          >
            {updateClinetId.loading && <CircularProgress sx={{ color: '#0000001f', mr: '10px' }} size="20px" />}
            Update
          </Button>
        </Box>
      </form>
    </MainCard>
  );
};

export default ClientDetails;
