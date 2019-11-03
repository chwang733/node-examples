## download certstrap 
https://github.com/square/certstrap/releases

## Create root CA
certstrap init --organization "Widgets Inc" --common-name "Group_Microservices" --expires 10year

##Create server cert
certstrap request-cert --common-name "myProcessor.com" --domain "myProcessor.com"
certstrap sign --CA Group_Microservices "myProcessor.com" --expires 10year

##Create client cert
certstrap request-cert --common-name "client-1010101"
certstrap sign --CA Group_Microservices "client-1010101" --expires 10year

##Files to use
copy out/Group_Microservices.crt to both client and server cert folders
copy *.crt and *.key to corresponding client/server cert folder

