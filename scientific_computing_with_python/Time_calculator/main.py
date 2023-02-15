def add_time(start, duration, dayOfTheWeek=None):
    daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday',
                     'Thursday', 'Friday', "Saturday", "Sunday"]
    dayOfTheWeekFormatted = None

    def checkDayOfTheWeek(dayToCheck):
        return daysOfTheWeek.index(dayToCheck)

    def getDayOfTheWeekWithIndex(dayIndex, daysToAdd):
        if dayIndex + daysToAdd > 6:
            return daysOfTheWeek[(dayIndex + daysToAdd) % 7]

        return daysOfTheWeek[dayIndex + daysToAdd]

    if dayOfTheWeek != None:
        dayOfTheWeekFormatted = dayOfTheWeek.lower().title()

    t1Split = start.split(' ')[0].split(':')
    t2Split = duration.split(':')

    period = start[-2:]

    if period == 'PM':
        t1Hr = int(t1Split[0]) + 12
    else:
        t1Hr = int(t1Split[0])

    t1Min = int(t1Split[1])
    t2Hr = int(t2Split[0])
    t2Min = int(t2Split[1])

    minSum = t1Min + t2Min
    hrSum = 0

    if minSum == 60:
        minSum = 0
        hrSum += 1
    elif minSum > 60:
        minSum = (t1Min + t2Min) % 60
        hrSum += 1

    hrSum += t1Hr + t2Hr

    daysLater = 0
    new_time = ""

    if hrSum < 24:
        if dayOfTheWeek == None:
            if hrSum >= 13:
                new_time += f"{hrSum - 12}:{minSum:02} PM"
            elif hrSum == 12:
                new_time += f"{hrSum}:{minSum:02} PM"
            elif hrSum == 0:
                new_time += f"12:{minSum:02} AM"
            else:
                new_time += f"{hrSum}:{minSum:02} AM"
        else:
            if hrSum >= 13:
                new_time += f"{hrSum - 12}:{minSum:02} PM, {dayOfTheWeekFormatted}"
            elif hrSum == 12:
                new_time += f"{hrSum}:{minSum:02} PM, {dayOfTheWeekFormatted}"
            elif hrSum == 0:
                new_time += f"12:{minSum:02} AM, {dayOfTheWeekFormatted}"
            else:
                new_time += f"{hrSum}:{minSum:02} AM, {dayOfTheWeekFormatted}"

    else:
        while hrSum >= 24:
            hrSum -= 24
            daysLater += 1

        if daysLater == 1:
            if dayOfTheWeek == None:
                if hrSum >= 13:
                    new_time += f"{hrSum - 12}:{minSum:02} PM (next day)"
                elif hrSum == 12:
                    new_time += f"{hrSum}:{minSum:02} PM (next day)"
                elif hrSum == 0:
                    new_time += f"12:{minSum:02} AM (next day)"
                else:
                    new_time += f"{hrSum}:{minSum:02} AM (next day)"
            else:
                dayIndex = checkDayOfTheWeek(dayOfTheWeekFormatted)
                day = getDayOfTheWeekWithIndex(dayIndex, daysLater)
                if hrSum >= 13:
                    new_time += f"{hrSum - 12}:{minSum:02} PM, {day} (next day)"
                elif hrSum == 12:
                    new_time += f"{hrSum}:{minSum:02} PM, {day} (next day)"
                elif hrSum == 0:
                    new_time += f"12:{minSum:02} AM, {day} (next day)"
                else:
                    new_time += f"{hrSum}:{minSum:02} AM, {day} (next day)"
        else:
            if dayOfTheWeek == None:
                if hrSum >= 13:
                    new_time += f"{hrSum - 12}:{minSum:02} PM ({daysLater} days later)"
                elif hrSum == 12:
                    new_time += f"{hrSum}:{minSum:02} PM ({daysLater} days later)"
                elif hrSum == 0:
                    new_time += f"12:{minSum:02} AM ({daysLater} days later)"
                else:
                    new_time += f"{hrSum}:{minSum:02} AM ({daysLater} days later)"
            else:
                dayIndex = checkDayOfTheWeek(dayOfTheWeekFormatted)
                day = getDayOfTheWeekWithIndex(dayIndex, daysLater)
                if hrSum >= 13:
                    new_time += f"{hrSum - 12}:{minSum:02} PM, {day} ({daysLater} days later)"
                elif hrSum == 12:
                    new_time += f"{hrSum}:{minSum:02} PM, {day} ({daysLater} days later)"
                elif hrSum == 0:
                    new_time += f"12:{minSum:02} AM, {day} ({daysLater} days later)"
                else:
                    new_time += f"{hrSum}:{minSum:02} AM, {day} ({daysLater} days later)"

    return new_time


print(add_time("11:59 PM", "24:05"))
