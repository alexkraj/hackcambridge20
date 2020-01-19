'''Three Appliances for 7 days in the past plus 7 days prediction and cummulative total'''
from __future__ import division

import numpy
import json
import matplotlib.pyplot as plt

applicances = ['Fridge', 'Heating', 'TV']

def heating_func(hour):
    return (numpy.sin(hour/24*numpy.pi) + 1.5) * 0.3

def moving_average(x, w):
    return numpy.convolve(x, numpy.ones(w), 'valid') / w

def new_average(x, w=24):
    averages = []
    for i in range(1,len(x)+1):
        if i % w ==0:
            sub_set = x[i-w:i]
            #print(sub_set)
            average = numpy.mean(sub_set, axis=0)
            averages = numpy.append(averages, average)
    return numpy.array(averages)


def week_generator():
    week = 24*7

    time = numpy.arange(0, week)


    fridge_level = 0.8

    TV_daily = numpy.zeros(24)

    TV_daily[6:9] = 0.8
    TV_daily[18:20] = 0.7


    heating_daily = numpy.empty(24)

    for i in range(len(heating_daily)):
        heating_daily[i] = heating_func(i)




    fridge_week = numpy.tile(fridge_level, 24*7)
    heating_week = numpy.tile(heating_daily, 7)
    TV_week = numpy.tile(TV_daily, 7)

    for i in range(len(heating_week)):
        heating_week[i] = heating_week[i] * numpy.random.normal(1.2,0.3)
        fridge_week[i] = fridge_week[i] * numpy.random.normal(1,0.05)
        TV_week[i] = TV_week[i] * numpy.random.normal(1.6,0.2)

    total_energy = numpy.add(numpy.add(heating_week, fridge_week), TV_week)

    return new_average(heating_week), new_average(fridge_week), new_average(TV_week), new_average(total_energy)

def generate_JSON():
    prev_heat, prev_fridge, prev_TV, prev_total = week_generator()
    future_heat, future_fridge, future_TV, future_total = week_generator()
    future_heat[0] = prev_heat[-1]
    future_fridge[0] = prev_heat[-1]
    future_TV[0] = prev_TV[-1]
    time = numpy.arange(len(prev_heat))
    future_time = numpy.arange(len(prev_heat), 2*len(prev_heat))

    json_energy = {"previous":{"fridge":prev_fridge.tolist(),
                        "heating":prev_heat.tolist(),
                        "TV":prev_TV.tolist(),
                        "total": prev_total.tolist(),
                        "time":time.tolist()},
            "future":{"fridge":future_fridge.tolist(),
                                "heating":future_heat.tolist(),
                                "TV":future_TV.tolist(),
                                "total": future_total.tolist(),
                                "time":future_time.tolist()}
                                }


    parsed_JSON = json.dumps(json_energy, indent=4, sort_keys=True)

    return (parsed_JSON)

generate_JSON()
