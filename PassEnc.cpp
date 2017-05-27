#include <iostream>
#include <string>
#include <fstream>
#include <algorithm>

using namespace std;
void outputpass(string pass){
ofstream outfile ("test2.txt");

outfile << pass <<std::endl;

outfile.close();
}

int main(){
string password;
string offset = "asdu^&djaj132mfknasdasii12h3"; // 
cin >> password;

cout << "Original password = " << password;
string encrypted = "";
string unencrypted = "";
string reencrypt = "";
char key = '$';
char rekey = 's';
char unkey = '%';

for (int temp = 0; temp < password.size(); temp++){
  encrypted += password[temp] ^ (int(key) + temp) % 255;  // encrypt with a xor encryption
 }
cout << "Encrypted password = " << encrypted<<endl;
 
swap(password,offset); // switch our original password with a random value 

for (int temp = 0; temp < password.size(); temp++){
  reencrypt += encrypted[temp] ^ (int(rekey) + temp) % 255;
}
cout << reencrypt << endl;;
outputpass(reencrypt);
 
for (int temp = 0; temp < password.size(); temp++){
  unencrypted += reencrypt[temp] * (int(rekey) + temp) % 255;
  }
cout << unencrypted;
ofstream outfile ("test.txt");

outfile << unencrypted <<std::endl;

outfile.close();
 return 0;
}