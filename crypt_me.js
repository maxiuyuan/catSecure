//-*- coding: utf-8 -*-
/*
RSA Encryption Engine

Written by Ike Lee
May 27Th
*/ 

function checkPrime(number) {
	var isPrime = true;
	for(i=2; i<int(Math.sqrt(number)+1); i++){
		if(int(number)%y === 0){
			isPrime = false; 
			break; 
		}
	}
	if(isPrime === true){
		return true;
	}
	else{
		return false;
	}
}

function getPrimes(length) {
	var list = []; 
	var number = 101; 
	var count = 0; 

	while(count < length){
		if(checkPrime(number)===true){
			list.push(number);
			count++; 
		}

		number++; 
	}
	return list; 
}

function egcd(a, b) {
	if (a===0){
		return (b, 0, 1); 
	}
	else {
		var g, y, x = egcd( b%a, a)
		return (g, x-Math.floor(b/a)*y, y); 
	}
}

function modinv(a, m) {
	var g, x, y = egcd(a, m); 
	if (g != 1) {
		; 
	}
	else {
		return x%m; 
	}
}

function gcd_rec(a, b) {
    if (b) {
        return gcd_rec(b, a % b);
    } else {
        return Math.abs(a);
    }
}

function relativePrime(num1, num2){
	return (gcd_rec(num1, num2) === 1); 
}

function encrypt(password) {
	var list_primes = getPrimes(30);
	var prime1= list_primes[Math.ceil(Math.random()*30)];
	var prime2 = list_primes[Math.ceil(Math.random()*30)];
	var coprime = list_primes[Math.ceil(Math.random()*30)];

	var n = prime1*prime2;
	var euler_n = (prime1-1)*(prime2-1); 

	var publicKey = [coprime, n]; 
	var privateKey = [modinv(coprime, euler_n), n]

	var encrypted_message = (Math.pow(password, publicKey[0])%n); 

	return encrypted_message, publicKey, privateKey
}

function decrypt(encrypted_message, privateKey){
	decrypted_message = (Math.pow(encrypted_message, privateKey[0])%privateKey[1]);
	return decrypted_message
}

if __name_=="__main__": 

	message=10000

	encrypted_message, publicKey, privateKey = encrypt(message); 

	decrypted_message = decrypt(encrypted_message, privateKey); 