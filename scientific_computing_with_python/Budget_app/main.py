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

# chart
def create_spend_chart(categories):
    # calculate total amount spent
    total_spent = []
    for category in categories:
        total = 0
        for item in category.ledger:
            if item['amount'] < 0:
                total -= item['amount']
        total_spent.append(total)

    # calculate percentage spent
    percentages = []
    for amount in total_spent:
        percentage = (amount / sum(total_spent)) * 100
        percentage = percentage - percentage % 10
        percentages.append(int(percentage))

    # create chart
    chart = "Percentage spent by category\n"
    for i in range(100, -10, -10):
        chart += str(i).rjust(3) + "| "
        for percentage in percentages:
            if percentage >= i:
                chart += "o  "
            else:
                chart += "   "
        chart += "\n"

    chart += "    " + "-" * (len(categories) * 3 + 1) + "\n"

    # get category names and pad with spaces
    category_names = []
    max_length = 0
    for category in categories:
        category_names.append(category.instance_category)
        if len(category.instance_category) > max_length:
            max_length = len(category.instance_category)
    for i in range(max_length):
        chart += "     "
        for name in category_names:
            if i < len(name):
                chart += name[i] + "  "
            else:
                chart += "   "
            if name == category_names[-1]:
                chart += "" if i == max_length - 1 else "\n"

    return chart
