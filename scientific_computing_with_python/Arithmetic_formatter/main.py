def arithmetic_arranger(problems, solutions = False):
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

    #return arranged_problems

print(arithmetic_arranger(["32 + 8", "1 - 3801", "9999 + 9999", "523 + 49"], True))