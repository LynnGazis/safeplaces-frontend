const authTypes = {
  login: {
    REQUEST: 'auth/REQUEST_LOGIN',
    SUCCESS: 'auth/SUCCESS_LOGIN',
    FAILURE: 'auth/FAILURE_LOGIN',
  },
  logout: {
    REQUEST: 'auth/REQUEST_LOGOUT',
  },
  onboarding: {
    REQUEST: 'auth/REQUEST_ONBOARDING',
    SUCCESS: 'auth/SUCCESS_ONBOARDING',
    FAILURE: 'auth/FAILURE_ONBOARDING',
  },
};

export default authTypes;
