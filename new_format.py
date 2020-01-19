from __future__ import division

import numpy
import pandas as pd
import datetime as dt

file_name = "/Users/James/Documents/hackcambridge20/household_power_consumption.csv"


df= pd.read_csv(file_name,  parse_dates=[['Date', 'Time']], infer_datetime_format=True, sep=';', low_memory=False)


df['Date_Time'] = (df['Date_Time'] - dt.datetime(1970,1,1)).dt.total_seconds()

df.to_csv('new_house.csv')
