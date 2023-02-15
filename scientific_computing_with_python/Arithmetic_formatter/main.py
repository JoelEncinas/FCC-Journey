def arithmetic_arranger(problems, solution=False):
    # err situations
    if len(problems) > 5:
        return 'Error: Too many problems.'

    for i in range(len(problems)):
        if not problems[i].split(" ")[0].isdigit() or not problems[i].split(" ")[2].isdigit():
            return "Error: Numbers must only contain digits."

        if len(str(problems[i].split(" ")[0])) > 4 or len(str(problems[i].split(" ")[2])) > 4:
            return "Error: Numbers cannot be more than four digits."

        if problems[i].split(" ")[1] not in ['+', '-']:
            return "Error: Operator must be '+' or '-'."

    # conversion
    arranged_problems = ""
    space = " "
    dash = "-"

    for i in range(len(problems)):
        num1 = problems[i].split(" ")[0]
        num2 = problems[i].split(" ")[2]
        operand = problems[i].split(" ")[1]
        num1Length = len(str(num1))
        num2Length = len(str(num2))
        shortest = num1Length if len(str(num1Length)) > len(
            str(num2Length)) else num2Length
        longest = num2Length if len(str(num2Length)) > len(
            str(num1Length)) else num1Length
        arranged_problems += f"{space * 2}{num1}\n"
        arranged_problems += f"{operand}{space}{space * (longest - shortest)}{num2}\n"
        arranged_problems += f"{dash * (longest + 2)}\n"

        if (solution == True):
            if operand == "+":
                solutionNumber = int(num1) + int(num2)
            else:
                solutionNumber = int(num1) - int(num2)

            arranged_problems += f"{space * 2}{solutionNumber}"

    return arranged_problems


print(arithmetic_arranger(["32 + 8"], True))
