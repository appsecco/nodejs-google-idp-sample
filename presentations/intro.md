# Understanding `AuthN` and `AuthZ`
![Modern day Authentication and Authorization](images/authorization.png)


## What is Authentication?
Is the process of verification that an individual or an  entity is who it claims to be.


### Most common form of AuthN
> Authentication is commonly performed by submitting a user name or ID and    one or more items of private information that only a given user should know.


### What you know - Password
> 1st factor of authN, in most cases the only factor of authN


### What you have
- Key Fob
- One Time Password
- USB with private key
- 2nd factor of authN


### What you are
- Fingerprint
- Retina
- Voice


## What is Authorization?
Is the process of ensuring that an identified user is *capable* of doing what is requested


### Common types of AuthZ

1. Role based access control
2. Discretionary Access Control 
3. Mandatory Access Control


## Authencation and Authorization

The most fundamental security control in any application is to

1. Identify who is the user
2. Ensure that the user is within his trust boundary
   1. This means, the user should not be **capable** of doing anything which the system policy prevents him