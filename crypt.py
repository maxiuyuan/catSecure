import Crypto
from Crypto.PublicKey import RSA
from Crypto import Random
import ast, sys



def encrypt(password):
	rand = Random.new().read
	cryptokey = RSA.generate(2048, rand)

	publickey = cryptokey.publickey()

	encrypted_pw = publickey.encrypt(password, 32)


	return cryptokey, encrypted_pw, publickey

def decrypt(encrypted_pw, cryptokey):

	decrypted_pw = cryptokey.decrypt(ast.literal_eval(str(encrypted_pw)))

	return decrypted_pw

if __name__=="__main__": 

	cryptokey, encrypted_pw, publickey = encrypt(sys.argv[1])
	decrypted_pw = decrypt(encrypted_pw,cryptokey)

	print cryptokey, decrypted_pw, encrypted_pw