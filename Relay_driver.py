##################################################
#           P26 ----> Relay_Ch1
#			P20 ----> Relay_Ch2
#			P21 ----> Relay_Ch3
##################################################
#!/usr/bin/python
# -*- coding:utf-8 -*-
import RPi.GPIO as GPIO
import time

RelayChannel = [26, 20, 21] # relay channels mapping

ChannelState = [1, 1, 1] # relay channels stete

GPIO.setwarnings(False) # warn logs off
GPIO.setmode(GPIO.BCM)  # BCM pin mapping mode

for i in range(3):
    GPIO.setup(RelayChannel[i], GPIO.OUT) # set RelayChannel[i] as output pin


  # Example:
  # GPIO.output(RelayChannel[i], int(ChannelState[i]))


try:
	while True:
		#Control the Channel 1
		GPIO.output(RelayChannel[0],GPIO.LOW)
		time.sleep(0.5)

		GPIO.output(RelayChannel[0],GPIO.HIGH)
		time.sleep(0.5)

		#Control the Channel 2
		GPIO.output(RelayChannel[1],GPIO.LOW)
		time.sleep(0.5)

		GPIO.output(RelayChannel[1],GPIO.HIGH)
		time.sleep(0.5)

		#Control the Channel 3
		GPIO.output(RelayChannel[2],GPIO.LOW)
		time.sleep(0.5)

		GPIO.output(RelayChannel[2],GPIO.HIGH)
		time.sleep(0.5)

except:
	print("GPIO exception on relay channels")
	GPIO.cleanup()




######################
