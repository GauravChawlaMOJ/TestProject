const env = process.env.ENVIRONMENT || "aat";
const e2ePw = process.env.E2E_TEST_PASSWORD || 'Password1234';

interface WebAddresses {
  [key: string]: string;
}

export const webAddresses: WebAddresses = {
  webAddress: process.env.FE_BASE_URL || `https://manage-case.${env}.platform.hmcts.net/`,
};

export const newSwanseaLocalAuthorityUserOne = {
  email: 'local-authority-swansea-0001@maildrop.cc',
  password: e2ePw,
};