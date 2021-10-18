var config = {}

//Certificate password used when exporting the certificate.
config.certificateConfig = {
    passphrase: ''
};

config.sessionSecret='uwotm8';

//Port you want Node.js to listen to for authentication requests. 
config.port='443';

//Example RESTURI for API Endpoint. Do not forget to include virtual proxy in path.
//default: config.RESTURI='https://servername.com:4243/qps/custom';
config.RESTURI='https://GFAU-NDC-LTA01:4243/qps/ltena_test';

//If you're using the login page as the "landing page" instead of redirecting from a virtual proxy
// - make sure you set up this URI to redirect the user after authenticating and receiving a ticket 
// config.REDIRECT='https://GFAU-NDC-LTA01/custom/hub';
config.REDIRECT='https://gfau-ndc-lta01/sense/app/aefabd8d-a1d1-4f46-84cf-1b02206f79d1/overview'

//Configure the path for the LDAP server you want to authenticate the user against
config.LDAP='ldap://gfau.gfiroot.local:389/';

//This is appended to the username that the user provides in the form. Example: user keys in 'UserX' and the config.DOMAIN part appends '@domain.com'
config.DOMAIN = '@gfau.gfiroot.local';

//Specify the name of the user directory you want to use for the Qlik Sense ticket requests
config.USERDIRECTORY = 'GFAU';

module.exports = config;
