'''Three Appliances for 7 days in the past plus 7 days prediction and cummulative total'''
from __future__ import division

import numpy
import json
import matplotlib.pyplot as plt

applicances = ['Fridge', 'Heating', 'TV']

def heating_func(hour):
    return (numpy.sin(hour/24*numpy.pi) + 1.5) * 0.3

def moving_average(a, n=24) :
    ret = np.cumsum(a, dtype=float)
    ret[n:] = ret[n:] - re
    return ret[n - 1:] / n


def week_generator():
    week = 24*7

    time = numpy.arange(0, week)


    fridge_level = 0.8

    TV_daily = numpy.empty(24)

    TV_daily[6:9] = 0.8
    TV_daily[18:20] = 0.7


    heating_daily = numpy.empty(24)

    for i in range(len(heating_daily)):
        heating_daily[i] = heating_func(i)




    fridge_week = numpy.tile(fridge_level, 24*7,)
    heating_week = numpy.tile(heating_daily, 7)
    TV_week = numpy.tile(TV_daily, 7)

    for i in range(len(heating_week)):
        heating_week[i] = heating_week[i] * numpy.random.normal(1.2,0.3)
        fridge_week[i] = fridge_week[i] * numpy.random.normal(1,0.05)
        TV_week[i] = TV_week[i] * numpy.random.normal(1.6,0.2)

    total_energy = numpy.add(numpy.add(heating_week, fridge_week), TV_week)

    return moving_average(heating_week), moving_average(fridge_week), moving_average(TV_week), moving_average(total_energy)

def generate_JSON():
    prev_heat, prev_fridge, prev_TV, prev_total = week_generator()
    future_heat, future_fridge, future_TV, future_total = week_generator()

    json_energy = {"previous":{"fridge":prev_fridge.tolist(),
                        "heating":prev_heat.tolist(),
                        "TV":prev_TV.tolist(),
                        "total": prev_total.tolist()},
            "future":{"fridge":future_fridge.tolist(),
                                "heating":future_heat.tolist(),
                                "TV":future_TV.tolist(),
                                "total": future_total.tolist()}
                                }

    parsed_JSON = json.dumps(json_energy, indent=4, sort_keys=True)

    return (parsed_JSON)

generate_JSON()
