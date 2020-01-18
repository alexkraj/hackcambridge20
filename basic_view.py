from __future__ import division

import matplotlib.pyplot as plt
import numpy
import pandas as pd


file_name = "Datasets/House1.csv"

appliances=['Aggregate', 'Fridge', 'Freezer_1', 'Freezer_2', 'Washer_Dryer',
'Washing_Machine', 'Dishwasher', 'Computer', 'Television_Site', 'Electric_Heater']

df= pd.read_csv(file_name, names=['time', 'Aggregate', 'Fridge', 'Freezer_1', 'Freezer_2',
'Washer_Dryer','Washing_Machine', 'Dishwasher', 'Computer', 'Television_Site', 'Electric_Heater'], parse_dates=True, infer_datetime_format=True)


df.index = pd.to_datetime(df['time'], unit='s', origin='unix')

new_CSV = df.drop_duplicates()

new_CSV.to_csv('prepared_data.csv', header = ['time','Aggregate', 'Fridge', 'Freezer_1', 'Freezer_2', 'Washer_Dryer',
'Washing_Machine', 'Dishwasher', 'Computer', 'Television_Site', 'Electric_Heater'])

weekly_summary = pd.DataFrame()
weekly_summary['Fridge'] = df.Fridge.resample('H').mean()
weekly_summary['Freezer_1'] = df.Freezer_1.resample('H').mean()


#print (weekly_summary)

plt.figure()

plt.plot(weekly_summary.index, weekly_summary['Fridge'])
plt.plot(weekly_summary.index, weekly_summary['Freezer_1'])


plt.show()



plt.figure()

for app in appliances:
    plt.scatter(df['time'][-10000:], df[app][-10000:], label=app, s=0.1)


plt.legend()


plt.show()
