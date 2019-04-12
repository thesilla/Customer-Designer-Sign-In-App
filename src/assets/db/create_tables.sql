CREATE TABLE sign_in_records (
	recordID int AUTO_INCREMENT NOT NULL,
    customerName varchar(255),
    clothing varchar(255),
    contractor varchar(255),
    project varchar(255),
    notes varchar(255),
    timeIn datetime,
    salesperson varchar(255),
    timeHelped datetime,
    waitTime varchar(255),
    waitTimeSeconds int(255),
    i int,
    timeInHoursString varchar(255),
    timeHelpedHoursString varchar(255),
    PRIMARY KEY (recordID)
)