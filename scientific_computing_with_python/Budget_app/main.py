import math

class Category:
    def __init__(self, budget_category):
        self.instance_category = budget_category
        self.ledger = []

    def __str__(self):
        ledger_str = ""
        category_len = len(self.instance_category)
        line_len = 30
        center = int(line_len / 2 - (category_len / 2))
        asterisk = "*"
        ledger_str = f"{asterisk * center}{self.instance_category}{asterisk * center}\n"

        for entry in self.ledger:
            space = " "

            # description
            desc = entry["description"]
            description_len = len(desc)
            printed_desc = ""
            if description_len > 23:
                printed_desc = desc[0:23]
            else:
                printed_desc = desc

            # amount
            amount_int = entry["amount"]
            amount = f"{entry['amount']:.2f}"
            amount_len = len(amount)
            if amount_int < 0:
                amount_len += 1

            amount_entry = f"{space * (8 - amount_len) if amount_int < 0 else space * (7 - amount_len)}{amount}"

            # entry
            ledger_str += f"{printed_desc}{space * (23 - description_len)}{amount_entry}\n"

        # total
        ledger_str += f"Total: {self.get_balance()}"

        return ledger_str

    def deposit(self, amount, description=""):
        self.ledger.append({"amount": amount, "description": description})

    def get_balance(self):
        total_amount = 0

        for entry in self.ledger:
            total_amount += entry["amount"]
        return total_amount

    def withdraw(self, amount, description=""):
        if not self.check_funds(amount):
            return False
        else:
            self.ledger.append(
                {"amount": -1 * amount, "description": description})
            return True

    def transfer(self, amount, budget_category):
        if self.check_funds(amount):
            self.withdraw(
                amount, f"Transfer to {budget_category.instance_category}")
            budget_category.deposit(
                amount, f"Transfer from {self.instance_category}")
            return True
        else:
            return False

    def check_funds(self, amount):
        total_amount = self.get_balance()

        if amount > total_amount:
            return False
        else:
            return True

# test
food = Category("Food")
food.deposit(100, "food")
food.withdraw(5, "chocolate")
food.withdraw(10, "bananas")

clothes = Category("Clothes")
clothes.deposit(100, "clothes")
clothes.withdraw(50, "gloves")

entertainment = Category("Entertainment")
entertainment.deposit(100, "auto")
entertainment.withdraw(20, "oil")

# chart
def create_spend_chart(categories):
    space = " "
    dash = "-"
    categories_info = []

    # data
    total_withdraws_all = 0
    for category in categories:
        total_withdraws = 0
        for entry in category.ledger:
            if entry["amount"] < 0:
                total_withdraws += entry["amount"] * -1
                total_withdraws_all += entry["amount"] * -1

        categories_info.append(
            {"name": category.instance_category, "withdraws": total_withdraws})

    # title
    str_chart = "Percentage spent by category\n"

    # percentages
    percentage = 100

    while percentage > -1:
        if percentage == 100:
            str_chart += f"{percentage}|"
        elif percentage > 0 and percentage < 100:
            str_chart += f"{space}{percentage}|"
        else:
            str_chart += f"{space * 2}{percentage}|"
       
        for category in categories_info:
            cat_percentage = int(str(math.floor(int((category["withdraws"] / total_withdraws_all) * 100)))[0]) * 10
            if cat_percentage >= percentage:
                str_chart += f"{space}o{space}"
            else:
                str_chart += f"{space * 3}"
        str_chart += "\n"
        percentage -= 10

    str_chart += f"{space * 4}{(dash * 3) * len(categories_info)}{dash}\n"

    # get longest word
    max_len = 0
    for category in categories_info:
        if len(category["name"]) > max_len:
            max_len = len(category["name"])

    # categories in chart
    count = 0
    categories_info_len = len(categories_info)

    while count < max_len:
        str_chart += f"{space * 4}"
        inner_count = 0
        for category in categories_info:
            if count < len(category['name']):
                str_chart += f"{space}{category['name'][count]}{space}"
            else:
                str_chart += f"{space * 3}"
            if inner_count == categories_info_len - 1:
                str_chart += f"{space}\n"
            
            inner_count += 1

        count += 1

    return str_chart

print(create_spend_chart([food, clothes, entertainment]))