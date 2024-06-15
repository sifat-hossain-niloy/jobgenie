const BASE = 'http://localhost:8000';

export const endpoints = {
    BASE: BASE,

    // Auth
    LOGIN: BASE + '/token',
    REGISTER: BASE + '/signup',

    // Account
    PROFILE: BASE + '/user/profile',
    PROFILE_IMAGE: BASE + '/user/profile/image',
};
