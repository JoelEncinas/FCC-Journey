class Category:
    category = ""
    ledger = []

    def __init__(self, category):
        self.category = category

    def deposit(self, amount, description=""):
        self.ledger.append({"amount": amount, "description": description})

    def get_balance(self):
        total_amount = 0
        
        for entry in self.ledger:
            total_amount += entry['amount']
        return total_amount

    def withdraw(self, amount, description=""):
        if amount > self.get_balance():
            return False
        else:
            self.ledger.append(
                {"amount": -1 * amount, "description": description})
            return True

    def transfer(self, amount, budget_category):
        if amount < self.get_balance() and budget_category.get_balance() >= amount:
            self.withdraw(amount, f"Transfer to {budget_category.category}")
            budget_category.deposit(amount, f"Transfer from {self.category}")
            return True
        else:
            return False

    def check_funds(self, amount):
        total_amount = 0

        for entry in self.ledger:
            total_amount += entry['amount']

        if amount > total_amount:
            return False
        else:
            return True


food = Category("Food")
food.deposit(10, "check")
food.withdraw(5, "beer")
food.withdraw(20, "cake")
clothing = Category("Clothing")
clothing.deposit(20, "check")
food.transfer(6, clothing)
food.transfer(2, clothing)

print(food.get_balance())
print(clothing.get_balance())
