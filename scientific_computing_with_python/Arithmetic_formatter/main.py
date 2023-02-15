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
    arranged_problems = ["", "", "", ""]
    space = " "
    dash = "-"

    for i in range(len(problems)):
        num1 = problems[i].split(" ")[0]
        num2 = problems[i].split(" ")[2]
        operand = problems[i].split(" ")[1]

        num1Length = len(str(num1))
        num2Length = len(str(num2))

        if num1Length > num2Length:
            longest = num1Length
            shortest = num2Length
        else:
            shortest = num1Length
            longest = num2Length

        diff = longest - shortest

        # arrange first number depending if it's the longest one
        if num1Length == longest:
            arranged_problems[0] += f"{space * 2}{num1}"
            arranged_problems[1] += f"{operand}{space}{space * diff}{num2}"
        elif num2Length == longest:
            arranged_problems[0] += f"{space * 2}{space * diff}{num1}"
            arranged_problems[1] += f"{operand}{space}{num2}"

        arranged_problems[2] += f"{dash * (longest + 2)}"

        if (solution == True):
            if operand == "+":
                solutionNumber = int(num1) + int(num2)
                if len(str(solutionNumber)) > longest:
                    arranged_problems[3] += f"{space}{solutionNumber}"
                elif len(str(solutionNumber)) == 5:
                    arranged_problems[3] += f"{space}{solutionNumber}"
                else:
                    arranged_problems[3] += f"{space * 2}{solutionNumber}"
            else:
                solutionNumber = int(num1) - int(num2)
                if len(str(solutionNumber)) > longest:
                    arranged_problems[3] += f"{space}{solutionNumber}"
                elif len(str(solutionNumber)) == 5:
                    arranged_problems[3] += f"{space}{solutionNumber}"
                else:
                    arranged_problems[3] += f"{space * 2}{solutionNumber}"

        if i == len(problems) - 1:
            break
        else: 
            arranged_problems[0] += space * 4
            arranged_problems[1] += space * 4
            arranged_problems[2] += space * 4
            arranged_problems[3] += space * 4
        
    if solution == False:
        return f"{arranged_problems[0]}\n{arranged_problems[1]}\n{arranged_problems[2]}"
    else:
        return f"{arranged_problems[0]}\n{arranged_problems[1]}\n{arranged_problems[2]}\n{arranged_problems[3]}"


print(arithmetic_arranger(["3 + 855", "988 + 40"], True))

'    3      988\n+ 855    +  40\n-----    -----\n  858      1028'
'    3      988\n+ 855    +  40\n-----    -----\n  858     1028'