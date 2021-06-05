DBName : BonstayDB

Collection name: hotels
Property	Type 
HotelName	String
Description	String
Amenities	String
PhoneNo	Number
Address	String
Reviews	Array
 

Collection name:  users
Property	Type
UserId	String
Name	String
Address	String
EmailId	String
PhoneNo	Number
Password	String
UserBookings	Array
 

Collection name: bookings
Property	Type
BookingId	String
StartDate	Date
EndDate	Date
NoOfPersons	Number
NoOfRooms	Number
TypeOfRoom	String