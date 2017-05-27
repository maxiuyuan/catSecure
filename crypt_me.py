# -*- coding: utf-8 -*-
"""
RSA Encryption Engine

Written by Ike Lee
May 27th 
"""

import math
import random
from fractions import gcd

def checkPrime(number): 
    isPrime = True
    for y in range(2, int(math.sqrt(number)+1)): 
            if int(number) % y == 0: 
                isPrime = False
                break
    if isPrime: 
        return True
    else:
        return False
    
        

def getPrimes(length): 
    list_of_primes = []
    number = 101
    count = 0
    
    while count < length: 
        if checkPrime(number): 
            list_of_primes.append(number)
            count += 1
            
        number += 1
            
    return list_of_primes

def egcd(a, b):
    if a == 0:
        return (b, 0, 1)
    else:
        g, y, x = egcd(b % a, a)
        return (g, x - (b // a) * y, y)

def modinv(a, m):
    g, x, y = egcd(a, m)
    if g != 1:
        raise Exception('modular inverse does not exist')
    else:
        return x % m

def relativePrime(num1, num2):
    return gcd(num1, num2) == 1

def encrypt(password): 
    prime1, prime2, coprime= random.sample(getPrimes(30), 3)
    
    n = prime1*prime2
    euler_n = (prime1-1)*(prime2-1)
        
    #Make the relative Prime checker function later
    
    publicKey = (coprime, n)    
    privateKey = (modinv(coprime, euler_n), n)
    
    encrypted_message = (password**publicKey[0])%n

    return encrypted_message, publicKey, privateKey

def decrypt(encrypted_message, privateKey):
    decrypted_message = (encrypted_message**privateKey[0])%privateKey[1]

    return decrypted_message

if __name__=="__main__": 
    
    message=100

    encrypted_message, publicKey, privateKey = encrypt(message)
    print publicKey, privateKey

    decrypted_message = decrypt(encrypted_message, privateKey)
                        
    print encrypted_message, decrypted_message
    
#https://www.cs.virginia.edu/~kam6zx/rsa/a-worked-example/

    
    
        
    
    
    
    
    
    
    
    
    
    
    
    
    

