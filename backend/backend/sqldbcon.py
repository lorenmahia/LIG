# importing required libraries
import mysql.connector
from datetime import datetime
import json
 
dataBase = mysql.connector.connect(
  host ="localhost",
  user ="root",
  passwd ="",
  database = "loreninvestmentgroup"
)
 
# preparing a cursor object
cursorObject = dataBase.cursor()

#cursorObject.execute("CREATE TABLE Client (ClientID INT NOT NULL AUTO_INCREMENT,FirstName VARCHAR(255) NOT NULL,MiddleName VARCHAR(255),LastName VARCHAR(255) NOT NULL,DateOfBirth DATE NOT NULL,AccountInfo JSON,PRIMARY KEY (ClientID) )")
# Open the JSON file
with open(r"C:\Users\lmahi\Documents\Loren Investment Group Code\LIG\backend\backend\accountinfo.json", "r") as json_file:
    json_data = json.load(json_file)
#print(json_data)

cmd = "CREATE TABLE AccountData(Investor VARCHAR(255),ClientID INT NOT NULL AUTO_INCREMENT, AccountID INT NOT NULL,cashBalance INT NOT NULL, totalBalance INT NOT NULL, deposits JSON, withdrawals JSON, ClientVariables JSON, PRIMARY KEY (ClientID))"
cmd1 = "CREATE TABLE Deposits(depositID INT NOT NULL AUTO_INCREMENT, date DATE NOT NULL, amount INT NOT NULL,PRIMARY KEY (depositID))"
cmd2 = "CREATE TABLE Withdrawals(withdrawalID INT NOT NULL AUTO_INCREMENT, date DATE NOT NULL, amount INT NOT NULL, PRIMARY KEY (withdrawalID))"
cmd3 = "CREATE TABLE ClientVariables(accountType VARCHAR(255),riskLevel VARCHAR(255), investmentGoals VARCHAR(255), expectedUtility INT NOT NULL, riskAversion INT NOT NULL, lossAversion INT NOT NULL, reflection INT NOT NULL, SOLRisk INT NOT NULL, ClientID INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (ClientID))"
cmd4 = "ALTER TABLE Deposits ADD FOREIGN KEY(ClientID) REFERENCES Client(ClientID)"

#Insert Values 
cmd5 = """INSERT INTO Client VALUES
(35418159, 'Loren', 'Mburu', 'Mahia', '1998-06-07');
"""
cmd6 = """INSERT INTO AccountData VALUES
('loreninvestmentgroup@gmail.com',35418159,00001,2000,2000)
"""
cmd7 = """ INSERT INTO Deposits VALUES
(0001,'2023-01-01',1000,35418159)
"""
cmd8 = """ INSERT INTO Withdrawals VALUES
(0001,'2023-01-01',103,35418159)
"""
cmd9 = """ INSERT INTO ClientVariables VALUES
('retirement','low','eov-income',2,2,2,2,3,35418159)
"""
cursorObject.execute(cmd8)
print("Execution done" + cmd8)

# Commit the changes to the database
dataBase.commit()

 
