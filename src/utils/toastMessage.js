import {useToast} from 'react-native-toast-notifications';

const toast = useToast();

const successfulToast = type => {
  // toast.show('Task finished successfully', {
  //   type: 'normal | success | warning | danger | custom',
  //   placement: 'top | bottom',
  //   duration: 4000,
  //   offset: 30,
  //   animationType: 'slide-in | zoom-in',
  // });

  toast.show('Task finished successfully', {
    type: type,
    placement: 'top',
    duration: 4000,
    offset: 30,
    animationType: 'slide-in',
  });
};

const dangerToast = type => {
  toast.show('Task finished successfully', {
    type: type,
    placement: 'top',
    duration: 4000,
    offset: 30,
    animationType: 'slide-in',
  });
};

export {successfulToast, dangerToast};
