# Python3 code to demonstrate
# Getting current date and time using
# now().

# importing datetime module for now()
import datetime
import time

# using now() to get current time
current_time = datetime.datetime.now()

# Printing value of now.
print ("Time now at greenwich meridian is : "
                                    , end = "")
print (current_time)


# Printing attributes of now().
print ("The attributes of now() are : ")

print ("Year : ", end = "")
print (current_time.year)

print ("Month : ", end = "")
print (current_time.month)

print ("Day : ", end = "")
print (current_time.day)

print ("Hour : ", end = "")
print (current_time.hour)

print ("Minute : ", end = "")
print (current_time.minute)

print ("Second : ", end = "")
print (current_time.second)

print ("Microsecond : ", end = "")
print (current_time.microsecond)



print('---------')


# datetime(year, month, day, hour, minute, second)
a = datetime.datetime(2017, 6, 21, 18, 25, 30)
b = datetime.datetime(2017, 5, 16, 8, 21, 10)

# returns a timedelta object
c = a-b
print('Difference: ', c)


# returns (minutes, seconds)
minutes = divmod(c.total_seconds(), 60)
print('Total difference in minutes: ', minutes[0], 'minutes',
                                 minutes[1], 'seconds')

# returns the difference of the time of the day (minutes, seconds)
minutes = divmod(c.seconds, 60)
print('Total difference in minutes: ', minutes[0], 'minutes',
                                 minutes[1], 'seconds')


begin = 3
end = 5
current = 0
var1 = False

while True:





    if (current>=begin):
        var1 = True

    if (current >= end):
        var1 = False

    print('T: % d Var1: % d'% (current, var1))

    if current >= 1439:
        current = 0
    else:
        current += 1

    time.sleep(0.003)














#
